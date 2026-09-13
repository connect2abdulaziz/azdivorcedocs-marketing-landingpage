import { Brand } from '../ui/Brand';
import { Icon } from '../ui/Icon';

export function Footer({ onOpenDialog }) {
  const year = new Date().getFullYear();

  return (
    <footer className="professional-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Brand loading="lazy" />
          <p>
            Lawyer-led document preparation.
            <br />
            A clearer path through divorce.
          </p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#services">Our services</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="footer-column">
          <h3>Your next step</h3>
          <button type="button" onClick={() => onOpenDialog('start')}>
            Start your divorce
          </button>
          <button type="button" onClick={() => onOpenDialog('portal')}>
            Login
          </button>
          <button type="button" onClick={() => onOpenDialog('quote')}>
            Pricing inquiry
          </button>
        </div>
        <div className="footer-column footer-note">
          <h3>Built around you</h3>
          <p>
            Clear communication.
            <br />
            Thoughtful preparation.
            <br />
            Professional support.
          </p>
          <span>
            <Icon name="pin" size={12} />
            Arizona, USA
          </span>
        </div>
      </div>
      <div className="footer-legal">
        <span>© {year} Legal Divorce Docs. All rights reserved.</span>
        <p>
          General service information only. Viewing this site does not establish an attorney-client
          relationship. Services and fees are subject to an agreed scope.
        </p>
        <a href="#main">
          Back to top
          <Icon name="chevronUp" size={14} />
        </a>
      </div>
    </footer>
  );
}
