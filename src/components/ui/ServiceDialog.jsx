import { useEffect, useRef } from 'react';
import { DIALOG_MESSAGES } from '../../content';
import { Icon } from './Icon';
import { PrimaryButton } from './PrimaryButton';

function summarizeQualification(qualification) {
  if (!qualification) return null;

  const children =
    qualification.children === 'yes' ? 'Children under 18: Yes' : 'Children under 18: No';
  const property =
    qualification.property === 'yes' ? 'Property or debts: Yes' : 'Property or debts: No';
  const help =
    qualification.help === 'guided'
      ? 'Help preference: Fully guided process'
      : 'Help preference: Prepare documents online';

  return [children, property, help];
}

export function ServiceDialog({ dialogKey, qualification, onClose }) {
  const dialogRef = useRef(null);
  const message = dialogKey ? DIALOG_MESSAGES[dialogKey] : null;
  const summary = summarizeQualification(qualification);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (message && !dialog.open) {
      dialog.showModal();
    }

    if (!message && dialog.open) {
      dialog.close();
    }
  }, [message]);

  const handleBackdropClick = (event) => {
    if (event.target !== dialogRef.current) return;

    const box = dialogRef.current.getBoundingClientRect();
    const clickedOutside =
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom;

    if (clickedOutside) onClose();
  };

  return (
    <dialog
      id="service-dialog"
      ref={dialogRef}
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <button className="dialog-close" aria-label="Close dialog" onClick={onClose}>
        <Icon name="close" size={18} />
      </button>
      <p className="dialog-kicker">Legal Divorce Docs</p>
      <h2 id="dialog-title">{message?.title ?? ''}</h2>
      <p id="dialog-description">{message?.body ?? ''}</p>
      {summary ? (
        <ul className="dialog-summary">
          {summary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <PrimaryButton className="dialog-done" onClick={onClose}>
        Back to the website
      </PrimaryButton>
    </dialog>
  );
}
