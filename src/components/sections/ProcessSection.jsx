import { PROCESS_STEPS } from '../../content';
import { Eyebrow } from '../ui/Eyebrow';
import { IconWell } from '../ui/Icon';

export function ProcessSection() {
  return (
    <section className="process-section section-space" id="how-it-works">
      <div className="section-top reveal">
        <div>
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2>
            From “where do I start?”
            <br />
            <em>to “I know what’s next.”</em>
          </h2>
        </div>
        <span className="process-caption">
          Clear steps.
          <br />
          One supported start.
        </span>
      </div>
      <div className="process-steps">
        {PROCESS_STEPS.map((step) => (
          <article className="reveal" key={step.title}>
            <IconWell name={step.icon} />
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
