import Link from "next/link";

const nav = [["About Us", "/about"], ["Products & Services", "/products-services"], ["Sustainable Farming", "/sustainability"], ["Advisory Services", "/advisory"], ["Contact Us", "/contact"]] as const;

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return <>{nav.map(([label, href]) => <Link className={mobile ? "block border-b border-[#e5e5dd] py-4 text-sm font-bold text-[#173d2e]" : "nav-link"} href={href} key={href}>{label}</Link>)}</>;
}

export function Header() {
  return <header className="sticky top-0 z-40 border-b border-[#e5e5dd] bg-[#fffdf8]/95 backdrop-blur"><div className="shell flex min-h-[76px] items-center justify-between gap-6 py-3"><Link href="/" className="display text-xl font-bold text-[#173d2e]">Roots <span className="text-[#c89435]">&amp;</span> Hooves<span className="block font-sans text-[.58rem] font-bold tracking-[.2em]">AGRO FARMS</span></Link><nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex"><NavLinks /><Link href="/contact" className="button px-4 py-2 text-xs">Request availability</Link></nav><details className="group relative lg:hidden"><summary className="cursor-pointer list-none border border-[#173d2e] px-3 py-2 text-sm font-bold text-[#173d2e]"><span className="group-open:hidden">Menu</span><span className="hidden group-open:inline">Close</span></summary><nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+12px)] w-72 border border-[#dfded5] bg-[#fffdf8] p-4 shadow-xl"><NavLinks mobile /><Link href="/contact" className="button mt-4 w-full">Request availability</Link></nav></details></div></header>;
}

export function Footer() {
  return <footer className="bg-[#112d22] py-12 text-[#f6f0e5]"><div className="shell grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]"><div><p className="display text-2xl font-bold">Roots <span className="text-[#d7aa58]">&amp;</span> Hooves</p><p className="mt-3 max-w-sm text-sm leading-6 text-[#cbd5c8]">Growing quality yams and raising healthy goats through a practical, integrated farming system.</p></div><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#d7aa58]">Explore</p><div className="mt-3 grid gap-2 text-sm"><NavLinks mobile /></div></div><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#d7aa58]">Get in touch</p><a className="mt-3 block text-sm underline" href="mailto:Abolmike@gmail.com">Abolmike@gmail.com</a><a className="mt-3 block text-sm underline" href="https://instagram.com/Abolmike" rel="noreferrer" target="_blank">Instagram @Abolmike</a><p className="mt-3 text-sm leading-6 text-[#cbd5c8]">Phone, WhatsApp, service area, and operating hours will be added when verified.</p><Link className="mt-4 inline-block text-sm underline" href="/privacy-policy">Privacy policy</Link></div></div></footer>;
}
