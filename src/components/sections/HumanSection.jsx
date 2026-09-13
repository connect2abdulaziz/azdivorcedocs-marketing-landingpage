import { Eyebrow } from '../ui/Eyebrow';
import { TextLink } from '../ui/TextLink';

export function HumanSection() {
  return (
    <section className="human-section">
      <div className="human-image">
        <img
          src="/assets/campaign-support.webp"
          alt="Illustrative female lawyer listening to a male client in a bright contemporary office"
          loading="lazy"
        />
        <span>REAL SUPPORT FOR AN IMPORTANT TRANSITION</span>
      </div>
      <div className="human-copy reveal">
        <Eyebrow>PEOPLE FIRST. PAPERWORK SECOND.</Eyebrow>
        <h2>
          Technology makes
          <br />
          it simpler.
          <br />
          <em>
            People make
            <br />
            the difference.
          </em>
        </h2>
        <p>
          Our guided process helps collect and organize your information. Lawyer-led preparation
          brings professional attention to the details of your case.
        </p>
        <TextLink href="#how-it-works" icon="chevronDown">
          Meet a simpler process
        </TextLink>
      </div>
    </section>
  );
}
