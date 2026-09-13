import { RIBBON_ITEMS } from '../../content';
import { Icon } from '../ui/Icon';

export function ServiceRibbon() {
  return (
    <div className="service-ribbon">
      {RIBBON_ITEMS.map((item) => (
        <span key={item.label}>
          <Icon name={item.icon} size={15} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
