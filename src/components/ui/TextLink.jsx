import { Icon } from './Icon';

export function TextLink({ href, children, className = 'text-link', icon }) {
  return (
    <a className={className} href={href}>
      {children}
      {icon ? <Icon name={icon} size={16} /> : null}
    </a>
  );
}
