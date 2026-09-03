export function BrandLogo({ className = "h-10 text-xl", markOnly = false, inverse = false }) {
  const blue = inverse ? "#ffffff" : "#0b92dc";
  const dark = inverse ? "#ffffff" : "#176696";
  const mark = <svg viewBox="0 0 184 214" className="h-full w-auto shrink-0" aria-hidden="true"><path fill={blue} d="M0 67C0 30 30 0 67 0h117c0 37-30 67-67 67H60C34 67 12 78 0 96V67Z"/><path fill={blue} d="M0 128c0-28 23-51 51-51h115c-5 28-29 49-58 49H39c-18 0-33 11-39 27v-25Z"/><circle cx="30" cy="183" r="30" fill={dark}/></svg>;
  if (markOnly) return <span className={`inline-flex ${className}`} role="img" aria-label="Finunique">{mark}</span>;
  return <span className={`inline-flex items-center gap-2.5 ${className}`} role="img" aria-label="Finunique">{mark}<span className="font-semibold leading-none tracking-[-0.04em]" style={{color:blue}}>Finunique</span></span>;
}
