import Link from "next/link";

export const products = [
  ["Ware yams", "Market-ready yams for markets, homes, restaurants, caterers, and processors.", "Y", "Ware yams"],
  ["Seed yams", "Quality planting materials backed by practical crop guidance.", "S", "Seed yams"],
  ["Goats & breeding stock", "Healthy livestock for chevon, live sales, and herd improvement.", "G", "Goats"],
  ["Organic manure", "Farm inputs that support productive soil and crop establishment.", "M", "Organic manure"],
] as const;

export function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="display mt-3 text-4xl font-bold text-[#173d2e] md:text-5xl">{title}</h2>{copy && <p className="mt-5 leading-7 text-[#5c685f]">{copy}</p>}</div>;
}

export function ProductGrid() {
  return <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map(([title, copy, marker, enquiryType]) => <article className="card" key={title}><span className="display inline-grid size-10 place-items-center rounded-full bg-[#eaf0e5] text-lg font-bold text-[#326043]">{marker}</span><h3 className="display mt-5 text-2xl font-bold text-[#173d2e]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#5c685f]">{copy}</p><Link href={`/contact?type=${encodeURIComponent(enquiryType)}`} className="mt-5 inline-block text-sm font-bold text-[#326043] underline">Enquire now →</Link></article>)}</div>;
}

export function CtaBand({ title, copy, advisory = false }: { title: string; copy: string; advisory?: boolean }) {
  return <section className="texture py-14 text-white"><div className="shell flex flex-col justify-between gap-7 md:flex-row md:items-end"><div className="max-w-2xl"><p className="eyebrow !text-[#e6bf70]">Let&apos;s talk</p><h2 className="display mt-2 text-4xl font-bold md:text-5xl">{title}</h2><p className="mt-4 leading-7 text-[#d7e0d4]">{copy}</p></div><Link href={advisory ? "/contact?type=Advisory%20service" : "/contact"} className="button border-white bg-white !text-[#173d2e] hover:!bg-[#e7eddc]">{advisory ? "Request a consultation" : "Send an enquiry"}</Link></div></section>;
}
