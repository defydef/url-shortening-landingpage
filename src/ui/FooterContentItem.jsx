function FooterContentItem({ item }) {
  return (
    <li className="text-[var(--grey-2)] cursor-pointer hover:text-[var(--accent)]">
      {item}
    </li>
  );
}

export default FooterContentItem;
