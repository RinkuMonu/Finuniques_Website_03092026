import Link from "next/link";

export function AuthShell({ eyebrow, title, description, children, footerText, footerLink, footerLabel }) {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-cloud py-14 sm:py-20">
      <div className="page-shell grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <div className="max-w-lg">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-ink/60">{description}</p>
          <div className="mt-10 rounded-3xl bg-ink p-7 text-white"><p className="text-sm font-bold text-lime">Protected by Finunique</p><p className="mt-2 text-sm leading-6 text-white/60">Your account uses encrypted connections and continuous security monitoring.</p></div>
        </div>
        <div className="mx-auto w-full max-w-xl rounded-[2rem] bg-white p-7 shadow-soft sm:p-10">
          {children}
          <p className="mt-7 text-center text-sm text-ink/55">{footerText} <Link href={footerLink} className="font-bold text-emerald-700">{footerLabel}</Link></p>
        </div>
      </div>
    </section>
  );
}

export function FormField({ label, type = "text", name, placeholder }) {
  return <label className="block text-sm font-semibold">{label}<input required type={type} name={name} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10" /></label>;
}
