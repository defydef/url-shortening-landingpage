import FooterContentItem from "./FooterContentItem";

function FooterContent({ title, items }) {
  return (
    <div>
      <h2 className="">{title}</h2>
      <ul>
        {items.map((i, id) => (
          <FooterContentItem key={id} item={i} />
        ))}
      </ul>
    </div>
  );
}

export default FooterContent;
