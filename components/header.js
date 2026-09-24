"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BadgeCheck, BarChart3, BriefcaseBusiness, Building2, ChevronDown, CircleDollarSign, Clock, CreditCard, FileCheck, Fingerprint, IdCard, Landmark, Link2, LogIn, LogOut, Menu, MonitorSmartphone, ReceiptText, Repeat2, Send, ShieldCheck, Smartphone, Store, UserRound, Users, WalletCards, X, Zap } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const dropdowns = [
 
  {
    label: "Company",
    links: [
      ["About Finunique", "/about", "Meet the team building simpler payments"],
      ["Contact", "/contact", "Talk to our payments specialists"],
      ["Privacy & Security", "/privacy", "See how we protect your business"],
    ],
  },
  {
    label: "Partner with Us",
    links: [
      ["Business Partners", "/partners", "Offer Finunique services to your business network"],
      ["Technology Partners", "/technologypartners", "Build connected solutions and integrations"],
      ["Banking Partners", "/bankingpartners", "Collaborate on secure financial infrastructure"],
    ],
  },
   {
    label: "API Partners",
    links: [
      ["What do we Provide?", "/apipartners/whatwedo", "Discover the APIs, features, and services Finunique provides"],
      ["How does it Work?", "/apipartners/howdoesitwork", "Learn how Finunique works and follow the integration process"],
      ["How do we become a partner and integrate?", "/apipartners/becomeapartner", "Learn how to become a Finunique partner and integrate with our platform"],
    ],
  },
   {
    label: "Products",
    links: [["Payment Gateway", "/products/payment-gateway"], ["Hexa wallets/corporate cards", "/products/corporate-cards"], ["Subscription", "/products/easycollect"], ["Native OTP", "/products/native-otp"], ["Aadhaar Verification", "/products/aadhaar-verification"], ["PAN Verification", "/products/pan-verification"], ["Bank Account Verification", "/products/bank-verification"]],
  },
  {
    label: "Industries",
    links: [
      ["Travel & Booking", "/industries/travel", "Bus, hotel, train and flight booking services"],
      ["Lending", "/industries/lending", "Credit cards and loan solutions"],
      ["Insurance", "/industries/insurance", "Health, life, motor and travel insurance"],
      ["EdTech", "/industries/edtech", "Payment solutions for the edTech sector"],
      ["D2C and E-Commerce", "/industries/ecommerce", "An All-In-One Solution for Checkout, Payments and RTO"],
      ["WealthTech", "/industries/wealthtech", "WealthTech Payment Solutions, Simplify SIPs & Fund Flows"],
    ],
  },
  // {
  //   label: "Resources",
  //   links: [
  //     ["Blog", "/resources/blog", "Learn more with Finunique"],
  //     ["GST Calculator", "/resources/gst-calculator", "Calculate GST-inclusive and exclusive values"],
  //     ["Profit Margin Calculator", "/resources/profit-margin-calculator", "Estimate profit, cost and selling margins"],
  //     ["ROI Calculator", "/resources/roi-calculator", "Measure returns on your business investment"],
  //     ["EMI Calculator", "/resources/emi-calculator", "Estimate monthly loan instalments"],
  //   ],
  // },
  // {
  //   label: "Developers",
  //   links: [
  //     ["API Documentation", "/developers/api-documentation", "Explore Finunique APIs and endpoints"],
  //     ["Integration Guides", "/developers/integration-guides", "Follow implementation and onboarding guides"],
  //     ["SDKs & Libraries", "/developers/sdks-libraries", "Build faster with supported development tools"],
  //     ["Sandbox", "/developers/sandbox", "Test payment and verification workflows"],
  //     ["API Status", "/developers/api-status", "Review service availability and updates"],
  //   ],
  // },
];

const directLinks = [["Pricing", "/pricing"], ["Support", "/contact"]];

