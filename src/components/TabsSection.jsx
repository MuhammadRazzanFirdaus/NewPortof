import { useState } from 'react';
import TabProfil from './tabs/TabProfil';
import TabSkill from './tabs/TabSkill';
import TabPendidikan from './tabs/TabPendidikan';
import TabGaleri from './tabs/TabGaleri';

const TABS = [
  { key: 'profil', label: 'Profil' },
  { key: 'skill', label: 'Keahlian' },
  { key: 'pendidikan', label: 'Pendidikan' },
  { key: 'galeri', label: 'Galeri' },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <section id="tabs-section" aria-label="Informasi tentang saya">
      <div className="wrapper">

        <div className="tabs-header" role="tablist" aria-label="Tab navigasi">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`tab-btn${activeTab === tab.key ? ' active' : ''}`}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls={`tab-${tab.key}`}
              id={`tabBtn-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id="tab-profil"
          className={`tab-pane${activeTab === 'profil' ? ' active' : ''}`}
          role="tabpanel"
          aria-labelledby="tabBtn-profil"
          hidden={activeTab !== 'profil'}
        >
          <TabProfil />
        </div>

        <div
          id="tab-skill"
          className={`tab-pane${activeTab === 'skill' ? ' active' : ''}`}
          role="tabpanel"
          aria-labelledby="tabBtn-skill"
          hidden={activeTab !== 'skill'}
        >
          <TabSkill active={activeTab === 'skill'} />
        </div>

        <div
          id="tab-pendidikan"
          className={`tab-pane${activeTab === 'pendidikan' ? ' active' : ''}`}
          role="tabpanel"
          aria-labelledby="tabBtn-pendidikan"
          hidden={activeTab !== 'pendidikan'}
        >
          <TabPendidikan />
        </div>

        <div
          id="tab-galeri"
          className={`tab-pane${activeTab === 'galeri' ? ' active' : ''}`}
          role="tabpanel"
          aria-labelledby="tabBtn-galeri"
          hidden={activeTab !== 'galeri'}
        >
          <TabGaleri />
        </div>

      </div>
    </section>
  );
}
