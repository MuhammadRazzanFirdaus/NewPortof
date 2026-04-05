import ThemeToggle from './ThemeToggle';

export default function Navbar({ toggleTheme, drawerOpen, toggleDrawer }) {
  const closeDrawer = () => { if (drawerOpen) toggleDrawer(); };

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            Razzan<span>.dev</span>
          </a>

          <ul className="nav-links" id="navLinks">
            <li><a href="#hero">Beranda</a></li>
            <li><a href="#tabs-section">Tentang</a></li>
            <li><a href="#contact">Kontak</a></li>
            <li>
              <ThemeToggle onToggle={toggleTheme} id="themeToggleDesktop" />
            </li>
          </ul>

          <div className="nav-right">
            <ThemeToggle onToggle={toggleTheme} id="themeToggleMobile" />
            <button
              className={`hamburger${drawerOpen ? ' open' : ''}`}
              id="hamburger"
              aria-label="Menu"
              aria-expanded={drawerOpen}
              onClick={toggleDrawer}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-drawer${drawerOpen ? ' open' : ''}`}
        id="mobileDrawer"
        aria-hidden={!drawerOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        <a href="#hero" onClick={closeDrawer}>Beranda</a>
        <a href="#tabs-section" onClick={closeDrawer}>Tentang</a>
        <a href="#contact" onClick={closeDrawer}>Kontak</a>
      </div>
    </>
  );
}