const industryGroups = [
  { label: "Travel", description: "Travel payments and booking services", icon: Send, links: [["Bus Booking", "/industries/travel/bus-booking"], ["Hotel Booking", "/industries/travel/hotel-booking"], ["Train Booking", "/industries/travel/train-booking"], ["Flight Booking", "/industries/travel/flight-booking"]] },
  { label: "Lending", description: "Credit and lending solutions", icon: Landmark, links: [ ["Home Loan", "/industries/lending/home-loan"], ["Instant Loan", "/industries/lending/instant-loan"], ["Personal Loan", "/industries/lending/personal-loan"], ["Business Loan", "/industries/lending/business-loan"], ["Car Loan", "/industries/lending/car-loan"], ["Gold Loan", "/industries/lending/gold-loan"]] },
  { label: "Insurance", description: "Protection for people, health and assets", icon: ShieldCheck, links: [["Insurance", "/industries/insurance"], ["Health Insurance", "/industries/insurance/healthinsurance"], ["Life Insurance", "/industries/insurance/lifeinsurance"], ["Motor Insurance", "/industries/insurance/motorinsurance"], ["Travel Insurance", "/industries/insurance/travelinsurance"]] },
  { label: "EdTech", description: "Payment solutions for the education sector", icon: FileCheck, links: [["Education Collections", "/industries/edtech/educollections"], ["Fee Payments", "/industries/edtech/feepayments"]] },
  { label: "D2C & E-Commerce", description: "Checkout, payments and RTO solutions", icon: Store, links: [["Payment Gateway", "/industries/ecommerce/paymentgateway"], ["Payment Links", "/industries/ecommerce/paymentlinks"],] },
  { label: "WealthTech", description: "Simplify SIPs and fund flows", icon: BarChart3, links: [["Payment Collections", "/industries/wealthtech/paymentcollections"], ["Business Payouts", "/industries/wealthtech/businesspayouts"]] },
];

