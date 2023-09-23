export default function ActivityMarquee({ date }) {
  return (
    <div className="mt-8 px-4 bg-white rounded-3xl">
      <div className="py-2.5 text-center text-dim overflow-hidden">
        <p className="animate-marquee-fast xs:animate-marquee-normal lg:animate-marquee-slow whitespace-nowrap text-sm">
          {date}, our all outlets are{" "}
          {date.toLowerCase().includes("sunday") ? "closed" : "open"}.
          Additionally, our online activities are open and operational.
        </p>
      </div>
    </div>
  );
}
