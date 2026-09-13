import { Icon } from '../ui/Icon';

export function MobileNav({ open, onClose, onOpenDialog }) {
  return (
    <nav id="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      <a href="#services" onClick={onClose}>
        <Icon name="scale" size={18} />
        Services
      </a>
      <a href="#pricing" onClick={onClose}>
        <Icon name="info" size={18} />
        Pricing
      </a>
      <button type="button" onClick={() => onOpenDialog('portal')}>
        <Icon name="user" size={18} />
        Login
      </button>
      <button type="button" onClick={() => onOpenDialog('start')}>
        <Icon name="document" size={18} />
        Start your divorce
      </button>
    </nav>
  );
}
