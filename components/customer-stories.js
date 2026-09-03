import { Quote } from "lucide-react";

const stories = [
  { image: "/images/industries/ecommerce-v2.png", position: "78% center", name: "Aarav Mehta", role: "Founder, Northstar Commerce", quote: "Collections and payouts are finally visible from one clear platform." },
  { image: "/images/industries/education-v2.png", position: "78% center", name: "Riya Kapoor", role: "Co-founder, Learnlane", quote: "Our payment workflow became simpler for both our team and learners." },
  { image: "/images/industries/lending-v2.png", position: "76% center", name: "Vikram Joshi", role: "Founder, CapitalBridge", quote: "Verification and transaction visibility now work together seamlessly." },
  { image: "/images/industries/travel-v2.png", position: "76% center", name: "Meera Shah", role: "Director, Orbit Travel", quote: "Customers get a smoother booking and payment experience every time." },
  { image: "/images/industries/insurance-v2.png", position: "78% center", name: "Kabir Malhotra", role: "COO, SecureLife", quote: "Premium collections are easier to manage across our growing business." },
  { image: "/images/industries/wealthtech-v2.png", position: "76% center", name: "Ananya Rao", role: "Product Lead, Scalegrid", quote: "Finunique gives our operations team the control needed to scale." },
];

function StoryCard({ story, index }) {
  return (
    <article tabIndex="0" className={`group h-[285px] w-[245px] shrink-0 cursor-pointer outline-none [perspective:1100px] sm:h-[300px] sm:w-[265px] ${index % 2 === 1 ? "mt-12" : "mt-0"}`}>
      <div className="relative h-full w-full rounded-[1.4rem] shadow-[0_14px_40px_rgba(7,59,76,.11)] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-[1.4rem] border border-ocean/10 bg-cloud [backface-visibility:hidden]">
          <img src={story.image} alt="Illustrative Finunique business customer" style={{objectPosition: story.position}} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white"><div><p className="text-sm font-extrabold">{story.name}</p><p className="mt-1 text-[10px] text-white/65">{story.role}</p></div><span className="grid h-8 w-8 place-items-center rounded-full border border-white/25 bg-white/10 text-sm backdrop-blur">↻</span></div>
        </div>
        <div className="absolute inset-0 flex flex-col rounded-[1.4rem] border border-ocean/15 bg-gradient-to-br from-white via-[#f7fcfe] to-cyan-50 p-6 text-ink [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-100 text-ocean"><Quote className="h-5 w-5" /></span>
          <p className="mt-6 text-base font-bold leading-7">“{story.quote}”</p>
          <div className="mt-auto border-t border-ink/10 pt-4"><p className="text-sm font-extrabold">{story.name}</p><p className="mt-1 text-[11px] text-ink/50">{story.role}</p></div>
        </div>
      </div>
    </article>
  );
}

export function CustomerStories() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#eef9fd] via-white to-[#f3f1ff] py-16 sm:py-20">
      <div className="page-shell flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><p className="eyebrow">Growing together</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Finunique grows with <span className="text-ocean">your business.</span></h2><p className="mt-3 text-sm text-ink/45">Hover over an image to flip the story.</p></div>
        <div className="sm:text-right"><p className="text-2xl font-extrabold text-ocean">1,00,000+</p><p className="mt-1 text-xs font-bold uppercase tracking-[.14em] text-ink/40">Businesses</p></div>
      </div>
      <div className="mt-7 min-h-[360px] overflow-hidden">
        <div className="home-product-slider flex w-max items-start gap-4 px-5 sm:px-8">{[...stories, ...stories].map((story, index) => <StoryCard key={`${story.name}-${index}`} story={story} index={index} />)}</div>
      </div>
      <p className="page-shell mt-4 text-[10px] text-ink/35">Profiles and statements shown are illustrative samples.</p>
    </section>
  );
}
