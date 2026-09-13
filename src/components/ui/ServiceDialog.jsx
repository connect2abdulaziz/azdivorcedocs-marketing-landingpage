import { useEffect, useRef } from 'react';
import { DIALOG_MESSAGES } from '../../content';
import { Icon } from './Icon';
import { PrimaryButton } from './PrimaryButton';
import { Eyebrow } from './Eyebrow';

export function ServiceDialog({ dialogKey, onClose }) {
  const dialogRef = useRef(null);
  const message = dialogKey ? DIALOG_MESSAGES[dialogKey] : null;

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
      <Eyebrow>LEGAL DIVORCE DOCS</Eyebrow>
      <h2 id="dialog-title">{message?.title ?? ''}</h2>
      <p id="dialog-description">{message?.body ?? ''}</p>
      <PrimaryButton className="dialog-done" onClick={onClose}>
        Back to the website
      </PrimaryButton>
    </dialog>
  );
}
