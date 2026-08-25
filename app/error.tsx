"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="section section-alt"><div className="shell max-w-2xl text-center"><p className="eyebrow">Something went wrong</p><h1 className="display mt-3 text-5xl font-bold text-[#173d2e]">Please try that again.</h1><p className="mt-5 leading-7 text-[#526258]">We could not load this part of the site. You can try again or return to the home page.</p><div className="mt-7 flex justify-center gap-3"><button className="button" onClick={reset}>Try again</button><a className="button button-outline" href="/">Return home</a></div></div></section>;
}
