import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function CertModal({ item, onClose }) {
  const isOpen = !!item;

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="cert-modal-backdrop open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cert-modal">
        <header className="cert-modal-header">
          <h2 className="cert-modal-title">
            {item?.title}
          </h2>

          <button
            className="cert-modal-close"
            onClick={onClose}
          >
            ✕
          </button>
        </header>

        <div className="cert-modal-body">
          <img
            className="cert-modal-img"
            src={item?.icon}
            alt={item?.title}
          />

          <div className="cert-modal-info">
            <p>{item?.issuer}</p>
            <p>{item?.certDesc}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}