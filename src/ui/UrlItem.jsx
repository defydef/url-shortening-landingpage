import { useState } from "react";
import Button from "./Button";
import HorizontalLine from "./HorizontalLine";

function UrlItem({ longUrl, shortUrl }) {
  const [buttonText, setButtonText] = useState("Copy");
  function copyToClipboard() {
    if (shortUrl) {
      navigator.clipboard
        .writeText(shortUrl)
        .then(() => {
          setButtonText("Copied!");
        })
        .catch((err) => {
          console.error("Unable to copy text to clipboard", err);
        });
    }
  }

  return (
    <div className="w-[327px] sm:w-[80vw] rounded-[0.625rem] bg-white sm:px-6 py-3 px-4 flex sm:flex-row flex-col gap-3 sm:items-center justify-center sm:justify-between sm:text-[1.25rem]">
      <div className=" overflow-clip">{longUrl}</div>
      <div className="-mx-4">
        <HorizontalLine width="w-full" />
      </div>
      <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3 sm:gap-5 sm:py-2 cursor-pointer justify-between overflow-visible">
        <p className="text-[var(--accent)]">{shortUrl}</p>
        <Button
          round="rounded-[0.3125rem]"
          additionalClass="sm:px-3 py-2 sm:px-6 sm:w-max w-full text-[0.9375rem] cursor-pointer"
          bgColor={
            buttonText === "Copied!"
              ? "bg-[var(--secondary-1)]"
              : "bg-[var(--accent)]"
          }
          onClick={copyToClipboard}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default UrlItem;
