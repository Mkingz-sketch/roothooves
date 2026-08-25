# Roots & Hooves Agro Farms

Responsive Next.js marketing site built from the supplied PRD.

## Run locally

1. Install Node.js 20.9+ and enable Corepack (`corepack enable`).
2. Copy `.env.example` to `.env.local` and complete its values.
3. Run `yarn install`.
4. Run `yarn dev` and open `http://localhost:3000`.

## Before production launch

- Replace the enquiry route's temporary `console.info` handling with Resend email delivery and Cloudflare Turnstile verification.
- Add the confirmed phone/WhatsApp number, address or service area, hours, final social URLs, logo, and approved farm photography.
- Set the final `NEXT_PUBLIC_SITE_URL`, deploy to Vercel, and configure the production domain.
- Review the privacy policy against the final analytics, CMS, and enquiry-storage setup.
