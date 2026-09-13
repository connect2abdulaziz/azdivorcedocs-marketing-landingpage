import { QUOTE_DETAILS } from '../../content';
import { Icon } from '../ui/Icon';
import { PrimaryButton } from '../ui/PrimaryButton';
import { Eyebrow } from '../ui/Eyebrow';

export function PricingSection({ onOpenDialog }) {
  return (
    <section className="balance" id="pricing">
      <div className="balance-image">
        <img
          src="/assets/justice-detail.webp"
          alt="Silver justice scales and a prepared document folder"
          loading="lazy"
        />
      </div>
      <div className="balance-copy reveal">
        <Eyebrow>PRICING THAT STARTS WITH YOUR CASE</Eyebrow>
        <h2>
          Know the scope.
          <br />
          <em>Know the cost.</em>
        </h2>
        <p>
          Every situation is different. Ask for a case-specific quote covering document preparation
          and the support you need.
        </p>
        <div className="quote-details">
          {QUOTE_DETAILS.map((detail) => (
            <span key={detail.label}>
              <Icon name={detail.icon} size={14} />
              {detail.label}
            </span>
          ))}
        </div>
        <PrimaryButton variant="white" onClick={() => onOpenDialog('quote')}>
          Ask about pricing
        </PrimaryButton>
      </div>
    </section>
  );
}
