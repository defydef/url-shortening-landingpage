import VerticalLine from "./VerticalLine";

function StatsItem({ label, children, icon, showLine = true }) {
  return (
    <div className="grid grid-rows-[1fr_1fr_6fr] grid-cols-[1fr_2.75rem_2.75rem_1fr]">
      <div className="w-[5.5rem] h-[5.5rem] bg-[var(--secondary-1)] rounded-full row-start-1 row-span-2 col-start-2 col-span-2 z-10 flex justify-center items-center">
        {icon}
      </div>
      {showLine && <VerticalLine />}
      <div className="min-w-[20.4375rem] rounded-[0.3125rem] bg-white row-start-2 col-start-1 col-span-full row-span-2 pt-14 px-5 flex flex-col justify-center items-center gap-5">
        <h1 className="text-[var(--primary)] text-[1.375rem] font-bold">
          {label}
        </h1>
        <p className="text-[var(--grey)] text-center leading-[1.625rem]">
          {children}
        </p>
      </div>
    </div>
  );
}

export default StatsItem;
