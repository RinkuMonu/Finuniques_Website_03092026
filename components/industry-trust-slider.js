import { BadgeCheck, BarChart3, Building2, GraduationCap, HeartPulse, Landmark, Plane, ShieldCheck, Store, Users } from "lucide-react";

const marks = [
  [Plane, "text-sky-600"], [Landmark, "text-indigo-700"],
  [GraduationCap, "text-violet-600"], [HeartPulse, "text-teal-600"],
  [Store, "text-amber-600"], [BadgeCheck, "text-rose-500"],
  [ShieldCheck, "text-blue-700"], [Building2, "text-cyan-600"],
  [BarChart3, "text-emerald-600"], [Users, "text-orange-500"],
];

const columns = Array.from({ length: 5 }, (_, index) => [marks[index * 2], marks[index * 2 + 1]]);

export function IndustryTrustSlider() {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <div className="flex w-max animate-trust-slider gap-6">
      {[...columns,...columns].map((column,index) => (
        <div key={index} className="grid w-40 shrink-0 grid-rows-2 gap-7 sm:w-44">
          {column.map(([Icon,color],markIndex) => (
            <div key={markIndex} className="flex min-h-[92px] items-center justify-center">
              <span className={`grid h-16 w-16 place-items-center rounded-full bg-slate-50 shadow-[0_5px_18px_rgba(7,59,76,.06)] ${color}`}><Icon className="h-8 w-8" strokeWidth={1.7}/></span>
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}
