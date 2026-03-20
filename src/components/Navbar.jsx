export default function Navbar({ items, onOpenMenu }) {
  return (
    <>
      <header className="desktop-nav-wrap">
        <nav className="desktop-nav">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <button
        type="button"
        className="mobile-menu-button"
        onClick={onOpenMenu}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>
    </>
  );
}
