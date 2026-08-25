import { NextResponse } from "next/server";

const fields = ["name", "email", "phone", "organisation", "type", "quantity", "fulfilment", "location", "message"] as const;
const enquiryTypes = ["Ware yams", "Seed yams", "Goats", "Breeding stock", "Organic manure", "Advisory service", "Partnership", "Other"];

function value(data: Record<string, unknown>, key: string, limit = 500) {
  return String(data[key] ?? "").trim().slice(0, limit);
}

function escapeHtml(input: string) {
  return input.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as Record<string, unknown>;
    const email = value(data, "email", 254);
    const type = value(data, "type", 100);
    if (value(data, "website") || !value(data, "name", 120) || !email || !/^\S+@\S+\.\S+$/.test(email) || !value(data, "message", 4000) || data.consent !== "on" || !enquiryTypes.includes(type)) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }

    const enquiry = Object.fromEntries(fields.map((key) => [key, value(data, key, key === "message" ? 4000 : 500)]));
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.ENQUIRY_FROM_EMAIL;
    const recipient = process.env.ENQUIRY_RECIPIENT_EMAIL;
    if (!apiKey || !from || !recipient) return NextResponse.json({ error: "Enquiries are not configured yet. Please email us directly." }, { status: 503 });

    const html = `<h1>New Roots &amp; Hooves enquiry</h1>${fields.map((key) => `<p><strong>${key}:</strong> ${escapeHtml(enquiry[key]).replace(/\n/g, "<br>")}</p>`).join("")}`;
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [recipient], reply_to: email, subject: `New ${type} enquiry from ${enquiry.name}`, html }),
    });
    if (!response.ok) return NextResponse.json({ error: "Unable to send enquiry. Please email us directly." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process enquiry" }, { status: 400 });
  }
}
