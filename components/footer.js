"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, ShieldCheck, Youtube } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const products = [
  ["Payment Gateway", "/payments"],
  ["Hexa wallets & cards", "/platform"],
  ["Subscription", "/payments"],
  ["Native OTP", "/payments"],
  ["Verification Services", "/kyc-policy"],
];

const industries = [
  ["Travel & Booking", "/services#travel-booking"],
  ["Lending", "/services#loans"],
  ["Insurance", "/services#insurance"],
  ["EdTech", "/merchants"],
  ["WealthTech", "/merchants"],
];

const companyLinks = [
  ["About Finunique", "/about"],
  ["Contact", "/contact"],
  ["Pricing", "/pricing"],
  ["Developers", "/developers"],
  ["Partners", "/partners"],
];

const resources = [
  ["Blog", "/services#blog"],
  ["GST Calculator", "/services#gst-calculator"],
  ["Profit Margin Calculator", "/services#profit-margin-calculator"],
  ["ROI Calculator", "/services#roi-calculator"],
  ["EMI Calculator", "/services#emi-calculator"],
];

const legalLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Use", "/terms"],
  ["Refund Policy", "/refund-policy"],
  ["Chargeback Policy", "/chargeback-policy"],
  ["KYC Policy", "/kyc-policy"],
];

const socials = [
  [Linkedin, "LinkedIn", "https://www.linkedin.com"],
  [Instagram, "Instagram", "https://www.instagram.com"],
  [Facebook, "Facebook", "https://www.facebook.com"],
  [Youtube, "YouTube", "https://www.youtube.com"],
];

const currentYear = new Date().getFullYear();

function LinkList({ links }) {
  return (
    <nav className="mt-4 grid gap-3 text-sm leading-6 text-ink/70">
      {links.map(([label, href]) => (
        <Link key={label} href={href} className="transition hover:text-ocean">
          {label}
        </Link>
      ))}
    </nav>
  );
}

function SectionTitle({ children }) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[.2em] text-ink/70">{children}</h2>
      <span className="mt-3 block h-0.5 w-10 rounded-full bg-ocean" />
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && (pathname === "/login" || pathname === "/signup")) return null;

  return (
    <footer className="border-t border-ocean/10 bg-slate-50 text-ink">
      <div className="page-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_2.6fr]">
          <section className="space-y-8">
            <div className="space-y-6">
              <Link href="/" aria-label="Finunique home" className="inline-flex">
                <BrandLogo className="h-10 text-2xl" />
              </Link>
              <p className="max-w-sm text-sm leading-7 text-ink/70">
                Finunique combines payments, payouts, verification and merchant operations so businesses move faster with less complexity.
              </p>
            </div>

            <div className="space-y-6 text-sm text-ink/70">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-ink/50">Monday - Friday</p>
                <p className="mt-2 text-lg font-semibold text-ink">9:30 AM to 6:30 PM</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[.2em] text-ink/50">Call or WhatsApp us on</p>
                <p className="mt-2 font-semibold text-ink">+91 92515 82693</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[.2em] text-ink/50">Contact us on</p>
                <p className="mt-2 font-semibold text-ink">+91 141-4511098</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[.2em] text-ink/50">Email us</p>
                <p className="mt-2 font-semibold text-ink">sales@finunique.example</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(([Icon, label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-ocean text-white transition hover:bg-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </section>

          <section>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              <div>
                <SectionTitle>Products</SectionTitle>
                <LinkList links={products} />
              </div>

              <div>
                <SectionTitle>Industries</SectionTitle>
                <LinkList links={industries} />
              </div>

              <div>
                <SectionTitle>Resources</SectionTitle>
                <LinkList links={resources} />
              </div>

              <div>
                <SectionTitle>Company</SectionTitle>
                <LinkList links={companyLinks} />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-t border-ocean/15 bg-white/80">
        <div className="page-shell flex flex-col gap-4 py-4 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Finunique Technologies Private Limited. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4">
            {legalLinks.map(([label, href]) => (
              <Link key={label} href={href} className="transition hover:text-ocean">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
