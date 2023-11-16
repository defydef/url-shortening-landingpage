import SeparatorLine from "./SeparatorLine";

function StatsItem({
  label,
  children,
  icon,
  showLine = true,
  marginTop = "mt-0",
}) {
  return (
    <div
      className={`grid grid-rows-[1fr_1fr_6fr] sm:grid-rows-[1fr_1fr_5fr] grid-cols-[1fr_2.75rem_2.75rem_1fr] sm:grid-cols-3 ${marginTop} sm:h-max`}
    >
      <div className="w-[5.5rem] h-[5.5rem] bg-[var(--secondary-1)] rounded-full row-start-1 row-span-2 col-start-2 sm:col-start-1 col-span-2 sm:col-span-1 z-10 flex justify-center items-center sm:ml-8">
        {icon}
      </div>
      {showLine && <SeparatorLine />}
      <div className="min-w-[20.4375rem] sm:max-w-[20vw] rounded-[0.3125rem] bg-white row-start-2 col-start-1 col-span-full row-span-2 pt-2 sm:pb-10 px-5 sm:px-10 flex flex-col justify-center items-center sm:items-start gap-5">
        <h1 className="text-[var(--primary)] text-[1.375rem] font-bold sm:mt-16 sm:text-left">
          {label}
        </h1>
        <p className="text-[var(--grey)] text-center sm:text-left leading-[1.625rem]">
          {children}
        </p>
      </div>
    </div>
  );
}

export default StatsItem;
