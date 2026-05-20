# Muhammad Razzan Firdaus — Portofolio (React)

Portofolio personal yang dikonversi ke React + Vite dengan struktur komponen yang rapi.

---

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk produksi
npm run build
```

---

## ✉️ Setup EmailJS (Wajib untuk form kontak berfungsi)

Agar form kontak bisa mengirim email ke `muhammadrazzan1329@gmail.com`:

### Langkah 1 — Daftar EmailJS
Pergi ke [https://www.emailjs.com/](https://www.emailjs.com/) dan buat akun gratis.

### Langkah 2 — Buat Email Service
- Dashboard → **Email Services** → **Add New Service**
- Pilih **Gmail** → hubungkan akun `muhammadrazzan1329@gmail.com`
- Salin **Service ID** (contoh: `service_abc123`)

### Langkah 3 — Buat Email Template
- Dashboard → **Email Templates** → **Create New Template**
- Gunakan variabel berikut di dalam template:

```
Dari    : {{from_name}} <{{from_email}}>
Keperluan: {{keperluan}}
Pesan   : {{pesan}}
```

- Salin **Template ID** (contoh: `template_xyz789`)

### Langkah 4 — Ambil Public Key
- Dashboard → **Account** → **General** → **Public Key**
- Salin (contoh: `AbCdEfGhIjKlMnOp`)

### Langkah 5 — Isi Config
Buka `src/emailjsConfig.js` dan ganti nilainya:

```js
const emailjsConfig = {
  SERVICE_ID:  'service_abc123',
  TEMPLATE_ID: 'template_xyz789',
  PUBLIC_KEY:  'AbCdEfGhIjKlMnOp',
};
```

Selesai! Form sudah bisa kirim email sungguhan.

---

## 📁 Struktur File

```
razzan-portfolio/
├── index.html                  ← HTML entry point
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx                ← Entry point React
    ├── App.jsx                 ← Root component (state global)
    ├── index.css               ← Semua CSS (internal/global)
    ├── data.js                 ← Semua data statis (skills, galeri, dll)
    ├── emailjsConfig.js        ← ⚠ WAJIB DIISI untuk kirim email
    │
    └── components/
        ├── Navbar.jsx          ← Navigasi fixed + mobile drawer
        ├── ThemeToggle.jsx     ← Tombol toggle dark/light
        ├── Hero.jsx            ← Section hero (header utama)
        ├── CardWrap.jsx        ← Wrapper kartu profil + spin border
        ├── TabsSection.jsx     ← Container semua tab (tablist)
        ├── TabProfil.jsx       ← Tab: info pribadi + bio
        ├── TabSkill.jsx        ← Tab: hard skills bars + soft skills
        ├── TabPendidikan.jsx   ← Tab: timeline riwayat pendidikan
        ├── TabGaleri.jsx       ← Tab: grid galeri + filter
        ├── GalleryCard.jsx     ← Satu kartu dalam galeri
        ├── CertModal.jsx       ← Modal popup sertifikat
        ├── ContactSection.jsx  ← Section kontak + form EmailJS
        └── Footer.jsx          ← Footer halaman
```

---

## ✅ Fitur

| Fitur | Status |
|---|---|
| Dark / Light mode | ✅ |
| Mobile responsive + hamburger drawer | ✅ |
| Tab navigasi (Profil, Keahlian, Pendidikan, Galeri) | ✅ |
| Animasi skill bars dengan easing | ✅ |
| Filter galeri (Semua / Project / Sertifikat) | ✅ |
| Modal popup sertifikat | ✅ |
| Form kontak EmailJS (kirim email sungguhan) | ✅ |
| Semantic HTML (nav, header, main, section, footer, dl, address, time, article) | ✅ |
| CSS murni (internal, tanpa framework CSS) | ✅ |
| Spin border animasi SVG pada kartu profil | ✅ |
| Smooth scroll | ✅ |
| Honeypot anti-spam | ✅ |
| ARIA attributes (role, aria-label, aria-selected, dll) | ✅ |
| prefers-reduced-motion support | ✅ |

---

## 🎨 Cara Menambah Konten

### Tambah project/sertifikat baru
Edit `src/data.js` → tambahkan objek baru ke array `GALLERY_ITEMS`.

### Tambah skill baru
Edit `src/data.js` → tambahkan ke `HARD_SKILLS` atau `SOFT_SKILLS`.

### Tambah riwayat pendidikan
Edit `src/data.js` → tambahkan ke array `EDUCATION`.
