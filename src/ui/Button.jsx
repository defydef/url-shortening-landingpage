function Button({
  children,
  round = "rounded-[1.75rem]",
  additionalClass = "w-[17.4375rem]",
}) {
  return (
    <button
      className={`bg-[var(--accent)] ${additionalClass} p-4 ${round} text-white font-bold z-10`}
    >
      {children}
    </button>
  );
}

export default Button;
