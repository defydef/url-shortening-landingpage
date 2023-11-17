import FooterContentItem from "./FooterContentItem";

function FooterContent({ title, items }) {
  return (
    <div className="flex flex-col justify-center items-center sm:items-start gap-8 sm:gap-6">
      <h2 className="font-bold">{title}</h2>
      <ul className="flex flex-col justify-center items-center sm:items-start gap-3">
        {items.map((i, id) => (
          <FooterContentItem key={id} item={i} />
        ))}
      </ul>
    </div>
  );
}

export default FooterContent;
