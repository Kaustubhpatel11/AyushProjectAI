import './globals.css';

export const metadata = {
  title: 'shyphan.ai — AI Sales Advisors That Do More Than Talk',
  description: 'shyphan.ai provides humanoid AI agents for sales, support, and CX. India\'s most human-sounding Voice AI.',
  keywords: 'AI sales, voice AI, humanoid AI, CX automation, India AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>{children}</body>
    </html>
  );
}
