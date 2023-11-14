function Button({
  children,
  round = "rounded-[1.75rem]",
  width = "w-[17.4375rem]",
}) {
  return (
    <button
      className={`bg-[var(--accent)] ${width} p-4 ${round} text-white font-bold`}
    >
      {children}
    </button>
  );
}

export default Button;
