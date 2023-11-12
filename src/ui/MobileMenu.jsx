function MobileMenu() {
  return (
    <nav className="bg-[var(--secondary-1)] w-[85vw] text-white rounded-[0.625rem]">
      <ul className="flex flex-col justify-center items-center gap-6 py-10 font-bold">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Login</li>
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default MobileMenu;
