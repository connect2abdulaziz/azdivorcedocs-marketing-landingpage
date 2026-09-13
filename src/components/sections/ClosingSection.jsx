import { PrimaryButton } from '../ui/PrimaryButton';
import { Eyebrow } from '../ui/Eyebrow';

export function ClosingSection({ onOpenDialog }) {
  return (
    <section className="closing reveal">
      <Eyebrow>A CLEARER FIRST STEP</Eyebrow>
      <h2>
        Let’s make the next
        <br />
        chapter <em>feel possible.</em>
      </h2>
      <p>
        Professional support for your paperwork.
        <br />
        More room to focus on your future.
      </p>
      <PrimaryButton onClick={() => onOpenDialog('start')}>Start your divorce</PrimaryButton>
      <span className="closing-location">SERVING ARIZONA</span>
    </section>
  );
}
