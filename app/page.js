export default function Home() {
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Your Business';
  const domain = process.env.NEXT_PUBLIC_DOMAIN || '';
  const leadFormUrl = process.env.NEXT_PUBLIC_LEAD_FORM_URL || '#';
  const brandColor = process.env.NEXT_PUBLIC_BRAND_COLOR || '#3B82F6';

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '2rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
          {businessName}
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem', lineHeight: 1.6 }}>
          Welcome to {businessName}. We are launching soon.
        </p>
        <a
          href={leadFormUrl}
          style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: brandColor, color: '#fff', textDecoration: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, transition: 'opacity 0.2s' }}
        >
          Get Started
        </a>
        {domain && (
          <p style={{ marginTop: '3rem', fontSize: '0.875rem', color: '#999' }}>
            {domain}
          </p>
        )}
      </div>
      <footer style={{ position: 'absolute', bottom: '2rem', fontSize: '0.75rem', color: '#ccc' }}>
        Launched by Jarvis
      </footer>
    </main>
  );
}
