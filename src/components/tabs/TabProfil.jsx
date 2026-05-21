import CardWrap from '../tabs_profile/CardWrap';
import { PERSONAL_INFO, SOCIAL_INFO } from '../../data';

export default function TabProfil() {
  return (
    <div className="profil-grid">

      <CardWrap>
        <div className="info-card">
          <h3>Informasi Pribadi</h3>
          <dl>
            {PERSONAL_INFO.map(({ label, value }) => (
              <div className="info-row" key={label}>
                <dt className="info-label">{label}</dt>
                <dd className="info-value">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </CardWrap>

      <CardWrap>
        <div className="info-card">
          <h3>Kontak &amp; Media Sosial</h3>
          <dl>
            {SOCIAL_INFO.map(({ label, value }) => (
              <div className="info-row" key={label}>
                <dt className="info-label">{label}</dt>
                <dd className="info-value">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </CardWrap>

      <CardWrap className="full">
        <div className="bio-card">
          <h3>Tentang Saya</h3>
          <p>
            Halo! Saya <strong style={{ color: 'var(--txt)' }}>Muhammad Razzan Firdaus</strong>,
            seorang pelajar SMK jurusan Pengembangan Perangkat Lunak yang memiliki ketertarikan besar
            di bidang Logika dan Alur Website. Saya percaya bahwa teknologi
            adalah jembatan antara ide dan dampak nyata — dan saya ingin menjadi bagian dari
            perubahan itu.
            <br /><br />
            Di luar coding, saya gemar bereksperimen dengan alur logika dan mengikuti
            kompetisi-kompetisi teknologi. Saya selalu terbuka untuk kolaborasi, belajar hal
            baru, dan berkontribusi pada proyek-proyek yang bermakna.
          </p>
        </div>
      </CardWrap>

    </div>
  );
}
