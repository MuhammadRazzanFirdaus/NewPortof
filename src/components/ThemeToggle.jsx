export default function ThemeToggle({ onToggle, id }) {
  return (
    <button
      className="theme-toggle"
      id={id}
      aria-label="Toggle tema"
      onClick={onToggle}
    >
      <div className="toggle-track">
        <span className="t-moon" aria-hidden="true">🌙</span>
        <span className="t-sun" aria-hidden="true">☀️</span>
        <div className="toggle-knob" />
      </div>
    </button>
  );
}
