import StatsItem from "./StatsItem";

function Stats() {
  return (
    <section className="flex flex-col justify-center gap-5 items-center bg-[var(--light-grey)] z-0 row-start-2 row-span-2 col-start-1 px-10 pt-44 pb-32">
      <h1 className="text-[1.75rem] text-[#34313D] font-bold leading-[3rem] text-center">
        Advanced Statistics
      </h1>
      <p className="leading-7 tracking-[0.00681rem] font-medium text-[var(--grey)] text-center text-base">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div>
        <StatsItem />
      </div>
    </section>
  );
}

export default Stats;
