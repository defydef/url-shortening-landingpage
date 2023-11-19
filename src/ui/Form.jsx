import { useState } from "react";
import { useLocalStorage } from "../contexts/LocalStorageContext";
import BgShortenDesktop from "../svg/BgShortenDesktop";
import BgShortenMobile from "../svg/BgShortenMobile";
import Button from "./Button";
import { shortenUrl } from "../services/apiShortenUrl";
import { useLocalStorageState } from "../contexts/useLocalStorageState";

function Form() {
  const uniqueId = Math.random().toString(16).slice(2);
  const [url, setUrl] = useState("");
  const [storedUrl, setStoredUrl] = useLocalStorageState(uniqueId);
  const { dispatch } = useLocalStorage();
  const [formError, setFormError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!url) {
      setFormError(true);
      return;
    }
    const { link: shortUrl, long_url: longUrl } = await shortenUrl(url);
    shortUrl && setStoredUrl({ shortUrl, longUrl });
    setUrl("");
    dispatch({ type: "submit" });
  }

  // const items = { ...localStorage };
  return (
    <section className="flex flex-col justify-start items-center row-start-1 row-span-2 col-start-1 z-10 gap-5">
      <form className="py-6 sm:p-0 bg-[var(--secondary-1)] w-[327px] sm:w-[80vw] rounded-[0.625rem] overflow-hidden flex justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-1 col-span-1">
          <BgShortenMobile />
          <BgShortenDesktop />
          <div className="flex flex-col justify-center items-start row-start-1 col-start-1 z-10 px-6 sm:px-12">
            <div className="w-full flex flex-col sm:flex-row sm:justify-center sm:items-center gap-3 sm:gap-5">
              <input
                id="url"
                type="text"
                className={`p-4 placeholder:opacity-50 text-[var(--primary)] rounded-[0.3125rem] sm:w-[65vw] focus:outline-[var(--accent)] focus:outline-offset-1 ${
                  formError
                    ? "outline outline-2 outline-red-600 focus:outline-red-600 placeholder:text-red-500"
                    : ""
                }`}
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e) => {
                  setFormError(false);
                  setUrl(e.target.value);
                }}
              />
              <Button
                round="rounded-[0.3125rem]"
                additionalClass="sm:px-3 sm:w-[12vw]"
                onClick={handleSubmit}
              >
                Shorten It!
              </Button>
            </div>
            <div
              className={
                formError ? "block -mb-3 mt-1 sm:-mb-5 italic" : "hidden"
              }
            >
              <p className="text-[var(--red)] text-[1rem] italic">
                Please add a link
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
