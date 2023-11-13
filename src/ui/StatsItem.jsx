function StatsItem() {
  return (
    <div className="grid grid-rows-[1fr_1fr_4fr] grid-cols-[1fr_5.5rem_1fr]">
      <div className="w-[5.5rem] h-[5.5rem] bg-[var(--secondary-1)] rounded-full row-start-1 row-span-2 col-start-2 z-10 flex justify-center items-center"></div>
      <div className="min-w-[20.4375rem] rounded-[0.3125rem] bg-white row-start-2 col-start-1 col-span-3 row-span-2 py-20 px-5 flex flex-col justify-center items-center">
        <h1 className="text-[var(--primary)] text-[1.375rem] font-bold">
          Brand Recognition
        </h1>
      </div>
    </div>
  );
}

export default StatsItem;
