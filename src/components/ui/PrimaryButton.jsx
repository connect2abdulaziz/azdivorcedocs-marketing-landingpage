import { Icon } from './Icon';

export function PrimaryButton({
  children,
  icon,
  variant,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = ['primary-button', variant === 'white' && 'white', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} {...props}>
      {icon ? <Icon name={icon} size={18} /> : null}
      {children}
    </button>
  );
}
