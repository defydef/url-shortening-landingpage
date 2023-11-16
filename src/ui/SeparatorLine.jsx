function SeparatorLine() {
  return (
    <>
      {/* mobile: */}
      <div className="bg-[var(--accent)] w-2 h-12 col-start-3 sm:hidden"></div>
      {/* desktop */}
      <div className="row-start-3 col-start-3 hidden sm:flex flex-col justify-center items-end  w-32 -mr-4">
        <div className="bg-[var(--accent)] w-24 h-2"></div>
      </div>
    </>
  );
}

export default SeparatorLine;
