import type { MetadataRoute } from "next";
const routes = ["", "/about", "/products-services", "/sustainability", "/advisory", "/contact", "/privacy-policy"];
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; return routes.map(route => ({ url: `${base}${route}`, lastModified: new Date() })); }
