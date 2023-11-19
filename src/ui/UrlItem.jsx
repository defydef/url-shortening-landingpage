import Button from "./Button";

function UrlItem({ longUrl, shortUrl }) {
  return (
    <div className="w-[327px] sm:w-[80vw] rounded-[0.625rem] bg-white sm:px-6 p-3 flex gap-3 items-center justify-between text-[1.25rem]">
      <div>{longUrl}</div>
      <div className="flex items-center gap-5 px-1 sm:py-2">
        <p className="text-[var(--accent)]">{shortUrl}</p>
        <Button
          round="rounded-[0.3125rem]"
          additionalClass="sm:px-3 py-2 sm:px-6 w-max text-[0.9375rem]"
        >
          Copy
        </Button>
      </div>
    </div>
  );
}

export default UrlItem;
