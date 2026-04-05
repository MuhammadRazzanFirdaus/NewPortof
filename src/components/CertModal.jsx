import { useEffect } from 'react';

export default function CertModal({ item, onClose }) {
  const isOpen = !!item;

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      className={`cert-modal-backdrop${isOpen ? ' open' : ''}`}
      id="certModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certModalTitle"
      aria-hidden={!isOpen}
      onClick={(e) => { if (e.currentTarget === e.target) onClose(); }}
    >
      <div className="cert-modal">

        <header className="cert-modal-header">
          <h2 className="cert-modal-title" id="certModalTitle">
            {item?.title || 'Sertifikat'}
          </h2>
          <button
            className="cert-modal-close"
            onClick={onClose}
            aria-label="Tutup modal"
          >
            ✕
          </button>
        </header>

        <div className="cert-modal-body">
          {item && (
            <>
              {item.icon ? (
                <img
                  className="cert-modal-img"
                  src={item.icon}
                  alt={`Sertifikat ${item.title}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}

              <div
                style={{
                  display: item.icon ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '200px',
                  background: 'var(--surface2)',
                  color: 'var(--txt-muted)',
                  fontSize: '0.85rem',
                }}
              >
                Foto sertifikat belum tersedia
              </div>

              <div className="cert-modal-info">
                <p className="cert-modal-issuer">{item.issuer}</p>
                <p className="cert-modal-desc">{item.certDesc}</p>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
