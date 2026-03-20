export default function MobileMenu({ open, items, onClose }) {
  return (
    <div className={`mobile-menu-overlay ${open ? "open" : ""}`}>
      <div className="mobile-menu-panel">
        <button
          type="button"
          className="close-menu-button"
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="mobile-menu-links">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={onClose}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
