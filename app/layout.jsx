export const metadata = {
  title: 'Seri Senawang Event | Sewa Kanopi & Khemah Premium Negeri Sembilan',
  description: 'Sewa kanopi, khemah marquee dan peralatan event premium di Seremban & Negeri Sembilan. Setup profesional untuk perkahwinan, kenduri, korporat. Dapatkan sebut harga percuma!',
  openGraph: {
    type: 'website',
    title: 'Seri Senawang Event | Sewa Kanopi & Khemah Premium',
    description: 'Sewa kanopi & khemah premium untuk perkahwinan, kenduri, dan event korporat di Negeri Sembilan.',
    url: 'https://maqhsolutions.github.io/web-canopy-landing/',
    images: ['https://maqhsolutions.github.io/web-canopy-landing/og-image.jpg']
  }
};
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://kanopipremiumsse.wasap.click" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
