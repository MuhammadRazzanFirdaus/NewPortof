export default function GalleryCard({ item, onOpenModal }) {
  const isProject = item.cat === 'project';
  const isCertificate = item.cat === 'certificate';

  const handleActivate = () => {
    if (isProject && item.url && item.url !== '#') {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (isCertificate) {
      onOpenModal(item);
    }
  };

  return (
    <article
      className={`gallery-card${item.wide ? ' wide' : ''}`}
      data-cat={item.cat}
      role="listitem"
      tabIndex={0}
      aria-label={`${isProject ? 'Project' : 'Sertifikat'}: ${item.title}`}
      onClick={handleActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleActivate();
        }
      }}
    >

      <div className="gallery-thumb">
        <div className="gallery-thumb-inner" aria-hidden="true">
          {item.icon.startsWith('http') || item.icon.startsWith('/') ? (
            <img
              src={item.icon}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            item.icon 
          )}
        </div>
        <div className="gallery-overlay" aria-hidden="true">
          <span className="gallery-overlay-btn">{item.overlayText}</span>
        </div>
      </div>

      <div className="gallery-info">
        <div className="gallery-meta">
          <span className={`gallery-cat-badge ${isProject ? 'badge-project' : 'badge-certificate'}`}>
            {isProject ? '▶ Project' : '✦ Sertifikat'}
          </span>
          <time className="gallery-year" dateTime={item.year}>
            {item.year}
          </time>
        </div>

        <h3 className="gallery-title">{item.title}</h3>
        <p className="gallery-desc">{item.desc}</p>

        <ul className="gallery-stack">
          {item.stack.map(tag => (
            <li className="stack-tag" key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
