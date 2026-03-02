'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
    useEffect(() => {
        // Any necessary client-side mount logic if needed
    }, []);

    return (
        <>
            <Script src="/script.js" strategy="lazyOnload" />
            {/* Original body content below */}

            <a href="#main-content" className="skip-to-content">Langsung ke Kandungan</a>

            <a href="https://kanopipremiumsse.wasap.click" className="whatsapp-float" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp: Dapatkan sebut harga percuma">
                <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                    <path
                        d="M16 0C7.163 0 0 7.163 0 16c0 2.837.736 5.598 2.139 8.047L.073 31.927l8.095-2.048A15.937 15.937 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.442 22.442c-.347.975-2.031 1.91-2.8 2.031-.769.122-1.747.173-2.82-.175-.65-.211-1.483-.492-2.55-.964-4.488-1.986-7.415-6.533-7.639-6.835-.224-.303-1.831-2.434-1.831-4.641 0-2.207 1.159-3.294 1.571-3.744.411-.45.897-.563 1.196-.563.299 0 .598.003.859.016.276.013.645-.105.991.757.347.861 1.183 2.886 1.287 3.094.104.208.173.45.035.726-.139.277-.208.45-.416.693-.208.243-.438.542-.624.728-.208.208-.425.434-.182.851.243.416 1.082 1.783 2.323 2.886 1.596 1.418 2.942 1.856 3.359 2.064.416.208.659.173.902-.104.243-.277 1.04-1.213 1.318-1.629.277-.416.555-.347.937-.208.381.139 2.423 1.143 2.839 1.351.416.208.693.312.797.485.104.173.104.995-.243 1.97z" />
                </svg>
                <span className="whatsapp-text" data-lang-ms="Chat Sekarang" data-lang-en="Chat Now">Chat Sekarang</span>
            </a>

            <button id="backToTop" className="back-to-top" aria-label="Kembali ke atas">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
                <span className="back-to-top-text">Ke Atas</span>
            </button>

            <main id="main-content">
                <section className="hero">
                    <div className="hero-overlay"></div>
                    <nav className="navbar" role="navigation" aria-label="Main Navigation">
                        <div className="container nav-container">
                            <div className="logo">
                                <span className="logo-icon" aria-hidden="true">⛺</span>
                                <span className="logo-text">Seri Senawang<span className="logo-accent">Event</span></span>
                            </div>
                            <div className="nav-links" id="nav-links">
                                <a href="#services" data-lang-ms="Perkhidmatan" data-lang-en="Services">Perkhidmatan</a>
                                <a href="#gallery" data-lang-ms="Galeri" data-lang-en="Gallery">Galeri</a>
                                <a href="#testimonials" data-lang-ms="Testimoni" data-lang-en="Testimonials">Testimoni</a>
                                <a href="#packages" data-lang-ms="Pakej" data-lang-en="Packages">Pakej</a>
                                <a href="#contact" data-lang-ms="Hubungi" data-lang-en="Contact">Hubungi</a>
                            </div>
                            <div className="nav-right">
                                <button id="langToggle" className="lang-toggle" aria-label="Tukar Bahasa">
                                    <span className="lang-icon" aria-hidden="true">🌐</span>
                                    <span className="lang-text">EN</span>
                                </button>
                                <a href="https://kanopipremiumsse.wasap.click" className="nav-cta" target="_blank"
                                    rel="noopener">Hubungi Kami</a>
                            </div>
                            <button className="mobile-menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">
                                <span></span><span></span><span></span>
                            </button>
                        </div>
                    </nav>

                    <div className="container hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon" aria-hidden="true">✨</span>
                            <span data-lang-ms="Dipercayai Lebih 500+ Majlis" data-lang-en="Trusted by 500+ Events">Dipercayai
                                Lebih 500+ Majlis</span>
                        </div>
                        <h1 data-lang-ms="Majlis Anda Layak Tampil <span class='highlight'>Gah & Berkesan</span>"
                            data-lang-en="Your Event Deserves to Look <span class='highlight'>Grand & Impressive</span>">
                            Majlis Anda Layak Tampil <span className="highlight">Gah & Berkesan</span>
                        </h1>
                        <p className="hero-subtitle"
                            data-lang-ms="Sewa kanopi & khemah premium untuk perkahwinan, kenduri, dan event korporat anda. Setup profesional, harga berpatutan."
                            data-lang-en="Rent premium canopy & tents for your wedding, celebration, and corporate events. Professional setup, affordable prices.">
                            Sewa kanopi & khemah premium untuk perkahwinan, kenduri, dan event korporat anda. Setup profesional,
                            harga berpatutan.
                        </p>

                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number" data-target="500" data-suffix="+">0</span>
                                <span className="stat-label" data-lang-ms="Majlis Berjaya" data-lang-en="Successful Events">Majlis
                                    Berjaya</span>
                            </div>
                            <div className="stat-divider" aria-hidden="true"></div>
                            <div className="stat">
                                <span className="stat-number" data-target="10" data-suffix="+">0</span>
                                <span className="stat-label" data-lang-ms="Tahun Pengalaman" data-lang-en="Years Experience">Tahun
                                    Pengalaman</span>
                            </div>
                            <div className="stat-divider" aria-hidden="true"></div>
                            <div className="stat">
                                <span className="stat-number" data-target="4.9" data-suffix="★" data-decimal="true">0</span>
                                <span className="stat-label" data-lang-ms="Rating Google" data-lang-en="Google Rating">Rating
                                    Google</span>
                            </div>
                        </div>

                        <div className="hero-cta">
                            <a href="https://kanopipremiumsse.wasap.click" className="btn btn-primary" target="_blank"
                                rel="noopener">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.318 1.605 6.175L.073 23.944l5.927-1.513A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                                </svg>
                                <span data-lang-ms="Dapatkan Sebut Harga PERCUMA →" data-lang-en="Get FREE Quote →">Dapatkan
                                    Sebut Harga PERCUMA →</span>
                            </a>
                            <a href="#gallery" className="btn btn-secondary">
                                <span data-lang-ms="Lihat Galeri" data-lang-en="View Gallery">Lihat Galeri</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18"
                                    height="18" aria-hidden="true">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="trust-bar" aria-label="Trust indicators">
                    <div className="container">
                        <div className="trust-items">
                            <div className="trust-item">
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                <span data-lang-ms="Setup Profesional" data-lang-en="Professional Setup">Setup
                                    Profesional</span>
                            </div>
                            <div className="trust-item">
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>
                                <span data-lang-ms="Kualiti Premium" data-lang-en="Premium Quality">Kualiti Premium</span>
                            </div>
                            <div className="trust-item">
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span data-lang-ms="Servis Menyeluruh" data-lang-en="Complete Service">Servis Menyeluruh</span>
                            </div>
                            <div className="trust-item">
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                                </svg>
                                <span data-lang-ms="Harga Berpatutan" data-lang-en="Affordable Prices">Harga Berpatutan</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services" id="services">
                    <div className="container">
                        <header className="section-header">
                            <span className="section-tag" data-lang-ms="Perkhidmatan Kami" data-lang-en="Our Services">Perkhidmatan
                                Kami</span>
                            <h2 data-lang-ms="Solusi Lengkap Untuk Setiap Majlis"
                                data-lang-en="Complete Solutions For Every Event">Solusi Lengkap Untuk Setiap Majlis</h2>
                            <p data-lang-ms="Kami menyediakan pelbagai jenis khemah dan kanopi premium untuk memenuhi keperluan majlis anda"
                                data-lang-en="We provide various types of premium tents and canopies to meet your event needs">
                                Kami menyediakan pelbagai jenis khemah dan kanopi premium untuk memenuhi keperluan majlis anda
                            </p>
                        </header>
                        <div className="services-grid">
                            <article className="service-card">
                                <div className="service-icon" aria-hidden="true">🏕️</div>
                                <h3>Marquee Tent</h3>
                                <p>Khemah marquee elegant dengan struktur kukuh, sesuai untuk majlis perkahwinan grand dan event
                                    VIP.</p>
                                <ul className="service-features">
                                    <li>Struktur aluminium premium</li>
                                    <li>Kanvas berkualiti tinggi</li>
                                    <li>Saiz: 20x30, 30x40, 40x60 kaki</li>
                                </ul>
                                <a href="https://kanopipremiumsse.wasap.click" className="service-link" target="_blank"
                                    rel="noopener">Tanya Sekarang →</a>
                            </article>
                            <article className="service-card">
                                <div className="service-icon" aria-hidden="true">🎪</div>
                                <h3>Canopy Arabian</h3>
                                <p>Kanopi arabian mewah dengan design timeless, popular untuk majlis tunang dan aqiqah.</p>
                                <ul className="service-features">
                                    <li>Design klasik elegant</li>
                                    <li>Warna putih/cream tersedia</li>
                                    <li>Include dinding sisi</li>
                                </ul>
                                <a href="https://kanopipremiumsse.wasap.click" className="service-link" target="_blank"
                                    rel="noopener">Tanya Sekarang →</a>
                            </article>
                            <article className="service-card">
                                <div className="service-icon" aria-hidden="true">🏠</div>
                                <h3>Canopy Piramid</h3>
                                <p>Kanopi piramid versatile untuk pelbagai event outdoor. Praktikal dan cost-effective.</p>
                                <ul className="service-features">
                                    <li>Saiz 10x10, 15x15, 20x20</li>
                                    <li>Tahan hujan & panas</li>
                                    <li>Warna merah/biru/putih</li>
                                </ul>
                                <a href="https://kanopipremiumsse.wasap.click" className="service-link" target="_blank"
                                    rel="noopener">Tanya Sekarang →</a>
                            </article>
                            <article className="service-card">
                                <div className="service-icon" aria-hidden="true">🪑</div>
                                <h3>Peralatan Event</h3>
                                <p>Pakej lengkap termasuk kerusi, meja, carpet, lighting, dan dekorasi asas.</p>
                                <ul className="service-features">
                                    <li>Kerusi Tiffany/Banquet/Plastik</li>
                                    <li>Meja bulat 5ft/6ft</li>
                                    <li>Carpet, kipas & lighting</li>
                                </ul>
                                <a href="https://kanopipremiumsse.wasap.click" className="service-link" target="_blank"
                                    rel="noopener">Tanya Sekarang →</a>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="gallery" id="gallery">
                    <div className="container">
                        <header className="section-header">
                            <span className="section-tag" data-lang-ms="Portfolio Kami" data-lang-en="Our Portfolio">Portfolio
                                Kami</span>
                            <h2 data-lang-ms="Majlis Yang Kami Jayakan" data-lang-en="Events We've Completed">Majlis Yang Kami
                                Jayakan</h2>
                            <p data-lang-ms="Lihat koleksi event berjaya yang telah kami kendalikan"
                                data-lang-en="Browse our collection of successful events">Lihat koleksi event berjaya yang telah
                                kami kendalikan</p>
                        </header>
                        <div className="gallery-grid">
                            <div className="gallery-item large wedding-bg" role="img"
                                aria-label="Galeri: Majlis Perkahwinan Premium">
                                <div className="gallery-overlay">
                                    <span className="gallery-tag">Wedding</span>
                                    <h4 data-lang-ms="Majlis Perkahwinan Premium" data-lang-en="Premium Wedding Event">Majlis
                                        Perkahwinan Premium</h4>
                                    <p>Marquee Tent 40x60 dengan full decoration</p>
                                </div>
                            </div>
                            <div className="gallery-item corporate-bg" role="img" aria-label="Galeri: Event Korporat">
                                <div className="gallery-overlay">
                                    <span className="gallery-tag">Corporate</span>
                                    <h4 data-lang-ms="Event Korporat" data-lang-en="Corporate Event">Event Korporat</h4>
                                    <p>Setup professional untuk 200 pax</p>
                                </div>
                            </div>
                            <div className="gallery-item aqiqah-bg" role="img" aria-label="Galeri: Majlis Aqiqah">
                                <div className="gallery-overlay">
                                    <span className="gallery-tag">Aqiqah</span>
                                    <h4 data-lang-ms="Majlis Aqiqah" data-lang-en="Aqiqah Ceremony">Majlis Aqiqah</h4>
                                    <p>Canopy Arabian dengan tema pink</p>
                                </div>
                            </div>
                            <div className="gallery-item wide tunang-bg" role="img" aria-label="Galeri: Majlis Pertunangan">
                                <div className="gallery-overlay">
                                    <span className="gallery-tag" data-lang-ms="Tunang" data-lang-en="Engagement">Tunang</span>
                                    <h4 data-lang-ms="Majlis Pertunangan" data-lang-en="Engagement Ceremony">Majlis Pertunangan
                                    </h4>
                                    <p>Elegant setup dengan lighting malam</p>
                                </div>
                            </div>
                            <div className="gallery-item birthday-bg" role="img" aria-label="Galeri: Parti Hari Jadi">
                                <div className="gallery-overlay">
                                    <span className="gallery-tag">Birthday</span>
                                    <h4 data-lang-ms="Parti Hari Jadi" data-lang-en="Birthday Party">Parti Hari Jadi</h4>
                                    <p>Setup colorful untuk kids party</p>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-cta">
                            <a href="https://t.me/serisenawangeventgallery" className="btn btn-outline" target="_blank"
                                rel="noopener">
                                <span data-lang-ms="Lihat 100+ Gambar di Telegram"
                                    data-lang-en="View 100+ Photos on Telegram">Lihat 100+ Gambar di Telegram</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18"
                                    height="18" aria-hidden="true">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="why-us">
                    <div className="container">
                        <div className="why-us-grid">
                            <div className="why-us-content">
                                <span className="section-tag" data-lang-ms="Kenapa Pilih Kami?" data-lang-en="Why Choose Us?">Kenapa
                                    Pilih Kami?</span>
                                <h2 data-lang-ms="Pengalaman & Kepakaran Yang Terbukti"
                                    data-lang-en="Proven Experience & Expertise">Pengalaman & Kepakaran Yang Terbukti</h2>
                                <p data-lang-ms="Dengan lebih 10 tahun dalam industri, kami memahami setiap keperluan majlis anda."
                                    data-lang-en="With over 10 years in the industry, we understand every need of your event.">
                                    Dengan lebih 10 tahun dalam industri, kami memahami setiap keperluan majlis anda.</p>
                                <div className="why-us-features">
                                    <div className="why-feature">
                                        <div className="why-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg></div>
                                        <div className="why-text">
                                            <h4 data-lang-ms="Kualiti Terjamin" data-lang-en="Guaranteed Quality">Kualiti
                                                Terjamin</h4>
                                            <p>Semua khemah & kanopi kami menggunakan material premium berkualiti tinggi.</p>
                                        </div>
                                    </div>
                                    <div className="why-feature">
                                        <div className="why-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                        </svg></div>
                                        <div className="why-text">
                                            <h4 data-lang-ms="Setup Tepat Waktu" data-lang-en="On-Time Setup">Setup Tepat Waktu
                                            </h4>
                                            <p>Kami commit untuk setup siap sebelum waktu yang dijanjikan.</p>
                                        </div>
                                    </div>
                                    <div className="why-feature">
                                        <div className="why-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                        </svg></div>
                                        <div className="why-text">
                                            <h4 data-lang-ms="Servis Selepas Majlis" data-lang-en="Post-Event Service">Servis
                                                Selepas Majlis</h4>
                                            <p>Team kami akan hadir untuk dismantle & cleanup selepas majlis selesai.</p>
                                        </div>
                                    </div>
                                    <div className="why-feature">
                                        <div className="why-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        </svg></div>
                                        <div className="why-text">
                                            <h4 data-lang-ms="Konsultasi Percuma" data-lang-en="Free Consultation">Konsultasi
                                                Percuma</h4>
                                            <p>Dapatkan nasihat profesional untuk majlis anda tanpa sebarang kos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="why-us-visual">
                                <div className="visual-card">
                                    <div className="visual-stat">
                                        <span className="big-number" data-target="500" data-suffix="+">0</span>
                                        <span className="stat-desc" data-lang-ms="Majlis Berjaya"
                                            data-lang-en="Successful Events">Majlis Berjaya</span>
                                    </div>
                                </div>
                                <div className="visual-card secondary">
                                    <div className="visual-stat">
                                        <span className="big-number" data-target="98" data-suffix="%">0</span>
                                        <span className="stat-desc" data-lang-ms="Pelanggan Berpuas Hati"
                                            data-lang-en="Satisfied Customers">Pelanggan Berpuas Hati</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials" id="testimonials">
                    <div className="container">
                        <header className="section-header">
                            <span className="section-tag" data-lang-ms="Testimoni" data-lang-en="Testimonials">Testimoni</span>
                            <h2 data-lang-ms="Apa Kata Pelanggan Kami" data-lang-en="What Our Customers Say">Apa Kata Pelanggan
                                Kami</h2>
                            <p data-lang-ms="Pengalaman sebenar dari pelanggan-pelanggan kami"
                                data-lang-en="Real experiences from our valued customers">Pengalaman sebenar dari
                                pelanggan-pelanggan kami</p>
                        </header>
                        <div className="testimonials-grid">
                            <article className="testimonial-card">
                                <div className="testimonial-rating" aria-label="5 bintang">★★★★★</div>
                                <p className="testimonial-text">"Sangat puas hati dengan servis SSE! Khemah cantik, setup kemas, dan
                                    team sangat professional. Highly recommended untuk sesiapa yang nak buat majlis outdoor."
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-avatar" aria-hidden="true">A</div>
                                    <div className="author-info"><strong>Amirah Sulaiman</strong><span>Majlis Perkahwinan,
                                        Seremban</span></div>
                                </div>
                            </article>
                            <article className="testimonial-card">
                                <div className="testimonial-rating" aria-label="5 bintang">★★★★★</div>
                                <p className="testimonial-text">"Dah 3 kali guna servis sini. Memang consistent kualiti, harga pun
                                    berpatutan. Owner friendly, boleh discuss macam-macam. The best!"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar" aria-hidden="true">F</div>
                                    <div className="author-info"><strong>Farid Hassan</strong><span>Event Keluarga, Port
                                        Dickson</span></div>
                                </div>
                            </article>
                            <article className="testimonial-card">
                                <div className="testimonial-rating" aria-label="5 bintang">★★★★★</div>
                                <p className="testimonial-text">"Team SSE datang tepat waktu, setup laju dan kemas. Tetamu semua
                                    puji cantiknya khemah. Terima kasih banyak-banyak!"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar" aria-hidden="true">N</div>
                                    <div className="author-info"><strong>Nurul Izzati</strong><span>Majlis Aqiqah, Nilai</span>
                                    </div>
                                </div>
                            </article>
                            <article className="testimonial-card">
                                <div className="testimonial-rating" aria-label="5 bintang">★★★★★</div>
                                <p className="testimonial-text">"Harga sangat competitive berbanding vendor lain. Yang penting
                                    servis tip top, khemah bersih dan cantik. Akan recommend kepada kawan-kawan!"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar" aria-hidden="true">R</div>
                                    <div className="author-info"><strong>Razak Ibrahim</strong><span>Majlis Cukur Jambul,
                                        Rembau</span></div>
                                </div>
                            </article>
                            <article className="testimonial-card">
                                <div className="testimonial-rating" aria-label="5 bintang">★★★★★</div>
                                <p className="testimonial-text">"First time guna SSE untuk corporate event company. Sangat impressed
                                    dengan professionalism mereka. Akan repeat order untuk event seterusnya."</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar" aria-hidden="true">S</div>
                                    <div className="author-info"><strong>Sarah Lim</strong><span>Corporate Event, Seremban 2</span>
                                    </div>
                                </div>
                            </article>
                            <article className="testimonial-card">
                                <div className="testimonial-rating" aria-label="5 bintang">★★★★★</div>
                                <p className="testimonial-text">"Majlis tunang anak saya jadi meriah sebab khemah arabian yang
                                    cantik! Banyak tetamu tanya ambil dari mana. Terima kasih SSE!"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar" aria-hidden="true">H</div>
                                    <div className="author-info"><strong>Hjh Mariam</strong><span>Majlis Pertunangan,
                                        Senawang</span></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="packages" id="packages">
                    <div className="container">
                        <header className="section-header">
                            <span className="section-tag" data-lang-ms="Pakej Popular" data-lang-en="Popular Packages">Pakej
                                Popular</span>
                            <h2 data-lang-ms="Pilih Pakej Yang Sesuai" data-lang-en="Choose The Right Package">Pilih Pakej Yang
                                Sesuai</h2>
                            <p data-lang-ms="Kami menawarkan pakej fleksibel mengikut keperluan dan bajet anda"
                                data-lang-en="We offer flexible packages according to your needs and budget">Kami menawarkan
                                pakej fleksibel mengikut keperluan dan bajet anda</p>
                        </header>
                        <div className="urgency-banner" role="alert">
                            <span className="urgency-icon" aria-hidden="true">🔥</span>
                            <span data-lang-ms="SLOT TERHAD! Hanya tinggal 3 slot untuk Februari & Mac 2026"
                                data-lang-en="LIMITED SLOTS! Only 3 slots left for February & March 2026">SLOT TERHAD! Hanya
                                tinggal 3 slot untuk Februari & Mac 2026</span>
                        </div>
                        <div className="packages-grid">
                            <article className="package-card">
                                <div className="package-header">
                                    <h3 data-lang-ms="Pakej Jimat" data-lang-en="Budget Package">Pakej Jimat</h3>
                                    <p>Untuk majlis kecil 20-50 pax</p>
                                </div>
                                <div className="package-price">
                                    <span className="price-label">Bermula dari</span>
                                    <span className="price-value">RM<strong>450</strong></span>
                                </div>
                                <ul className="package-features">
                                    <li><span className="check">✓</span> Canopy Piramid 10x10 (2 unit)</li>
                                    <li><span className="check">✓</span> Kerusi plastik 30 unit</li>
                                    <li><span className="check">✓</span> Meja lipat 5 unit</li>
                                    <li><span className="check">✓</span> Setup & Dismantling</li>
                                    <li><span className="check">✓</span> Transport (Seremban area)</li>
                                </ul>
                                <a href="https://kanopipremiumsse.wasap.click" className="btn btn-outline-package" target="_blank"
                                    rel="noopener">Tanya Detail</a>
                            </article>
                            <article className="package-card popular">
                                <div className="popular-badge">Paling Popular</div>
                                <div className="package-header">
                                    <h3 data-lang-ms="Pakej Kenduri" data-lang-en="Feast Package">Pakej Kenduri</h3>
                                    <p>Untuk majlis 80-150 pax</p>
                                </div>
                                <div className="package-price">
                                    <span className="price-label">Bermula dari</span>
                                    <span className="price-value">RM<strong>1,500</strong></span>
                                </div>
                                <ul className="package-features">
                                    <li><span className="check">✓</span> Marquee Tent 20x40</li>
                                    <li><span className="check">✓</span> Kerusi banquet 80 unit</li>
                                    <li><span className="check">✓</span> Meja bulat 5ft (10 unit)</li>
                                    <li><span className="check">✓</span> Carpet merah premium</li>
                                    <li><span className="check">✓</span> Kipas industri (2 unit)</li>
                                    <li><span className="check">✓</span> Lighting asas</li>
                                    <li><span className="check">✓</span> Setup & Dismantling</li>
                                    <li><span className="check">✓</span> Transport included</li>
                                </ul>
                                <a href="https://kanopipremiumsse.wasap.click" className="btn btn-primary-package" target="_blank"
                                    rel="noopener">Pilih Pakej Ini</a>
                            </article>
                            <article className="package-card">
                                <div className="package-header">
                                    <h3 data-lang-ms="Pakej VIP" data-lang-en="VIP Package">Pakej VIP</h3>
                                    <p>Untuk majlis grand 200+ pax</p>
                                </div>
                                <div className="package-price">
                                    <span className="price-label">Bermula dari</span>
                                    <span className="price-value">RM<strong>3,500</strong></span>
                                </div>
                                <ul className="package-features">
                                    <li><span className="check">✓</span> Marquee Tent 30x60</li>
                                    <li><span className="check">✓</span> Kerusi Tiffany/Chiavari 150 unit</li>
                                    <li><span className="check">✓</span> Meja VIP bulat 6ft (20 unit)</li>
                                    <li><span className="check">✓</span> Premium carpet full</li>
                                    <li><span className="check">✓</span> Full lighting + chandeliers</li>
                                    <li><span className="check">✓</span> Aircond portable (optional)</li>
                                    <li><span className="check">✓</span> Pelamin basic setup</li>
                                    <li><span className="check">✓</span> Setup & Dismantling</li>
                                </ul>
                                <a href="https://kanopipremiumsse.wasap.click" className="btn btn-outline-package" target="_blank"
                                    rel="noopener">Tanya Detail</a>
                            </article>
                        </div>
                        <div className="add-ons-section">
                            <h4>🎁 Add-On Popular:</h4>
                            <div className="add-ons-list">
                                <span className="add-on">Aircond Portable (+RM300)</span>
                                <span className="add-on">Generator (+RM250)</span>
                                <span className="add-on">Extra Lighting (+RM150)</span>
                                <span className="add-on">Dinding Sisi (+RM100)</span>
                                <span className="add-on">Kipas Industri (+RM50/unit)</span>
                            </div>
                        </div>
                        <p className="packages-note">💡 Harga bergantung kepada lokasi. Seremban & N9 free transport. Luar kawasan
                            akan dimaklumkan.</p>
                    </div>
                </section>

                <section className="contact-section" id="contact">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-info">
                                <span className="section-tag" data-lang-ms="Hubungi Kami" data-lang-en="Contact Us">Hubungi
                                    Kami</span>
                                <h2 data-lang-ms="Dapatkan Sebut Harga Segera" data-lang-en="Get Instant Quote">Dapatkan Sebut
                                    Harga Segera</h2>
                                <p>Isi borang di sebelah atau hubungi kami terus melalui WhatsApp untuk respons lebih pantas.
                                </p>
                                <div className="contact-methods">
                                    <a href="https://kanopipremiumsse.wasap.click" className="contact-method whatsapp"
                                        target="_blank" rel="noopener">
                                        <div className="method-icon" aria-hidden="true"><svg viewBox="0 0 24 24"
                                            fill="currentColor">
                                            <path
                                                d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.318 1.605 6.175L.073 23.944l5.927-1.513A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                                        </svg></div>
                                        <div className="method-text"><strong>WhatsApp (Pantas)</strong><span>013-967 7269 / 011-6273
                                            7374</span></div>
                                    </a>
                                    <a href="tel:+60139677269" className="contact-method">
                                        <div className="method-icon" aria-hidden="true"><svg viewBox="0 0 24 24"
                                            fill="currentColor">
                                            <path
                                                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg></div>
                                        <div className="method-text"><strong>Telefon</strong><span>013-967 7269</span></div>
                                    </a>
                                    <a href="https://maps.app.goo.gl/sVBhg1bb4fxvoQ6A7" className="contact-method" target="_blank"
                                        rel="noopener">
                                        <div className="method-icon" aria-hidden="true"><svg viewBox="0 0 24 24"
                                            fill="currentColor">
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg></div>
                                        <div className="method-text"><strong>Lokasi</strong><span>Senawang, Negeri Sembilan</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="business-hours">
                                    <h4>⏰ Waktu Operasi</h4>
                                    <p>Isnin - Jumaat: 9:00 AM - 6:00 PM</p>
                                    <p>Sabtu - Ahad: 9:00 AM - 5:00 PM</p>
                                    <p className="highlight-text">WhatsApp: 24/7 (akan dibalas secepat mungkin)</p>
                                </div>
                            </div>
                            <div className="contact-form-wrapper">
                                <form id="contactForm" className="contact-form" noValidate>
                                    <h3>📝 Borang Pertanyaan</h3>
                                    <div className="form-group">
                                        <label htmlFor="name">Nama Penuh <span aria-label="wajib">*</span></label>
                                        <input type="text" id="name" name="name" placeholder="Cth: Ahmad bin Ali" required
                                            autoComplete="name" />
                                        <span className="error-message" aria-live="polite"></span>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">No. Telefon <span aria-label="wajib">*</span></label>
                                            <input type="tel" id="phone" name="phone" placeholder="Cth: 0139677269" required
                                                autoComplete="tel" inputMode="tel" pattern="[0-9]{9,12}" />
                                            <span className="error-message" aria-live="polite"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email (Pilihan)</label>
                                            <input type="email" id="email" name="email" placeholder="Cth: anda@email.com"
                                                autoComplete="email" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="eventType">Jenis Majlis <span aria-label="wajib">*</span></label>
                                            <select id="eventType" name="eventType" required>
                                                <option value="">-- Pilih --</option>
                                                <option value="Perkahwinan">Perkahwinan</option>
                                                <option value="Pertunangan">Pertunangan</option>
                                                <option value="Aqiqah/Cukur Jambul">Aqiqah / Cukur Jambul</option>
                                                <option value="Kenduri Doa Selamat">Kenduri / Doa Selamat</option>
                                                <option value="Birthday Party">Birthday Party</option>
                                                <option value="Corporate Event">Corporate Event</option>
                                                <option value="Lain-lain">Lain-lain</option>
                                            </select>
                                            <span className="error-message" aria-live="polite"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="eventDate">Tarikh Majlis <span aria-label="wajib">*</span></label>
                                            <input type="date" id="eventDate" name="eventDate" required min="" />
                                            <span className="error-message" aria-live="polite"></span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="guests">Anggaran Tetamu</label>
                                            <select id="guests" name="guests">
                                                <option value="">-- Pilih --</option>
                                                <option value="20-50">20 - 50 orang</option>
                                                <option value="50-100">50 - 100 orang</option>
                                                <option value="100-200">100 - 200 orang</option>
                                                <option value="200-300">200 - 300 orang</option>
                                                <option value="300+">Lebih 300 orang</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="location">Lokasi Majlis</label>
                                            <input type="text" id="location" name="location"
                                                placeholder="Cth: Taman Bukit, Seremban" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Maklumat Tambahan</label>
                                        <textarea id="message" name="message" rows="3"
                                            placeholder="Nyatakan keperluan khusus anda (jenis kanopi, peralatan tambahan, dll)"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-submit">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                        </svg>
                                        <span>Hantar Pertanyaan</span>
                                    </button>
                                    <p className="form-note">Kami akan hubungi anda dalam masa 1-2 jam waktu bekerja.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section" aria-label="Call to action">
                    <div className="container">
                        <div className="cta-content">
                            <h2 data-lang-ms="Sedia Untuk Majlis Impian Anda?" data-lang-en="Ready For Your Dream Event?">Sedia
                                Untuk Majlis Impian Anda?</h2>
                            <p>Hubungi kami sekarang untuk konsultasi percuma dan sebut harga terbaik</p>
                            <div className="cta-buttons">
                                <a href="https://kanopipremiumsse.wasap.click" className="btn btn-cta-primary" target="_blank"
                                    rel="noopener">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                                        <path
                                            d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.318 1.605 6.175L.073 23.944l5.927-1.513A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                                    </svg>
                                    <span>WhatsApp Sekarang</span>
                                </a>
                                <a href="tel:+60139677269" className="btn btn-cta-secondary">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                                        <path
                                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    <span>013-967 7269</span>
                                </a>
                            </div>
                            <p className="cta-note">Atau hubungi: <a href="tel:+60116273737">011-6273 7374</a></p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="logo"><span className="logo-icon" aria-hidden="true">⛺</span><span className="logo-text">Seri
                                Senawang<span className="logo-accent">Event</span></span></div>
                            <p>Penyedia perkhidmatan kanopi dan khemah premium untuk pelbagai majlis di Negeri Sembilan dan
                                sekitarnya.</p>
                            <div className="footer-socials">
                                <a href="https://www.youtube.com/@serisenawangevent" target="_blank" rel="noopener"
                                    aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg></a>
                                <a href="https://t.me/serisenawangeventgallery" target="_blank" rel="noopener"
                                    aria-label="Telegram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg></a>
                                <a href="https://kanopipremiumsse.wasap.click" target="_blank" rel="noopener"
                                    aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        <path
                                            d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.318 1.605 6.175L.073 23.944l5.927-1.513A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.016 0-3.952-.512-5.672-1.477l-.407-.241-3.518.9.938-3.426-.264-.42A9.77 9.77 0 0 1 2.182 12c0-5.423 4.395-9.818 9.818-9.818S21.818 6.577 21.818 12 17.423 21.818 12 21.818z" />
                                    </svg></a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <h4>Menu Pantas</h4>
                            <ul>
                                <li><a href="#services">Perkhidmatan</a></li>
                                <li><a href="#gallery">Galeri</a></li>
                                <li><a href="#testimonials">Testimoni</a></li>
                                <li><a href="#packages">Pakej</a></li>
                                <li><a href="#contact">Hubungi</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Perkhidmatan</h4>
                            <ul>
                                <li><a href="https://kanopipremiumsse.wasap.click" target="_blank" rel="noopener">Marquee
                                    Tent</a></li>
                                <li><a href="https://kanopipremiumsse.wasap.click" target="_blank" rel="noopener">Canopy
                                    Arabian</a></li>
                                <li><a href="https://kanopipremiumsse.wasap.click" target="_blank" rel="noopener">Canopy
                                    Piramid</a></li>
                                <li><a href="https://kanopipremiumsse.wasap.click" target="_blank" rel="noopener">Peralatan
                                    Event</a></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h4>Hubungi Kami</h4>
                            <ul>
                                <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg><span>013-967 7269 / 011-6273 7374</span></li>
                                <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg><a href="https://maps.app.goo.gl/sVBhg1bb4fxvoQ6A7" target="_blank"
                                    rel="noopener">Seremban, Negeri Sembilan</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; <span id="currentYear">2024</span> Seri Senawang Event. Hak Cipta Terpelihara.</p>
                    </div>
                </div>
            </footer>

            {/*  External JS  */}


        </>
    );
}