const productGroups = [
  {
    label: "Accept Payments",
    description: "For all online platforms",
    icon: CreditCard,
    heading: "ACCEPT PAYMENTS",
    products: [
      [CreditCard, "Payment Gateway", "Accept payments with an API integration", "/products/payment-gateway", true],
      [Link2, "Payment Link", "Accept payments via a link", "/products/payment-link", false],
      [Users, "Slices", "Split payments to vendors on every sale", "/products/slices", true],
      [Repeat2, "EasyCollect", "Manage subscription based payments", "/products/easycollect", true],
      [Smartphone, "InstaCollect", "Instant collections using VPA", "/products/instacollect", true],
      [ReceiptText, "EBPS", "Bill payment system for service providers to collect payments", "/products/ebps", false],
    ],
  },
  {
    label: "Manage Payments",
    description: "Control payments from a single dashboard",
    icon: BarChart3,
    heading: "MANAGE PAYMENTS",
    products: [
      [Store, "Merchant Dashboard", "Manage payments from one workspace", "/products/merchant-dashboard", false],
      [BarChart3, "Payment Analytics", "Track performance and cash flow", "/products/payment-analytics", false],
      [Repeat2, "Reconciliation", "Match payments, fees, refunds and settlements", "/products/reconciliation", false],
      [ReceiptText, "Settlement Reports", "Export finance-ready transaction data", "/products/settlement-reports", false],
    ],
  },
  {
    label: "Payout & Banking",
    description: "Payout, transfer and assisted banking services",
    icon: Send,
    heading: "PAYOUT & BANKING",
    products: [
      [Send, "Payout", "Send secure business payouts", "/products/payout", false],
      [CircleDollarSign, "DMT", "Domestic money transfer services", "/products/dmt", false],
      [Fingerprint, "AEPS", "Aadhaar-enabled payment services", "/products/aeps", false],
    ],
  },
  {
    label: "UPI Payments",
    description: "Power payments with India's most complete UPI stack",
    icon: Smartphone,
    heading: "UPI PAYMENTS",
    products: [
      [Smartphone, "UPI Collections", "Create fast UPI payment experiences", "/products/upi-collections", false],
      [Link2, "UPI Payment Links", "Collect payments through a shareable link", "/products/upi-payment-links", false],
      [Users, "UPI Marketplace Split", "Split collections between vendors automatically", "/products/upi-marketplace-split", false],
      [Zap, "UPI APIs", "Build custom UPI payment experiences", "/products/upi-apis", false],
    ],
  },
  {
    label: "Cards & Affordability",
    description: "Cards, EMIs, BNPL and payment offers",
    icon: CircleDollarSign,
    heading: "CARDS & AFFORDABILITY",
    products: [
      [WalletCards, "Corporate Cards", "Prepaid card solutions for businesses", "/products/corporate-cards", false],
      [CreditCard, "Card EMI", "Offer flexible card-based instalments", "/products/card-emi", false],
      [CircleDollarSign, "Buy Now, Pay Later", "Give customers more ways to pay", "/products/bnpl", false],
      [BadgeCheck, "Offers Engine", "Create targeted payment offers", "/products/offers-engine", false],
      [Landmark, "No-cost EMI", "Enable affordable instalment plans", "/products/no-cost-emi", false],
    ],
  },
  {
    label: "AI Solutions",
    description: "Enter the Next Phase of Commerce",
    icon: Zap,
    heading: "AI SOLUTIONS",
    products: [
      [Zap, "Smart Payment Routing", "Improve success rates automatically", "/products/smart-routing", false],
      [ShieldCheck, "AI Risk Detection", "Identify suspicious transactions in real time", "/products/ai-risk-detection", false],
      [BarChart3, "Intelligent Insights", "Turn payment data into business decisions", "/products/intelligent-insights", false],
      [MonitorSmartphone, "Smart Checkout", "Personalize the checkout experience", "/products/smart-checkout", false],
    ],
  },
  {
    label: "Verification Services",
    description: "Verify customers, accounts and businesses",
    icon: Fingerprint,
    heading: "VERIFICATION",
    products: [
      [BarChart3, "CIBIL Score Check", "Check customer credit scores securely", "/products/cibil-score-check", false],
      [IdCard, "PAN Verification with OTP", "Verify PAN details using OTP", "/products/pan-verification-otp", false],
      [Fingerprint, "Aadhaar Validation with OTP", "Validate Aadhaar details securely", "/products/aadhaar-validation-otp", false],
      [BriefcaseBusiness, "GSTIN Verification", "Validate registered business GST details", "/products/gstin-verification", false],
      [Landmark, "Bank Verification", "Confirm bank account and beneficiary details", "/products/bank-verification", false],
      [BadgeCheck, "Udyam Verification", "Verify MSME and Udyam registrations", "/products/udyam-verification", false],
      [FileCheck, "CIN Verification", "Validate company registration details", "/products/cin-verification", false],
      [IdCard, "Voter ID Verification", "Verify voter identity details", "/products/voter-id-verification", false],
    ],
  },
  {
    label: "Utility Services",
    description: "Everyday payments for merchants and businesses",
    icon: Zap,
    heading: "UTILITY SERVICES",
    products: [
      [Smartphone, "Corporate Mobile & DTH", "Manage business mobile and DTH recharges", "/products/corporate-mobile-dth", false],
      [Zap, "Commercial Electricity", "Pay electricity bills across business locations", "/products/commercial-electricity", false],
      [CircleDollarSign, "Water & Municipal Bills", "Manage water and municipal utility payments", "/products/water-municipal-bills", false],
      [CircleDollarSign, "Gas & LPG Payments", "Pay commercial gas and LPG bills", "/products/gas-lpg-payments", false],
      [CreditCard, "FASTag & Fleet Recharge", "Recharge FASTag accounts for business fleets", "/products/fastag-fleet-recharge", false],
      [MonitorSmartphone, "Broadband & Landline", "Pay office broadband and landline bills", "/products/broadband-landline", false],
      [ReceiptText, "Vendor Invoice Payments", "Track and pay recurring vendor invoices", "/products/vendor-invoice-payments", false],
      [Landmark, "Rent & Property Payments", "Manage rent across offices and business locations", "/products/rent-property-payments", false],
      [FileCheck, "Tax & Statutory Payments", "Organize business tax and statutory dues", "/products/tax-statutory-payments", false],
    ],
  },
  {
    label: "Gifts & Vouchers",
    description: "Digital rewards for every occasion",
    icon: BadgeCheck,
    heading: "GIFTS & VOUCHERS",
    products: [
      [BadgeCheck, "Gift Cards & Vouchers", "Discover digital gift cards and vouchers", "/products/gift-cards-vouchers", false],
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProductGroup, setActiveProductGroup] = useState(0);
  const [activeIndustryGroup, setActiveIndustryGroup] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [merchantName, setMerchantName] = useState("Merchant Account");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const loggedIn = localStorage.getItem("finunique_logged_in") === "true";
        const name = localStorage.getItem("finunique_merchant_name") || "Merchant Account";
        setIsLoggedIn(loggedIn);
        setMerchantName(name);
      }
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    window.addEventListener("finunique_auth_change", checkAuth);
    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("finunique_auth_change", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("finunique_logged_in");
    localStorage.removeItem("finunique_merchant_name");
    setIsLoggedIn(false);
    setUserDropdownOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("finunique_auth_change"));
    }
  };

  const isHome = pathname === "/";
  const closeDesktopDropdown = () => setActiveDropdown(null);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  if (mounted && (pathname === "/login" || pathname === "/signup")) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8edf6] bg-white/95 backdrop-blur-xl shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-[82px] w-full max-w-[1548px] items-center gap-4 px-5 sm:px-8 lg:px-6 xl:gap-7 xl:px-10">
        <Link href="/" className="mr-auto shrink-0" aria-label="Finunique home">
          <BrandLogo className="h-8 text-lg xl:h-9 xl:text-xl" />
        </Link>

        <nav className="hidden items-center gap-3 text-[12px] font-semibold tracking-[0.02em] text-black lg:flex xl:gap-5 xl:text-[13px] 2xl:gap-7 2xl:text-[14px]">
          {dropdowns.map((item) => {
            const isDropdownOpen = activeDropdown === item.label;
            const panelState = isDropdownOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0";

            return (
            <div
              key={item.label}
              className="relative flex h-[82px] items-center"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={closeDesktopDropdown}
              onFocus={() => setActiveDropdown(item.label)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) closeDesktopDropdown();
              }}
            >
              <button
                className={`relative flex items-center gap-1.5 whitespace-nowrap py-2 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-right after:scale-x-0 after:rounded-full after:bg-ocean after:transition-transform after:duration-300 hover:text-ocean hover:after:origin-left hover:after:scale-x-100 ${isDropdownOpen ? "text-ocean after:origin-left after:scale-x-100" : ""}`}
                type="button"
                onClick={() => setActiveDropdown(isDropdownOpen ? null : item.label)}
              >
                {item.label}<ChevronDown className={`h-4 w-4 transition duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {item.label === "Products" ? (
                <div className={`fixed left-1/2 top-[74px] w-[min(1040px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[20px] border border-[#cfe5ee] bg-white shadow-[0_24px_70px_rgba(7,59,76,0.16)] transition-all duration-200 ${panelState}`}>
                  <div className="grid h-[min(440px,calc(100vh-92px))] grid-cols-[350px_1fr]">
                    <div className="h-full overflow-y-scroll overscroll-contain border-r border-[#d8edf6] bg-cloud p-3 pr-2 [scrollbar-color:#82d6f5_transparent] [scrollbar-gutter:stable] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-ocean/60 [&::-webkit-scrollbar-track]:bg-transparent [&>button]:min-h-[72px] [&>button]:gap-3.5 [&>button>span.grid]:h-11 [&>button>span.grid]:w-11 [&>button>span.grid]:rounded-full [&>button>span.grid]:border [&>button>span.grid]:border-emerald-200 [&>button>span.grid]:shadow-sm [&>button>span.grid>svg]:h-5 [&>button>span.grid>svg]:w-5">
                      {productGroups.map((group, index) => {
                        const GroupIcon = group.icon;
                        return <button key={group.label} type="button" onMouseEnter={() => setActiveProductGroup(index)} onFocus={() => setActiveProductGroup(index)} onClick={() => setActiveProductGroup(index)} className={`relative flex min-h-[58px] w-full items-center gap-3 rounded-xl px-3.5 text-left transition-all duration-200 ${activeProductGroup === index ? "bg-white text-ocean shadow-[0_5px_18px_rgba(7,59,76,0.08)]" : "text-ink hover:bg-white/70"}`}>{activeProductGroup === index && <span className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-ocean" />}<span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${activeProductGroup === index ? "bg-emerald-100 text-ocean" : "bg-white text-ink"}`}><GroupIcon className="h-[18px] w-[18px]" strokeWidth={1.7} /></span><span><span className="block text-[14px] font-bold">{group.label}</span><span className="mt-0.5 block max-w-[245px] text-[11px] font-medium leading-4 text-ink/50">{group.description}</span></span><span className={`ml-auto text-lg transition ${activeProductGroup === index ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"}`}>›</span></button>;
                      })}
                    </div>
                    <div className="h-full overflow-y-auto overscroll-contain bg-white px-8 py-7 [scrollbar-color:#82d6f5_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-ocean/60">
                      <p className="text-[11px] font-extrabold tracking-[0.18em] text-ocean">{productGroups[activeProductGroup].heading}</p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {productGroups[activeProductGroup].products.map(([Icon, title, description, href, showApi]) => <div key={title} className="group/product flex min-h-[100px] gap-3.5 rounded-xl border border-[#d8edf6] bg-white p-4 transition-[border-color,box-shadow,background-color] duration-200 hover:border-ocean/30 hover:bg-[#fbfdff] hover:shadow-[0_6px_18px_rgba(7,59,76,0.07)]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-100 text-ocean transition-colors duration-200 group-hover/product:bg-emerald-200"><Icon className="h-[18px] w-[18px]" strokeWidth={1.8} /></span><span><Link href={href} className="block text-[15px] font-bold leading-5 text-ink transition-colors group-hover/product:text-ocean">{title}</Link><span className="mt-1.5 block text-xs font-medium leading-[18px] text-ink/60">{description}</span>{showApi && <Link href="/developers" className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-ocean">API Docs <span>›</span></Link>}</span></div>)}
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.label === "Industries" ? (
                <div className={`fixed left-1/2 top-[74px] w-[min(1040px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[20px] border border-[#cfe5ee] bg-white shadow-[0_24px_70px_rgba(7,59,76,0.16)] transition-all duration-200 ${panelState}`}>
                  <div className="grid h-[min(440px,calc(100vh-92px))] grid-cols-[350px_1fr]">
                    <div className="h-full overflow-y-scroll overscroll-contain border-r border-[#d8edf6] bg-cloud p-3 pr-2 [scrollbar-color:#82d6f5_transparent] [scrollbar-gutter:stable] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-ocean/60 [&::-webkit-scrollbar-track]:bg-transparent [&>button]:min-h-[72px] [&>button]:gap-3.5 [&>button>span.grid]:h-11 [&>button>span.grid]:w-11 [&>button>span.grid]:rounded-full [&>button>span.grid]:border [&>button>span.grid]:border-emerald-200 [&>button>span.grid]:shadow-sm [&>button>span.grid>svg]:h-5 [&>button>span.grid>svg]:w-5">
                      {industryGroups.map((group, index) => { const GroupIcon = group.icon; return <button key={group.label} type="button" onMouseEnter={() => setActiveIndustryGroup(index)} onFocus={() => setActiveIndustryGroup(index)} onClick={() => setActiveIndustryGroup(index)} className={`relative flex min-h-[65px] w-full items-center gap-3 rounded-xl px-3.5 text-left transition-all ${activeIndustryGroup === index ? "bg-white text-ocean shadow-[0_5px_18px_rgba(7,59,76,0.08)]" : "text-ink hover:bg-white/70"}`}>{activeIndustryGroup === index && <span className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-ocean" />}<span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${activeIndustryGroup === index ? "bg-emerald-100 text-ocean" : "bg-white text-ink"}`}><GroupIcon className="h-[18px] w-[18px]" strokeWidth={1.7} /></span><span><span className="block text-[14px] font-bold">{group.label}</span><span className="mt-0.5 block max-w-[245px] text-[11px] font-medium leading-4 text-ink/50">{group.description}</span></span><span className={`ml-auto text-lg transition ${activeIndustryGroup === index ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"}`}>›</span></button> })}
                    </div>
                    <div className="h-full overflow-y-auto overscroll-contain px-8 py-7 [scrollbar-color:#82d6f5_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-ocean/60">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ocean">{industryGroups[activeIndustryGroup].label}</p>
                      <div className="mt-4 grid grid-cols-2 gap-3">{industryGroups[activeIndustryGroup].links.map(([title, href]) => <Link key={title} href={href} className="group/industry flex min-h-[92px] items-start justify-between rounded-xl border border-[#d8edf6] bg-white px-4 py-3.5 text-ink transition-[border-color,box-shadow,background-color] duration-200 hover:border-ocean/30 hover:bg-[#fbfdff] hover:shadow-[0_6px_18px_rgba(7,59,76,0.07)]"><span><span className="block text-[14px] font-bold transition-colors group-hover/industry:text-ocean">{title}</span><span className="mt-1 block text-xs font-medium leading-[18px] text-ink/60">Explore {title.toLowerCase()} solutions from Finunique</span></span><span className="mt-1 text-lg text-ocean opacity-0 transition group-hover/industry:translate-x-0.5 group-hover/industry:opacity-100">›</span></Link>)}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`absolute left-1/2 top-[74px] w-[340px] -translate-x-1/2 rounded-[18px] border border-[#cfe5ee] bg-white p-2.5 shadow-[0_20px_55px_rgba(7,59,76,0.15)] transition-all duration-200 ${panelState}`}>
                  <p className="px-3 pb-2 pt-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-ocean">Explore {item.label}</p>
                  {item.links.map(([label, href, description]) => <Link key={label} href={href} className="group/link flex items-start justify-between gap-4 rounded-xl px-3 py-3 transition hover:bg-cloud"><span><span className="block text-[14px] font-bold text-ink transition group-hover/link:text-ocean">{label}</span>{description && <span className="mt-1 block text-xs font-medium leading-[18px] text-ink/60">{description}</span>}</span><span className="mt-1 text-lg leading-none text-ocean opacity-0 transition group-hover/link:translate-x-0.5 group-hover/link:opacity-100">›</span></Link>)}
                </div>
              )}
            </div>
          )})}
          {directLinks.map(([label, href]) => <Link key={label} href={href} className="relative whitespace-nowrap py-2 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-right after:scale-x-0 after:rounded-full after:bg-ocean after:transition-transform after:duration-300 hover:text-ocean hover:after:origin-left hover:after:scale-x-100">{label}</Link>)}
        </nav>

        {/* Right Nav Controls: Dynamic Based on Login Status */}
        <div className="hidden items-center gap-3 text-[12px] font-semibold tracking-[0.035em] text-black sm:flex xl:text-[13px] 2xl:text-[14px]">
          {isLoggedIn ? (
            /* Single Clean Profile Avatar Dropdown */
            <div className="relative">
              <button
                type="button"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 rounded-2xl border border-ink/15 bg-white p-1.5 pr-3.5 hover:bg-slate-50 transition shadow-xs"
              >
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-ocean text-xs font-black text-white shadow-xs">
                  {merchantName ? merchantName.charAt(0).toUpperCase() : "M"}
                </div>
                <div className="text-left">
                  <span className="block text-xs font-extrabold text-ink leading-tight truncate max-w-[130px]">
                    {merchantName}
                  </span>
                  <span className="text-[10px] text-amber-600 font-bold leading-tight flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                    KYC Pending
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 text-ink/50 transition-transform duration-200" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 top-12 w-56 rounded-2xl border border-ink/10 bg-white p-2.5 shadow-2xl z-50 space-y-1.5">
                  {/* Account Header */}
                  <div className="px-3 py-2 border-b border-ink/10">
                    <p className="text-xs font-extrabold text-ink truncate">{merchantName}</p>
                    <p className="text-[10px] text-ink/50 font-medium">MID-88420914 · Verified Merchant</p>
                  </div>

                  {/* KYC Pending Banner */}
                  <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-2.5 text-xs text-amber-900 font-bold space-y-1.5">
                    <div className="flex items-center gap-1.5 text-amber-800">
                      <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>KYC Verification Pending</span>
                    </div>
                    <Link
                      href="/kyc"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center justify-center gap-1 rounded-lg bg-amber-500 py-1.5 text-[11px] font-black text-white shadow-xs hover:bg-amber-600 transition"
                    >
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Complete KYC Now</span>
                    </Link>
                  </div>

                  {/* Links */}
                  <Link
                    href="/dashboard"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-ink hover:bg-slate-50 transition"
                  >
                    <Building2 className="h-4 w-4 text-ink/60" />
                    <span>Merchant Dashboard</span>
                  </Link>

                  <div className="border-t border-ink/10 my-1" />

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 transition"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="inline-flex items-center gap-3 whitespace-nowrap transition hover:text-ocean">
                <LogIn className="h-[18px] w-[18px]" strokeWidth={1.7} />Login
              </Link>
              <Link href="/signup" className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-black px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-ocean hover:bg-ocean hover:text-white xl:gap-2.5 xl:px-4 2xl:px-5">
                <UserRound className="h-[18px] w-[18px]" strokeWidth={1.7} />Sign up
              </Link>
            </>
          )}
        </div>

        <button className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>

      {open && (
        <nav className="max-h-[calc(100vh-82px)] overflow-y-auto border-t border-ink/10 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {dropdowns.map((item) => <details key={item.label} className="group rounded-xl"><summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 font-bold hover:bg-cloud">{item.label}<ChevronDown className="h-4 w-4 transition group-open:rotate-180" /></summary>{item.label === "Products" ? <div className="grid gap-2 pb-3 pl-4 pr-2">{productGroups.map((group) => <details key={group.label} className="rounded-xl bg-cloud"><summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold text-ink">{group.label}<ChevronDown className="h-4 w-4" /></summary><div className="grid gap-1 px-2 pb-2">{group.products.map(([, title, description, href]) => <Link key={title} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-xs font-medium text-ink/60 hover:bg-white hover:text-ocean"><span className="block font-semibold text-ink">{title}</span><span className="mt-1 block leading-4 text-ink/50">{description}</span></Link>)}</div></details>)}</div> : <div className="grid gap-1 pb-2 pl-4">{item.links.map(([label, href, description]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-2.5 text-sm text-ink/65 hover:bg-cloud hover:text-ocean"><span className="block font-semibold">{label}</span>{description && <span className="mt-1 block text-xs leading-5 text-ink/50">{description}</span>}</Link>)}</div>}</details>)}
            {directLinks.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-bold hover:bg-cloud">{label}</Link>)}
            <div className="mt-3 border-t border-ink/10 pt-5 sm:hidden">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <Link href="/kyc" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-extrabold text-white">
                    <ShieldCheck className="h-4 w-4" />Complete KYC
                  </Link>
                  <button type="button" onClick={() => { handleLogout(); setOpen(false); }} className="w-full flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-bold text-red-600">
                    <LogOut className="h-4 w-4" />Sign Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/login" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-black"><LogIn className="h-4 w-4" />Login</Link>
                  <Link href="/signup" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl border-2 border-black px-4 py-3 text-sm font-bold text-black"><UserRound className="h-4 w-4" />Sign up</Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
