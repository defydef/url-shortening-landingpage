import StatsItem from "./StatsItem";
import IconBrandRecognition from "../svg/IconBrandRecognition";
import IconDetailedRecords from "../svg/IconDetailedRecords";
import IconFullyCustomizable from "../svg/IconFullyCustomizable";

function Stats() {
  return (
    <section className="flex flex-col justify-center gap-5 items-center bg-[var(--light-grey)] z-0 row-start-2 row-span-2 col-start-1 px-10 sm:px-40 pt-44 pb-32">
      <h1 className="text-[1.75rem] text-[#34313D] font-bold leading-[3rem] text-center">
        Advanced Statistics
      </h1>
      <p className="leading-7 tracking-[0.00681rem] font-medium text-[var(--grey)] text-center text-base sm:w-[32vw]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="flex flex-col sm:flex-row justify-start sm:justify-center sm:items-center gap-0 sm:gap-2 pt-10">
        <StatsItem label="Brand Recognition" icon={<IconBrandRecognition />}>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </StatsItem>
        <StatsItem
          label="Detailed Records"
          icon={<IconDetailedRecords />}
          marginTop="sm:mt-20"
        >
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </StatsItem>
        <StatsItem
          label="Fully Customizable"
          icon={<IconFullyCustomizable />}
          showLine={false}
          marginTop="sm:mt-40"
        >
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </StatsItem>
      </div>
    </section>
  );
}

export default Stats;
