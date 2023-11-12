function Button({ children, round = "rounded-[1.75rem]" }) {
  return (
    <button
      className={`bg-[var(--accent)] w-[17.4375rem] p-4 ${round} text-white font-bold`}
    >
      {children}
    </button>
  );
}

export default Button;
