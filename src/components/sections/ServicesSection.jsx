import { SERVICES } from '../../content';
import { Eyebrow } from '../ui/Eyebrow';
import { IconWell } from '../ui/Icon';

export function ServicesSection() {
  return (
    <section className="services-section section-space" id="services">
      <div className="section-top reveal">
        <div>
          <Eyebrow>OUR SERVICES</Eyebrow>
          <h2>
            The legal details.
            <br />
            <em>Handled with care.</em>
          </h2>
        </div>
        <p>
          Divorce is personal. The paperwork doesn’t have to be overwhelming. Our service brings
          legal support and a simpler process together.
        </p>
      </div>
      <div className="service-cards">
        {SERVICES.map((service) => (
          <article className="service-card reveal" key={service.label}>
            <IconWell name={service.icon} />
            <span className="service-label">{service.label}</span>
            <h3>
              {service.title[0]}
              <br />
              {service.title[1]}
            </h3>
            <p>{service.body}</p>
            <span className="service-tag">{service.tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
