"use client";

import { FormEvent, useState } from "react";

const services = [
  ["01", "Fleet telematics & GPS", "Installation of GPS, vehicle gateways, ELDs, asset trackers, antennas, sensors, and connected fleet systems."],
  ["02", "Samsara & Lytx systems", "Professional installations, removals, replacements, and migrations for Samsara and Lytx equipment."],
  ["03", "Vehicle camera systems", "Interior, exterior, AI-enabled dash, backup, blind-spot, and driver-monitoring camera installations."],
  ["04", "DVR & surveillance", "Multi-channel DVR systems and integrated vehicle surveillance for commercial and specialized fleets."],
  ["05", "Low-voltage integration", "Cable routing, wiring harnesses, electrical connections, sensors, antennas, and complete system integration."],
  ["06", "Upgrades & migrations", "Equipment upgrades, replacements, de-installations, system migrations, and fleet technology refreshes."],
  ["07", "Diagnostics & repair", "Troubleshooting, repairs, field rework, and practical resolution of vehicle-technology issues."],
  ["08", "Quality control", "Installation inspections, photo documentation, compliance verification, and consistent closeout reporting."],
  ["09", "Technician training", "Field leadership, installation certification support, technical training, and hands-on team development."],
  ["10", "Staging & inventory", "Equipment staging, inventory management, kitting, site coordination, and deployment readiness."],
  ["11", "Nationwide deployment", "Large-scale fleet rollouts, route management, multi-site scheduling, and nationwide project support."],
  ["12", "Removal & replacement", "Clean removal, replacement, recommissioning, and documentation across mixed fleet environments."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Tweeter Technical Services home">
          <img className="brand-logo" src="/tweeter-technical-logo.png" alt="" />
          <span>TWEETER <span className="brand-dim">TECHNICAL</span></span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="/about">About</a>
          <a className="nav-cta" href="#onboard">Start a project <span>↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Nationwide mobile fleet technology</p>
          <h1>Technology installed.<br /><em>Fleets connected.</em></h1>
          <p className="hero-lede">
            Tweeter Technical Services is a nationwide mobile technology,
            telematics, and low-voltage installation company serving commercial
            fleets and specialized transportation assets.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#onboard">Plan your deployment <span>→</span></a>
            <a className="text-link" href="#services">Explore our services <span>↓</span></a>
          </div>
        </div>
        <div className="crest-stage">
          <div className="crest-glow" aria-hidden="true" />
          <img className="hero-logo" src="/tweeter-technical-logo.png" alt="Tweeter Technical Services crest" />
        </div>
      </section>

      <div className="proof-strip" aria-label="Company capabilities">
        <div><strong>USA</strong><span>Nationwide<br />mobilization</span></div>
        <div><strong>2019</strong><span>Established<br />and field-tested</span></div>
        <div><strong>1–1,000s</strong><span>Single-site to<br />multi-state scale</span></div>
        <div><strong>QC</strong><span>Documented<br />and verified</span></div>
      </div>

      <section className="section intro-section">
        <div className="section-kicker">Built for the field</div>
        <div className="intro-copy">
          <p className="eyebrow"><span /> Who we serve</p>
          <h2>Commercial fleets.<br /><em>Specialized assets.</em></h2>
          <p className="large-copy">
            We specialize in commercial fleets, school buses, heavy-duty
            equipment, service vehicles, and specialized transportation assets.
          </p>
          <p>
            We provide complete installation, removal, replacement,
            troubleshooting, and quality-control services for fleet technology
            systems—from GPS and vehicle gateways to AI-enabled cameras,
            multi-channel DVRs, sensors, antennas, and vehicle-based electronics.
          </p>
          <a className="text-link" href="/about">Learn more about our team <span>→</span></a>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Our services</p>
            <h2>From staging to closeout.<br /><em>Fieldwork handled.</em></h2>
          </div>
          <p>Complete installation, removal, troubleshooting, documentation, and project support for vehicle technology programs of every scale.</p>
        </div>
        <div className="service-grid service-grid-expanded">
          {services.map(([number, title, copy]) => (
            <article className="service-card" key={number}>
              <div className="card-top"><span>{number}</span><span className="arrow">↗</span></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="approach-number">01—03</div>
        <div>
          <p className="eyebrow"><span /> How we work</p>
          <h2>Mobilize with purpose.<br /><em>Deliver with proof.</em></h2>
          <div className="steps">
            <div><b>01</b><h3>Mobilize</h3><p>We organize trained technicians, field leaders, equipment, routes, and site requirements around your deployment plan.</p></div>
            <div><b>02</b><h3>Install</h3><p>Our teams complete installations safely and efficiently across passenger vehicles, buses, trucks, equipment, and specialized assets.</p></div>
            <div><b>03</b><h3>Verify</h3><p>We close every project with quality control, accurate photo documentation, compliance checks, and consistent communication.</p></div>
          </div>
        </div>
      </section>

      <section className="onboard section" id="onboard">
        <div className="onboard-copy">
          <p className="eyebrow"><span /> Start a conversation</p>
          <h2>Put experienced field teams <em>on your route.</em></h2>
          <p>Tell us about your fleet, locations, equipment, and timeline. We&apos;ll help shape a deployment plan that fits the work.</p>
          <div className="contact-note">
            <span>↗</span>
            <p><small>Prefer email?</small><br /><a href="mailto:hello@tweetertechnical.com">hello@tweetertechnical.com</a></p>
          </div>
        </div>
        <div className="form-wrap">
          {submitted ? (
            <div className="success" role="status">
              <span>✓</span>
              <h3>Thank you. We&apos;re on it.</h3>
              <p>Your details have been received. A Tweeter Technical advisor will reach out within one business day.</p>
              <button type="button" onClick={() => setSubmitted(false)}>Submit another response</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field full">
                <label htmlFor="name">Client name</label>
                <input id="name" name="name" type="text" placeholder="Your full name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" required />
              </div>
              <div className="field full">
                <label htmlFor="address">Business address</label>
                <input id="address" name="address" type="text" placeholder="Street, city, state, ZIP" autoComplete="street-address" required />
              </div>
              <div className="form-footer full">
                <p>By submitting, you agree to be contacted about your inquiry.</p>
                <button className="button button-primary" type="submit">Send inquiry <span>→</span></button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><img className="brand-logo" src="/tweeter-technical-logo.png" alt="" /><span>TWEETER <span className="brand-dim">TECHNICAL</span></span></a>
        <p>Integrity built. Diligence proven. Tenacity delivered.</p>
        <p>© 2026 Tweeter Technical Services. All rights reserved.</p>
      </footer>
    </main>
  );
}
