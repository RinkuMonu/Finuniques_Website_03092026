"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileCheck,
  FileText,
  Globe,
  HelpCircle,
  Home,
  Landmark,
  LayoutDashboard,
  Lock,
  MapPin,
  RotateCcw,
  Save,
  Send,
  ShieldCheck,
  Upload,
  User,
} from "lucide-react";

const kycTabs = [
  { id: "business", label: "Business", Icon: Building2 },
  { id: "personal", label: "Personal", Icon: User },
  { id: "bank", label: "Bank", Icon: Landmark },
  { id: "documents", label: "Documents", Icon: FileText },
  { id: "declarations", label: "Declarations", Icon: FileCheck },
  { id: "review", label: "Review & Submit", Icon: Send },
  { id: "agreement", label: "Agreement", Icon: Lock, locked: true },
];

const businessTypeOptions = [
  "Individual",
  "Proprietorship",
  "Partnership",
  "LLP",
  "Private Limited",
  "Public Limited",
  "Trust",
  "Hindu Undivided Family (HUF)",
  "Association of Persons (AOP)",
  "Society",
  "Local Authority",
  "Artificial Juridical Person",
  "Government",
];

const businessModelOptions = [
  "B2C (Business to Consumer)",
  "B2B (Business to Business)",
  "Both B2C & B2B",
];

const industryCategoryOptions = [
  "E-Commerce & Retail",
  "SaaS & Software Technology",
  "Financial Services & Fintech",
  "Education & EdTech",
  "Travel & Hospitality",
  "Gaming & Media",
  "Healthcare & Wellness",
  "Logistics & Mobility",
  "Professional Services",
  "Other",
];

const commercialActivityOptions = [
  "Domestic Sales Only",
  "Cross-border / Export Sales",
  "High Volume Digital Collections",
  "Aggregator / Marketplace Platform",
  "Direct Service Provider",
];

const monthlyVolumeOptions = [
  "Below 1 lakh",
  "1 - 50 lakh",
  "50 - 100 lakh",
  "100 - 1000 lakh",
  "1000 - 3000 lakh",
  "3000 lakh & above",
];

const exporterTypeOptions = [
  "Not applicable",
  "Services Exporter",
  "Goods Exporter",
  "Merchant Exporter",
];

const stateOptions = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Delhi", "Chandigarh", "Jammu and Kashmir", "Ladakh"
];

const genderOptions = ["Male", "Female", "Other"];

