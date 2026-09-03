export default function NotFound() {
  return (
    <section className="page-shell py-24 text-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-6 text-5xl font-extrabold">We couldn’t find that page.</h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-ink/70">
        The link may be broken or the page may have been moved. Use the navigation to find what you need.
      </p>
    </section>
  );
}
