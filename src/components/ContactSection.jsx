import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import emailjsConfig from '../emailjsConfig';


export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = emailjsConfig;

    if (
      SERVICE_ID === 'YOUR_SERVICE_ID' ||
      TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      setStatus('config-error');
      setTimeout(() => setStatus(null), 9000);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      formRef.current.reset();
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      if (status !== 'config-error') {
        setTimeout(() => setStatus(null), 7000);
      }
    }
  };

  return (
    <section id="contact" aria-label="Hubungi saya">
      <div className="wrapper">

        <p className="section-label">✦ Hubungi Saya</p>
        <h2 className="section-title">Mari Terhubung</h2>

        <div className="contact-layout">

          <div className="contact-info">
            <h3>Ada Pertanyaan atau Kolaborasi?</h3>
            <p>
              Jangan ragu untuk menghubungi saya. Saya terbuka untuk berbagai
              kesempatan — proyek, diskusi, maupun sekadar berkenalan!
            </p>

            <address className="contact-links">
              <a
                href="mailto:muhammadrazzan1329@gmail.com"
                className="contact-link-item"
              >
                <span className="cl-icon" aria-hidden="true">✉</span>
                muhammadrazzan1329@gmail.com
              </a>
              <a
                href="https://wa.me/62895321384487"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <span className="cl-icon" aria-hidden="true">●</span>
                +62 895-3213-84487
              </a>
              <a
                href="https://github.com/MuhammadRazzanFirdaus"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <span className="cl-icon" aria-hidden="true">⌥</span>
                github.com/MuhammadRazzanFirdaus
              </a>
            </address>
          </div>

          <form
            className="contact-form"
            id="contactForm"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="from_name">Nama Lengkap</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Masukan Nama Anda"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="emailanda@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="keperluan">Keperluan</label>
              <select id="keperluan" name="keperluan">
                <option value="">— Pilih keperluan —</option>
                <option value="kolaborasi">Kolaborasi Proyek</option>
                <option value="konsultasi">Konsultasi</option>
                <option value="berkenalan">Berkenalan</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="pesan">Pesan</label>
              <textarea
                id="pesan"
                name="pesan"
                placeholder="Tuliskan pesanmu di sini..."
                required
              />
            </div>

            <input
              type="text"
              name="_gotcha"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              className="btn-submit"
              id="submitBtn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Mengirim…' : 'Kirim Pesan →'}
            </button>

            <div
              className={`form-msg success${status === 'success' ? ' show' : ''}`}
              role="status"
              aria-live="polite"
            >
              ✓ Pesan berhasil dikirim! Saya akan segera membalasnya.
            </div>

            <div
              className={`form-msg error${status === 'error' ? ' show' : ''}`}
              role="alert"
              aria-live="assertive"
            >
              ✕ Gagal mengirim. Coba lagi atau hubungi langsung via email.
            </div>

            <div
              className={`form-msg error${status === 'config-error' ? ' show' : ''}`}
              role="alert"
              aria-live="assertive"
            >
              ⚠ EmailJS belum dikonfigurasi. Buka{' '}
              <code>src/emailjsConfig.js</code> dan isi SERVICE_ID,
              TEMPLATE_ID, dan PUBLIC_KEY dari akun emailjs.com kamu.
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
