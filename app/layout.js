import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'SMART LINK Business Solutions LTD | Professional Business, Technology & Digital Solutions',
  description: 'SMART LINK Business Solutions LTD delivers professional technology, accounting, virtual assistance, business support, digital marketing, and creative services for startups, SMEs, NGOs, schools, government institutions, and large organizations.',
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
