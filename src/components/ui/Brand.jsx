export function Brand({ href = '#main', loading, className = '' }) {
  return (
    <a className={`brand ${className}`.trim()} href={href} aria-label="Legal Divorce Docs home">
      <img src="/assets/logo-transparent.png" alt="LegalDivorceDocs.com" loading={loading} />
    </a>
  );
}
