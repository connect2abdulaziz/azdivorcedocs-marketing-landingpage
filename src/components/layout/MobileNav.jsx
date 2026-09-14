import { NAV_LINKS } from '../../content';
import { PrimaryButton } from '../ui/PrimaryButton';

export function MobileNav({ open, onClose, onStart, onSignIn }) {
  return (
    <nav id="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} onClick={onClose}>
          {link.label}
        </a>
      ))}
      <button type="button" onClick={onSignIn}>
        Sign In
      </button>
      <PrimaryButton
        onClick={() => {
          onClose();
          onStart();
        }}
      >
        Start My Divorce
      </PrimaryButton>
    </nav>
  );
}
