export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      type="button"
      className={`theme-toggle ${darkMode ? "dark" : ""}`}
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      <span className="theme-toggle-icon sun">☀</span>
      <span className="theme-toggle-icon moon">🌙</span>

      <span className="theme-toggle-thumb" />
    </button>
  );
}
