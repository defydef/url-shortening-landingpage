import FooterContentItem from "./FooterContentItem";

function FooterContent({ title, items }) {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="font-bold">{title}</h2>
      <ul className="flex flex-col justify-center items-center gap-3">
        {items.map((i, id) => (
          <FooterContentItem key={id} item={i} />
        ))}
      </ul>
    </div>
  );
}

export default FooterContent;
