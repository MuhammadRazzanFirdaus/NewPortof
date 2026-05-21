import { useState } from 'react';
import GalleryCard from '../tabs_galery/GalleryCard';
import CertModal from '../tabs_galery/CertModal';
import { GALLERY_ITEMS } from '../data';

const FILTERS = [
  { value: 'all', label: 'Semua' },
  { value: 'project', label: 'Project' },
  { value: 'certificate', label: 'Sertifikat' },
];

export default function TabGaleri() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalItem, setModalItem] = useState(null);

  const visible = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.cat === activeFilter);

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filter galeri">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            className={`filter-btn${activeFilter === value ? ' active' : ''}`}
            data-filter={value}
            aria-pressed={activeFilter === value}
            onClick={() => setActiveFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="gallery-grid" role="list" aria-label="Daftar karya dan sertifikat">
        {visible.map(item => (
          <GalleryCard
            key={item.id}
            item={item}
            onOpenModal={setModalItem}
          />
        ))}
      </div>

      <CertModal
        item={modalItem}
        onClose={() => setModalItem(null)}
      />
    </>
  );
}
