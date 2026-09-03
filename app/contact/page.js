import { Mail, Phone, Clock, MapPin } from "lucide-react";

export const metadata = { title: "Contact | Finunique" };

function Field({ label, name, type = "text", placeholder }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3.5 outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/10"
      />
    </label>
  );
}

export default function Contact() {
  return (
    <section className="py-20 sm:py-28">
      <div className="page-shell grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Talk to sales</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl">Let’s build your payment stack.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/60">
            Share your business goals, transaction volume and workflow needs. We’ll recommend the best financial infrastructure to simplify payments, payouts and verification.
          </p>

          <div className="mt-10 space-y-5 rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ocean text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Email</p>
                <p className="mt-1 text-sm text-ink/70">sales@finunique.example</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ocean text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Phone</p>
                <p className="mt-1 text-sm text-ink/70">+91 92515 82693</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ocean text-white">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Availability</p>
                <p className="mt-1 text-sm text-ink/70">Monday–Friday, 9:30–18:00 IST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ocean text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Location</p>
                <p className="mt-1 text-sm text-ink/70">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" name="firstName" />
            <Field label="Last name" name="lastName" />
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Work email" name="email" type="email" />
            <Field label="Phone number" name="phone" type="tel" />
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Company" name="company" />
            <Field label="Monthly payment volume" name="volume" placeholder="e.g. ₹25 lakh" />
          </div>
          <label className="mt-5 block text-sm font-semibold">
            What do you need?
            <select className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/10">
              <option>Accept online payments</option>
              <option>Automate payouts</option>
              <option>Marketplace payments</option>
              <option>Payment operations platform</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="mt-5 block text-sm font-semibold">
            Tell us more
            <textarea
              className="mt-2 min-h-28 w-full rounded-xl border border-ink/15 px-4 py-3.5 outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/10"
              placeholder="Share your use case, current challenges or integration needs."
            />
          </label>
          <button className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ocean px-6 py-3 text-sm font-bold text-white transition hover:bg-ink/90">
            Send request
          </button>
          <p className="mt-4 text-sm text-ink/60">
            We typically respond within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}
