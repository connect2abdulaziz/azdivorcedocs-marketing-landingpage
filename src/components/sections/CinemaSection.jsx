import { ASSURANCE_ITEMS } from '../../content';
import { Icon } from '../ui/Icon';
import { PrimaryButton } from '../ui/PrimaryButton';
import { Eyebrow } from '../ui/Eyebrow';
import { TextLink } from '../ui/TextLink';

export function CinemaSection({ onOpenDialog }) {
  return (
    <section className="cinema" aria-label="Lawyer-led divorce support">
      <div className="cinema-stage">
        <div className="scene scene-one">
          <img
            className="scene-image"
            src="/assets/campaign-justice.webp"
            alt="Sculptural silver justice scales in dramatic light inside a modern courthouse"
            fetchPriority="high"
          />
          <div className="shade" />
          <div className="scene-copy">
            <Eyebrow>LAWYER-LED DIVORCE SUPPORT · ARIZONA</Eyebrow>
            <h1>
              Your divorce.
              <br />
              <em>Made clearer.</em>
            </h1>
            <p>
              We prepare your documents and help organize your case.
              <br />
              You get clear guidance on what happens next.
            </p>
            <div className="hero-actions">
              <PrimaryButton variant="white" onClick={() => onOpenDialog('start')}>
                Start your divorce
              </PrimaryButton>
              <TextLink className="hero-link" href="#how-it-works" icon="chevronDown">
                See how it works
              </TextLink>
            </div>
            <div className="hero-assurance">
              {ASSURANCE_ITEMS.map((item) => (
                <span key={item.label}>
                  <Icon name={item.icon} size={14} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <span className="frame-caption">PROFESSIONAL SUPPORT. A MORE HUMAN PROCESS.</span>
        </div>
        <div className="scene scene-two">
          <img
            className="scene-image"
            src="/assets/campaign-new-chapter.webp"
            alt="A man and woman calmly taking separate paths through a sunlit courthouse colonnade"
          />
          <div className="shade" />
          <div className="scene-copy">
            <Eyebrow>YOU DON&apos;T HAVE TO KNOW WHERE TO START</Eyebrow>
            <h2>
              A new chapter.
              <br />
              <em>With support.</em>
            </h2>
            <p>
              From the first details to the paperwork ahead,
              <br />
              we help you understand the process.
            </p>
          </div>
          <span className="frame-caption">YOUR LIFE BEYOND THE PAPERWORK</span>
        </div>
        <div className="cinema-bottom">
          <span className="scene-dots" data-scene="1" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="scroll-invite">
            Scroll to discover
            <Icon name="chevronDown" size={16} />
          </span>
          <span className="location">LEGAL DIVORCE DOCS · ARIZONA</span>
        </div>
        <div className="scroll-track">
          <i />
        </div>
      </div>
    </section>
  );
}
