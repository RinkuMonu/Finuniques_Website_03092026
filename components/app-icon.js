import { BadgeCheck, Banknote, BarChart3, Building2, CalendarDays, Check, CircleDollarSign, Clock, CreditCard, FileCheck, Fingerprint, Globe2, Headphones, History, Landmark, Link2, ReceiptText, Repeat2, Send, ShieldCheck, Smartphone, TrendingUp, Users, WalletCards, Zap } from "lucide-react";

const icons = { BadgeCheck, Banknote, BarChart3, Building2, CalendarDays, Check, CircleDollarSign, Clock, CreditCard, FileCheck, Fingerprint, Globe2, Headphones, History, Landmark, Link2, ReceiptText, Repeat2, Send, ShieldCheck, Smartphone, TrendingUp, Users, WalletCards, Zap };
export function AppIcon({ name, className = "h-5 w-5" }) {
  const Icon = icons[name] || CircleDollarSign;
  return <Icon className={className} aria-hidden="true" />;
}
