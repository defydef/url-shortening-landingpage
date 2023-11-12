function Button({ children }) {
  return (
    <button className="bg-[var(--accent)] w-[17.4375rem] p-4 rounded-[1.75rem] text-white font-bold">
      {children}
    </button>
  );
}

export default Button;
