function Button({
  children,
  round = "rounded-[1.75rem]",
  additionalClass = "w-[17.4375rem]",
  onClick,
  bgColor = "bg-[var(--accent)]",
}) {
  return (
    <button
      className={`${bgColor} ${additionalClass} p-4 ${round} text-white font-bold z-10 hover:bg-[var(--disabled)]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