function CustomSelect({ label, value, onChange, options, placeholder, required }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-[11px] font-extrabold text-ink">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`mt-1 flex w-full items-center justify-between rounded-lg border px-3 py-1.5 text-xs font-semibold text-ink transition text-left ${
          open
            ? "border-ocean ring-2 ring-ocean/15 bg-cyan-50/20"
            : "border-ink/15 bg-white shadow-2xs hover:border-ocean/60"
        }`}
      >
        <span className={value ? "text-ink font-bold" : "text-ink/40"}>
          {value || placeholder || "Select"}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 text-ink/50 transition-transform duration-200 ${open ? "rotate-180 text-ocean" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 max-h-56 overflow-y-auto rounded-xl border border-ocean/20 bg-white p-1 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 [scrollbar-width:thin]">
          {options.map((opt) => {
            const isSelected = value === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold transition text-left ${
                  isSelected
                    ? "bg-cyan-50 text-ocean font-extrabold shadow-2xs border border-cyan-200/80"
                    : "text-ink hover:bg-cyan-50/50 hover:text-ocean"
                }`}
              >
                <span>{opt}</span>
                {isSelected && <Check className="h-3.5 w-3.5 text-ocean shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function KycVerificationPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("business");
  const [submitted, setSubmitted] = useState(false);

  // Complete Business Form State (Matching User Specification)
  const [businessData, setBusinessData] = useState({
    pan: "",
    panDate: "",
    businessType: "",
    legalName: "",
    businessCategory: "",
    websiteUrl: "",
    appUrl: "",
    gstin: "",
    udyam: "",
    // Additional business details
    businessModel: "",
    industryCategory: "",
    businessSubcategory: "",
    commercialActivityType: "",
    monthlyVolume: "",
    exporterType: "Not applicable",
    // Address details
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Personal Form State (Matching User Specification)
  const [personalData, setPersonalData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    occupation: "",
    personalPan: "",
    aadhaar: "",
  });

  // Bank Form State (Matching User Specification)
  const [bankData, setBankData] = useState({
    accountHolderName: "",
    bankName: "",
    ifsc: "",
    accountNumber: "",
    branchName: "",
  });

  // Uploaded Files State
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Declaration Form State (Matching User Specification)
  const [declarationData, setDeclarationData] = useState({
    businessDescription: "",
    nonGstPdf: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleFileUpload = (docKey, file) => {
    if (file) {
      setUploadedFiles((prev) => ({
        ...prev,
        [docKey]: file.name,
      }));
    }
  };

  const handleRemoveFile = (docKey) => {
    setUploadedFiles((prev) => {
      const copy = { ...prev };
      delete copy[docKey];
      return copy;
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-6 sm:py-8">
      {/* Top Header Shell (Full Screen Width) */}
      <div className="page-shell">
        <div className="flex flex-col justify-between gap-3 border-b border-ink/10 pb-4 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-ocean/10 px-2.5 py-0.5 text-[10px] font-extrabold text-ocean border border-ocean/20">
                Merchant Verification
              </span>
              <span className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-700">
                <ShieldCheck className="h-3 w-3 text-emerald-600" /> 256-Bit Encrypted
              </span>
            </div>
            <h1 className="mt-1.5 text-xl font-black tracking-tight text-ink sm:text-2xl">
              KYC Verification
            </h1>
            <p className="mt-0.5 text-xs text-ink/55">
              Complete the steps below to verify your business. You can save and continue later.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-ink/15 bg-white px-3.5 py-2 text-xs font-extrabold text-ink transition hover:border-ocean hover:text-ocean hover:shadow-xs hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-ink/60" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-xl bg-ocean/10 border border-ocean/20 px-3.5 py-2 text-xs font-extrabold text-ocean transition hover:bg-ocean hover:text-white shadow-xs hover:-translate-y-0.5"
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>

        {/* Compact Horizontal Step Tabs Bar */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1.5 [scrollbar-width:none]">
          {kycTabs.map((tab) => {
            const Icon = tab.Icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                disabled={tab.locked}
                onClick={() => !tab.locked && setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 shrink-0 rounded-xl px-3 py-1.5 text-[11px] font-extrabold transition-all duration-200 ${
                  tab.locked
                    ? "bg-slate-100/70 text-ink/35 border border-ink/5 cursor-not-allowed"
                    : isActive
                    ? "bg-ocean text-white shadow-xs"
                    : "bg-white text-ink/60 border border-ink/10 hover:border-ocean/40 hover:text-ocean hover:bg-cyan-50/40"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
                {tab.locked && (
                  <span className="rounded-full bg-slate-200/80 px-1.5 py-0.2 text-[8px] font-black uppercase text-ink/40">
                    LOCKED
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Compact Main Form Content Area */}
        <div className="mt-4 rounded-2xl border border-ink/10 bg-white p-5 sm:p-7 shadow-[0_10px_30px_rgba(7,59,76,0.04)]">
          {submitted ? (
            /* Submitted Success Screen */
            <div className="py-8 text-center max-w-md mx-auto">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-3 text-xl font-black text-ink">
                KYC Submitted Successfully!
              </h2>
              <p className="mt-1 text-xs leading-4 text-ink/60">
                Your business documents have been received. Our compliance team is verifying your details within 2 to 4 business hours.
              </p>
              <Link
                href="/dashboard"
                className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-ocean px-5 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-ink"
              >
                Go to Dashboard <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : (
            <>
              {/* Tab 1: Business (Compact Fields) */}
              {activeTab === "business" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-base font-black text-ink">Business</h2>
                    <p className="text-[11px] text-ink/55">Business and registration details</p>
                  </div>

                  {/* Primary Registration Grid */}
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    {/* Business PAN */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Business PAN <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="ABCDE1234F"
                        value={businessData.pan}
                        onChange={(e) =>
                          setBusinessData({ ...businessData, pan: e.target.value.toUpperCase() })
                        }
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    {/* Date on PAN card */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Date on PAN card <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={businessData.panDate}
                        onChange={(e) =>
                          setBusinessData({ ...businessData, panDate: e.target.value })
                        }
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                      <p className="mt-0.5 text-[10px] text-ink/45">
                        Issue date printed on your business PAN card.
                      </p>
                    </div>

                    {/* Business type */}
                    <CustomSelect
                      label="Business type"
                      required
                      placeholder="Select"
                      value={businessData.businessType}
                      options={businessTypeOptions}
                      onChange={(val) => setBusinessData({ ...businessData, businessType: val })}
                    />

                    {/* Legal / Registered name */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Legal / Registered name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="As per registration"
                        value={businessData.legalName}
                        onChange={(e) =>
                          setBusinessData({ ...businessData, legalName: e.target.value })
                        }
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    {/* Business category */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Business category
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Retail, Services"
                        value={businessData.businessCategory}
                        onChange={(e) =>
                          setBusinessData({ ...businessData, businessCategory: e.target.value })
                        }
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    {/* GST number */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        GST number
                      </label>
                      <input
                        type="text"
                        placeholder="22AAAAA0000A1Z5"
                        value={businessData.gstin}
                        onChange={(e) =>
                          setBusinessData({ ...businessData, gstin: e.target.value.toUpperCase() })
                        }
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    {/* Website URL */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Website URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://"
                        value={businessData.websiteUrl}
                        onChange={(e) =>
                          setBusinessData({ ...businessData, websiteUrl: e.target.value })
                        }
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    {/* App URL */}
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        App URL <span className="text-ink/40">(optional)</span>
                      </label>
                      <input
                        type="url"
                        placeholder="https://"
                        value={businessData.appUrl}
                        onChange={(e) =>
                          setBusinessData({ ...businessData, appUrl: e.target.value })
                        }
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    {/* MSME / UDYAM number */}
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-extrabold text-ink">
                        MSME / UDYAM number
                      </label>
                      <input
                        type="text"
                        placeholder="UDYAM-XX-XX-XXXXXXX"
                        value={businessData.udyam}
                        onChange={(e) =>
                          setBusinessData({ ...businessData, udyam: e.target.value.toUpperCase() })
                        }
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>
                  </div>

                  {/* Subsection: Additional business details */}
                  <div className="border-t border-ink/10 pt-4">
                    <div>
                      <h3 className="text-xs font-extrabold text-ink">
                        Additional business details
                      </h3>
                      <p className="text-[10px] text-ink/50">
                        Required for compliance and verification. Please answer accurately.
                      </p>
                    </div>

                    <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
                      {/* Business model */}
                      <CustomSelect
                        label="Business model"
                        required
                        placeholder="Select model"
                        value={businessData.businessModel}
                        options={businessModelOptions}
                        onChange={(val) => setBusinessData({ ...businessData, businessModel: val })}
                      />

                      {/* Industry category */}
                      <CustomSelect
                        label="Industry category"
                        required
                        placeholder="Select category"
                        value={businessData.industryCategory}
                        options={industryCategoryOptions}
                        onChange={(val) => setBusinessData({ ...businessData, industryCategory: val })}
                      />

                      {/* Business subcategory */}
                      <div>
                        <label className="block text-[11px] font-extrabold text-ink">
                          Business subcategory <span className="text-ink/40">(optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. niche or offering"
                          value={businessData.businessSubcategory}
                          onChange={(e) =>
                            setBusinessData({ ...businessData, businessSubcategory: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                        />
                      </div>

                      {/* Commercial activity type */}
                      <CustomSelect
                        label="Commercial activity type"
                        required
                        placeholder="Select activity type"
                        value={businessData.commercialActivityType}
                        options={commercialActivityOptions}
                        onChange={(val) => setBusinessData({ ...businessData, commercialActivityType: val })}
                      />

                      {/* Expected monthly volume */}
                      <CustomSelect
                        label="Expected monthly transaction volume"
                        required
                        placeholder="Select"
                        value={businessData.monthlyVolume}
                        options={monthlyVolumeOptions}
                        onChange={(val) => setBusinessData({ ...businessData, monthlyVolume: val })}
                      />

                      {/* Exporter type */}
                      <CustomSelect
                        label="Exporter type (optional)"
                        placeholder="Select exporter type"
                        value={businessData.exporterType}
                        options={exporterTypeOptions}
                        onChange={(val) => setBusinessData({ ...businessData, exporterType: val })}
                      />
                    </div>
                  </div>

                  {/* Subsection: Registered Address */}
                  <div className="border-t border-ink/10 pt-4">
                    <div>
                      <h3 className="text-xs font-extrabold text-ink">
                        Business Registered Address
                      </h3>
                      <p className="text-[10px] text-ink/50">
                        Address as listed on business registration / GST certificate.
                      </p>
                    </div>

                    <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-extrabold text-ink">
                          Address line 1 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Street, building"
                          value={businessData.addressLine1}
                          onChange={(e) =>
                            setBusinessData({ ...businessData, addressLine1: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-extrabold text-ink">
                          Address line 2 <span className="text-ink/40">(optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Landmark"
                          value={businessData.addressLine2}
                          onChange={(e) =>
                            setBusinessData({ ...businessData, addressLine2: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold text-ink">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="City"
                          value={businessData.city}
                          onChange={(e) =>
                            setBusinessData({ ...businessData, city: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                        />
                      </div>

                      <CustomSelect
                        label="State"
                        required
                        placeholder="Select state"
                        value={businessData.state}
                        options={stateOptions}
                        onChange={(val) => setBusinessData({ ...businessData, state: val })}
                      />

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-extrabold text-ink">
                          Pincode <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          maxLength={6}
                          placeholder="6 digits"
                          value={businessData.pincode}
                          onChange={(e) =>
                            setBusinessData({ ...businessData, pincode: e.target.value })
                          }
                          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-ink/15 px-3.5 py-1.5 text-xs font-bold text-ink hover:bg-slate-50 transition"
                    >
                      <Save className="h-3.5 w-3.5" /> Save Draft
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("personal")}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-ocean px-5 py-2 text-xs font-extrabold text-white shadow-xs transition hover:bg-ink"
                    >
                      Continue to Personal <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: Personal */}
              {activeTab === "personal" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-base font-black text-ink">Personal</h2>
                    <p className="text-[11px] text-ink/55">Authorized person / owner details</p>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Full name (authorized signatory) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="As per ID"
                        value={personalData.fullName}
                        onChange={(e) => setPersonalData({ ...personalData, fullName: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Date of birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={personalData.dob}
                        onChange={(e) => setPersonalData({ ...personalData, dob: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    <CustomSelect
                      label="Gender"
                      required
                      placeholder="Select"
                      value={personalData.gender}
                      options={genderOptions}
                      onChange={(val) => setPersonalData({ ...personalData, gender: val })}
                    />

                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Occupation <span className="text-ink/40">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Proprietor, Director"
                        value={personalData.occupation}
                        onChange={(e) => setPersonalData({ ...personalData, occupation: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Authorized signatory PAN <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="ABCDE1234F"
                        value={personalData.personalPan}
                        onChange={(e) => setPersonalData({ ...personalData, personalPan: e.target.value.toUpperCase() })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Authorized signatory Aadhaar number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="12-digit Aadhaar"
                        maxLength={12}
                        value={personalData.aadhaar}
                        onChange={(e) => setPersonalData({ ...personalData, aadhaar: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-cyan-200 bg-cyan-50/60 p-3 flex items-center gap-2.5 text-xs text-ocean font-semibold">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span>Upload the authorized signatory&apos;s Aadhaar front and back in the Documents step.</span>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab("business")}
                      className="rounded-lg border border-ink/15 px-3.5 py-1.5 text-xs font-bold text-ink hover:bg-slate-50 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("bank")}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-ocean px-5 py-2 text-xs font-extrabold text-white shadow-xs transition hover:bg-ink"
                    >
                      Continue to Bank <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3: Bank */}
              {activeTab === "bank" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-base font-black text-ink">Bank</h2>
                    <p className="text-[11px] text-ink/55">Settlement bank account</p>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Account holder name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="As per bank account"
                        value={bankData.accountHolderName}
                        onChange={(e) => setBankData({ ...bankData, accountHolderName: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Bank name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. HDFC Bank"
                        value={bankData.bankName}
                        onChange={(e) => setBankData({ ...bankData, bankName: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        IFSC code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. HDFC0001234"
                        value={bankData.ifsc}
                        onChange={(e) => setBankData({ ...bankData, ifsc: e.target.value.toUpperCase() })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold text-ink">
                        Account number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Account number"
                        value={bankData.accountNumber}
                        onChange={(e) => setBankData({ ...bankData, accountNumber: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-extrabold text-ink">
                        Branch name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Andheri West"
                        value={bankData.branchName}
                        onChange={(e) => setBankData({ ...bankData, branchName: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab("personal")}
                      className="rounded-lg border border-ink/15 px-3.5 py-1.5 text-xs font-bold text-ink hover:bg-slate-50 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("documents")}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-ocean px-5 py-2 text-xs font-extrabold text-white shadow-xs transition hover:bg-ink"
                    >
                      Continue to Documents <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 4: Documents */}
              {activeTab === "documents" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-base font-black text-ink">Documents</h2>
                    <p className="text-[11px] text-ink/55">Upload required documents</p>
                    <div className="mt-2 rounded-xl border border-cyan-200 bg-cyan-50/60 p-2.5 text-xs font-semibold text-ocean">
                      Upload clear images or PDFs (max 5MB). JPG, PNG, PDF allowed. You can replace or remove an uploaded file.
                    </div>
                  </div>

                  {/* Subsection 1: Merchant documents */}
                  <div className="border-t border-ink/10 pt-4">
                    <div>
                      <h3 className="text-xs font-extrabold text-ink">Merchant documents</h3>
                      <p className="text-[10px] text-ink/50">
                        Upload a clear photo/PDF of the authorized signatory&apos;s Aadhaar (front and back).
                      </p>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        { key: "aadhaar_front", label: "Signatory Aadhaar (front)" },
                        { key: "aadhaar_back", label: "Signatory Aadhaar (back)" },
                        { key: "pan", label: "PAN" },
                        { key: "selfie", label: "SELFIE" },
                      ].map((item) => {
                        const isUploaded = !!uploadedFiles[item.key];
                        return (
                          <div
                            key={item.key}
                            className={`rounded-xl border p-3 text-center transition ${
                              isUploaded
                                ? "border-emerald-300 bg-emerald-50/40"
                                : "border-dashed border-ink/20 hover:border-ocean hover:bg-cyan-50/20"
                            }`}
                          >
                            <div className="mx-auto grid h-8 w-8 place-items-center rounded-lg bg-cyan-50 text-ocean">
                              {isUploaded ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Upload className="h-4 w-4" />}
                            </div>
                            <h4 className="mt-1.5 text-[11px] font-extrabold text-ink">{item.label}</h4>
                            <p className="mt-0.5 text-[9px] text-ink/50 truncate">
                              {isUploaded ? uploadedFiles[item.key] : "JPG, PNG, PDF (Max 5MB)"}
                            </p>

                            <div className="mt-2.5 flex items-center justify-center gap-1.5">
                              <label className="cursor-pointer rounded-lg bg-ocean px-2.5 py-1 text-[10px] font-extrabold text-white shadow-xs hover:bg-ink transition">
                                <span>{isUploaded ? "Replace" : "Upload"}</span>
                                <input
                                  type="file"
                                  accept=".jpg,.jpeg,.png,.pdf"
                                  className="hidden"
                                  onChange={(e) => handleFileUpload(item.key, e.target.files[0])}
                                />
                              </label>
                              {isUploaded && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFile(item.key)}
                                  className="rounded-lg border border-red-200 bg-white px-2 py-1 text-[10px] font-bold text-red-600 hover:bg-red-50 transition"
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subsection 2: Bank account proof */}
                  <div className="border-t border-ink/10 pt-4">
                    <div>
                      <h3 className="text-xs font-extrabold text-ink">Bank account proof</h3>
                      <p className="text-[10px] text-ink/50">
                        Upload proof for settlement account — cancelled cheque or last 1 month statement.
                      </p>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { key: "bank_proof", label: "Cancelled cheque OR bank statement (last 1 month)" }
                      ].map((item) => {
                        const isUploaded = !!uploadedFiles[item.key];
                        return (
                          <div
                            key={item.key}
                            className={`rounded-xl border p-3 text-center transition ${
                              isUploaded
                                ? "border-emerald-300 bg-emerald-50/40"
                                : "border-dashed border-ink/20 hover:border-ocean hover:bg-cyan-50/20"
                            }`}
                          >
                            <div className="mx-auto grid h-8 w-8 place-items-center rounded-lg bg-cyan-50 text-ocean">
                              {isUploaded ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Upload className="h-4 w-4" />}
                            </div>
                            <h4 className="mt-1.5 text-[11px] font-extrabold text-ink">{item.label}</h4>
                            <p className="mt-0.5 text-[9px] text-ink/50 truncate">
                              {isUploaded ? uploadedFiles[item.key] : "JPG, PNG, PDF (Max 5MB)"}
                            </p>

                            <div className="mt-2.5 flex items-center justify-center gap-1.5">
                              <label className="cursor-pointer rounded-lg bg-ocean px-3 py-1 text-[10px] font-extrabold text-white shadow-xs hover:bg-ink transition">
                                <span>{isUploaded ? "Replace" : "Upload"}</span>
                                <input
                                  type="file"
                                  accept=".jpg,.jpeg,.png,.pdf"
                                  className="hidden"
                                  onChange={(e) => handleFileUpload(item.key, e.target.files[0])}
                                />
                              </label>
                              {isUploaded && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFile(item.key)}
                                  className="rounded-lg border border-red-200 bg-white px-2.5 py-1 text-[10px] font-bold text-red-600 hover:bg-red-50 transition"
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subsection 3: Business address proof */}
                  <div className="border-t border-ink/10 pt-4">
                    <div>
                      <h3 className="text-xs font-extrabold text-ink">Business address proof</h3>
                      <p className="text-[10px] text-ink/50">
                        Upload clear front and back copies of your business address proof.
                      </p>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        { key: "address_front", label: "Address proof (front page)" },
                        { key: "address_back", label: "Address proof (back page)" },
                      ].map((item) => {
                        const isUploaded = !!uploadedFiles[item.key];
                        return (
                          <div
                            key={item.key}
                            className={`rounded-xl border p-3 text-center transition ${
                              isUploaded
                                ? "border-emerald-300 bg-emerald-50/40"
                                : "border-dashed border-ink/20 hover:border-ocean hover:bg-cyan-50/20"
                            }`}
                          >
                            <div className="mx-auto grid h-8 w-8 place-items-center rounded-lg bg-cyan-50 text-ocean">
                              {isUploaded ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Upload className="h-4 w-4" />}
                            </div>
                            <h4 className="mt-1.5 text-[11px] font-extrabold text-ink">{item.label}</h4>
                            <p className="mt-0.5 text-[9px] text-ink/50 truncate">
                              {isUploaded ? uploadedFiles[item.key] : "JPG, PNG, PDF (Max 5MB)"}
                            </p>

                            <div className="mt-2.5 flex items-center justify-center gap-1.5">
                              <label className="cursor-pointer rounded-lg bg-ocean px-3 py-1 text-[10px] font-extrabold text-white shadow-xs hover:bg-ink transition">
                                <span>{isUploaded ? "Replace" : "Upload"}</span>
                                <input
                                  type="file"
                                  accept=".jpg,.jpeg,.png,.pdf"
                                  className="hidden"
                                  onChange={(e) => handleFileUpload(item.key, e.target.files[0])}
                                />
                              </label>
                              {isUploaded && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFile(item.key)}
                                  className="rounded-lg border border-red-200 bg-white px-2.5 py-1 text-[10px] font-bold text-red-600 hover:bg-red-50 transition"
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab("bank")}
                      className="rounded-lg border border-ink/15 px-3.5 py-1.5 text-xs font-bold text-ink hover:bg-slate-50 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("declarations")}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-ocean px-5 py-2 text-xs font-extrabold text-white shadow-xs transition hover:bg-ink"
                    >
                      Continue to Declarations <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 5: Declarations */}
              {activeTab === "declarations" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-base font-black text-ink">Declarations</h2>
                    <p className="text-[11px] text-ink/55">Business description and non-GST declaration</p>
                  </div>

                  {/* Business Description */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-extrabold text-ink">
                      Business Description <span className="text-red-500">*</span>
                    </label>
                    
                    <div className="rounded-xl border border-cyan-200 bg-cyan-50/60 p-2.5 text-xs text-ocean">
                      <strong className="font-extrabold text-ink">Example:</strong> &ldquo;We sell women&apos;s ethnic wear online via our website and social media. Payments are collected for product orders and shipped pan‑India.&rdquo;
                    </div>

                    <textarea
                      rows={3}
                      value={declarationData.businessDescription}
                      onChange={(e) =>
                        setDeclarationData({ ...declarationData, businessDescription: e.target.value })
                      }
                      placeholder="Write a short description of your business, products/services, and how you will use payments…"
                      className="w-full rounded-lg border border-ink/15 bg-white p-3 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/15 transition"
                    />
                  </div>

                  {/* Non-GST declaration */}
                  <div className="border-t border-ink/10 pt-4 space-y-3">
                    <div>
                      <h3 className="text-xs font-extrabold text-ink">
                        Non‑GST declaration <span className="text-red-500">*</span>
                      </h3>
                      <p className="mt-0.5 text-[10px] text-ink/50">
                        Required because no GST number was provided. Complete the steps below before continuing.
                      </p>
                    </div>

                    <div className="rounded-xl border border-ink/10 bg-slate-50 p-4 space-y-2">
                      <p className="text-[11px] font-extrabold text-ink">Steps to complete Non-GST declaration:</p>
                      <ol className="list-decimal list-inside space-y-1 text-[11px] text-ink/70 leading-4">
                        <li>Download the declaration form (PDF).</li>
                        <li>Print the form and fill in your business details accurately.</li>
                        <li>Sign the form and affix your company seal or stamp.</li>
                        <li>Scan or photograph the signed form clearly and upload below.</li>
                      </ol>

                      <div className="pt-1.5">
                        <button
                          type="button"
                          onClick={() => alert("Downloading Non-GST Declaration Form PDF...")}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-ocean px-3.5 py-1.5 text-xs font-extrabold text-white shadow-xs hover:bg-ink transition"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span>Download declaration form</span>
                        </button>
                      </div>
                    </div>

                    <div className="max-w-md">
                      <label className="block text-[11px] font-extrabold text-ink mb-1">
                        Non-GST declaration (signed PDF) <span className="text-red-500">*</span>
                      </label>
                      <div
                        className={`rounded-xl border p-3 text-center transition ${
                          declarationData.nonGstPdf
                            ? "border-emerald-300 bg-emerald-50/40"
                            : "border-dashed border-ink/20 hover:border-ocean hover:bg-cyan-50/20"
                        }`}
                      >
                        <div className="mx-auto grid h-8 w-8 place-items-center rounded-lg bg-cyan-50 text-ocean">
                          {declarationData.nonGstPdf ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          ) : (
                            <Upload className="h-4 w-4" />
                          )}
                        </div>
                        <h4 className="mt-1.5 text-[11px] font-extrabold text-ink">
                          {declarationData.nonGstPdf ? declarationData.nonGstPdf : "Signed Non-GST Declaration PDF"}
                        </h4>
                        <p className="mt-0.5 text-[9px] text-ink/50">PDF format (Max 5MB)</p>

                        <div className="mt-2.5 flex items-center justify-center gap-1.5">
                          <label className="cursor-pointer rounded-lg bg-ocean px-3 py-1 text-[10px] font-extrabold text-white shadow-xs hover:bg-ink transition">
                            <span>{declarationData.nonGstPdf ? "Replace PDF" : "Upload signed PDF"}</span>
                            <input
                              type="file"
                              accept=".pdf"
                              className="hidden"
                              onChange={(e) =>
                                e.target.files[0] &&
                                setDeclarationData({ ...declarationData, nonGstPdf: e.target.files[0].name })
                              }
                            />
                          </label>
                          {declarationData.nonGstPdf && (
                            <button
                              type="button"
                              onClick={() => setDeclarationData({ ...declarationData, nonGstPdf: "" })}
                              className="rounded-lg border border-red-200 bg-white px-2 py-1 text-[10px] font-bold text-red-600 hover:bg-red-50 transition"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab("documents")}
                      className="rounded-lg border border-ink/15 px-3.5 py-1.5 text-xs font-bold text-ink hover:bg-slate-50 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("review")}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-ocean px-5 py-2 text-xs font-extrabold text-white shadow-xs transition hover:bg-ink"
                    >
                      Review & Submit <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 6: Review & Submit */}
              {activeTab === "review" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-base font-black text-ink">Review & Submit</h2>
                    <p className="text-[11px] text-ink/55">Review and submit for verification</p>
                  </div>

                  {/* Warning Notice Banner */}
                  <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs leading-4 text-amber-900 font-semibold flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Ensure all details and documents are correct. After submission, edits will be locked until review is complete. The Agreement step appears after this one; it stays locked until your KYC is approved.
                    </span>
                  </div>

                  {/* 31-Point Verification Checklist */}
                  <div className="rounded-xl border border-ink/10 bg-white p-4 space-y-3">
                    <h3 className="text-xs font-black text-ink">
                      Complete these before submitting:
                    </h3>

                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        "Verify email & phone",
                        "Legal name",
                        "Business type",
                        "Address line 1",
                        "City",
                        "State",
                        "Pincode",
                        "Business PAN",
                        "Business model (B2C / B2B / Both)",
                        "Industry category",
                        "Authorized signatory name",
                        "Valid authorized signatory PAN",
                        "Valid 12-digit authorized signatory Aadhaar number",
                        "Commercial activity type",
                        "Expected monthly transaction volume",
                        "Date of birth",
                        "Gender",
                        "Bank account holder name",
                        "Bank name",
                        "IFSC code",
                        "Bank account number",
                        "Bank branch name",
                        "Date on PAN card",
                        "Document: Signatory Aadhaar (front)",
                        "Document: Signatory Aadhaar (back)",
                        "Document: PAN",
                        "Document: SELFIE",
                        "Document: Bank proof — cancelled / voided cheque OR last 1 month statement",
                        "Document: Address proof (front page)",
                        "Document: Address proof (back page)",
                        "Document: Non-GST declaration (signed PDF)",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-lg bg-slate-50 border border-ink/5 p-2 text-[11px] font-bold text-ink/80"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Notice & Submit Button */}
                  <div className="space-y-2.5 pt-1">
                    <p className="text-[11px] text-ink/50 font-semibold text-center">
                      Submit button will enable when all required fields and documents are filled.
                    </p>

                    <div className="flex items-center justify-between border-t border-ink/10 pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveTab("declarations")}
                        className="rounded-lg border border-ink/15 px-4 py-2 text-xs font-bold text-ink hover:bg-slate-50 transition"
                      >
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={() => setSubmitted(true)}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-extrabold text-white shadow-md transition hover:bg-ink hover:-translate-y-0.5"
                      >
                        <span>Submit KYC for verification</span>
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
