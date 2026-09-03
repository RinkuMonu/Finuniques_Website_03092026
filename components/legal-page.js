export function LegalPage({ eyebrow, title, updated, sections }) {
  return <section className="py-16 sm:py-24"><article className="page-shell max-w-4xl"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">{title}</h1><p className="mt-4 text-sm text-ink/45">Last updated: {updated}</p><div className="mt-12 space-y-10">{sections.map(([heading,body])=><section key={heading}><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-4 leading-8 text-ink/65">{body}</p></section>)}</div></article></section>;
}
