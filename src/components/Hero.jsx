export default function Hero() {
  return (
    <header id="hero">
      <div className="wrapper">
        <div className="hero-inner">
          <p className="hero-badge">✦ Open to opportunities</p>

          <h1 className="hero-name">
            Muhammad<br />
            <span className="acc">Razzan Firdaus</span>
          </h1>

          <p className="hero-title">Backend Developer &amp; Junior Project Manager</p>

          <p className="hero-desc">
            Seorang pelajar SMK yang bersemangat di bidang teknologi dan project managemen.
            Saya suka membangun pengalaman web yang fungsional, dan terstruktur.
          </p>

          <div className="hero-contacts">
            <a href="#contact" className="btn-c primary">
              ✉ Email Saya
            </a>
            <a
              href="https://wa.me/62895321384487"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-c secondary"
            >
              ● WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
