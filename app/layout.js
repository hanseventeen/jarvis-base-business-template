import './globals.css';

export const metadata = {
  title: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Business',
  description: `Welcome to ${process.env.NEXT_PUBLIC_BUSINESS_NAME || 'our business'}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
