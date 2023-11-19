import StatsItem from "./StatsItem";
import IconBrandRecognition from "../svg/IconBrandRecognition";
import IconDetailedRecords from "../svg/IconDetailedRecords";
import IconFullyCustomizable from "../svg/IconFullyCustomizable";
import UrlItem from "./UrlItem";
import { useLocalStorage } from "../contexts/LocalStorageContext";
import { useEffect, useState } from "react";

function Stats() {
  const { newUrlAdded } = useLocalStorage();
  const [keys, setKeys] = useState(Object.keys(localStorage));

  useEffect(
    function () {
      if (newUrlAdded) setKeys(Object.keys(localStorage));
    },
    [newUrlAdded]
  );

  return (
    <section className="flex flex-col justify-center gap-5 items-center bg-[var(--light-grey)] px-10 sm:px-40 pt-8 pb-32">
      {keys &&
        keys.map((key) => {
          const { shortUrl, longUrl } = JSON.parse(localStorage.getItem(key));
          return shortUrl ? (
            <UrlItem key={key} shortUrl={shortUrl} longUrl={longUrl} />
          ) : null;
        })}
      <h1 className="text-[1.75rem] text-[#34313D] font-bold leading-[3rem] text-center pt-20">
        Advanced Statistics
      </h1>
      <p className="leading-7 tracking-[0.00681rem] font-medium text-[var(--grey)] text-center text-base sm:w-[32vw]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="flex flex-col sm:flex-row justify-start sm:justify-center sm:items-start gap-0 sm:gap-2 pt-10 sm:pt-6">
        <StatsItem label="Brand Recognition" icon={<IconBrandRecognition />}>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </StatsItem>
        <StatsItem
          label="Detailed Records"
          icon={<IconDetailedRecords />}
          marginTop="sm:mt-10"
        >
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </StatsItem>
        <StatsItem
          label="Fully Customizable"
          icon={<IconFullyCustomizable />}
          showLine={false}
          marginTop="sm:mt-20"
        >
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </StatsItem>
      </div>
    </section>
  );
}

export default Stats;
