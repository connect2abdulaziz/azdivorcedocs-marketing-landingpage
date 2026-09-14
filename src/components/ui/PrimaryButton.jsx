import { Icon } from './Icon';

export function PrimaryButton({
  children,
  icon,
  variant,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = ['primary-button', variant === 'white' && 'white', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {icon ? <Icon name={icon} size={18} /> : null}
      {children}
    </button>
  );
}
