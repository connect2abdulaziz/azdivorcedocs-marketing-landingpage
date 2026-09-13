import { Brand } from '../ui/Brand';
import { Icon } from '../ui/Icon';
import { PrimaryButton } from '../ui/PrimaryButton';

export function Header({ navOpen, onToggleNav, onOpenDialog }) {
  return (
    <header className="header">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <button className="login-link" type="button" onClick={() => onOpenDialog('portal')}>
          <Icon name="user" size={16} />
          Login
        </button>
      </nav>
      <PrimaryButton className="header-start" onClick={() => onOpenDialog('start')}>
        Start your divorce
      </PrimaryButton>
      <button
        className="mobile-toggle"
        type="button"
        aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={navOpen}
        aria-controls="mobile-nav"
        onClick={onToggleNav}
      >
        <Icon name={navOpen ? 'close' : 'menu'} size={22} />
      </button>
    </header>
  );
}
