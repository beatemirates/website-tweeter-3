import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tweeter Technical Services",
  description:
    "Nationwide mobile technology, telematics, and low-voltage installation support for commercial fleets and specialized transportation assets.",
};

const vehicleTypes = [
  "Passenger vehicles",
  "Commercial vans",
  "School buses",
  "Transit vehicles",
  "Semi-trucks",
  "Heavy-duty equipment",
  "Utility vehicles",
  "Railroad fleet assets",
  "Construction equipment",
  "Specialized vehicles",
];

const organizations = [
  "Sysco Foods",
  "Florida Highway Patrol",
  "Florida Department of Corrections",
  "Sunbelt Rentals",
  "United Rentals",
  "Asplundh Tree Expert Company",
  "AT&T",
  "Verizon",
  "Samsara",
  "Lytx",
  "First Student",
  "BNSF Railway",
  "National Express",
  "Knife River Corporation",
];

export default function AboutPage() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Tweeter Technical Services home">
          <img className="brand-logo" src="/tweeter-technical-logo.png" alt="" />
          <span>TWEETER <span className="brand-dim">TECHNICAL</span></span>
        </a>
        <div className="nav-links">
          <a href="/#services">Services</a>
          <a className="active-link" href="/about">About</a>
          <a className="nav-cta" href="/#onboard">Start a project <span>↗</span></a>
        </div>
      </nav>

      <section className="about-hero">
        <div>
          <p className="eyebrow"><span /> About Tweeter Technical Services</p>
          <h1>Built for fleets.<br /><em>Ready nationwide.</em></h1>
        </div>
        <p className="about-hero-lede">
          Dependable workmanship, accurate installations, thorough
          documentation, and consistent communication—from one location to
          thousands of assets across multiple states.
        </p>
      </section>

      <section className="about-story section">
        <div className="section-kicker">Our company</div>
        <div className="story-copy">
          <p className="large-copy">
            Tweeter Technical Services is a nationwide mobile technology,
            telematics, and low-voltage installation company specializing in
            commercial fleets, school buses, heavy-duty equipment, service
            vehicles, and specialized transportation assets.
          </p>
          <p>
            We provide complete installation, removal, replacement,
            troubleshooting, and quality-control services for fleet technology
            systems, including GPS and vehicle gateways, electronic logging and
            telematics equipment, interior and exterior camera systems,
            AI-enabled dash cameras, multi-channel DVR systems,
            driver-monitoring equipment, blind-spot and backup cameras,
            antennas, sensors, wiring harnesses, and other vehicle-based
            electronic systems.
          </p>
          <p>
            Our technicians have experience working on passenger vehicles,
            commercial vans, school buses, transit vehicles, semi-trucks,
            heavy-duty equipment, utility vehicles, railroad fleet assets,
            construction equipment, and other specialized vehicles.
          </p>
        </div>
      </section>

      <section className="section vehicle-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Where we work</p>
            <h2>Every class of asset.<br /><em>One field standard.</em></h2>
          </div>
          <p>Our field teams bring disciplined installation practices to mixed fleets and demanding operating environments.</p>
        </div>
        <div className="tag-grid">
          {vehicleTypes.map((vehicle, index) => (
            <div key={vehicle}><span>{String(index + 1).padStart(2, "0")}</span>{vehicle}</div>
          ))}
        </div>
      </section>

      <section className="experience-band section">
        <p className="eyebrow"><span /> Project experience</p>
        <h2>Trusted across industries.<br /><em>Proven across the country.</em></h2>
        <p className="experience-copy">
          Over the years, we have supported projects serving major organizations
          and industries across the United States, including transportation,
          construction, telecommunications, government, trucking, and
          fleet-management organizations.
        </p>
        <div className="organization-grid">
          {organizations.map((organization) => <span key={organization}>{organization}</span>)}
        </div>
      </section>

      <section className="scale-section section">
        <div className="scale-callout">
          <span>Nationwide</span>
          <small>Field deployment capability</small>
        </div>
        <div className="scale-copy">
          <p className="eyebrow"><span /> Built to mobilize</p>
          <h2>One site or thousands of assets.<br /><em>We bring the team.</em></h2>
          <p>
            Tweeter Technical Services is capable of mobilizing experienced
            technicians and field leaders throughout the country. Whether a
            project involves a small group of vehicles at one location or
            thousands of assets across multiple states, we provide the
            personnel, technical knowledge, training, documentation, and
            operational support necessary to complete the work safely,
            efficiently, and professionally.
          </p>
          <p>
            Our goal is to provide dependable workmanship, accurate
            installations, thorough documentation, and consistent communication
            while helping our clients successfully deploy and maintain the
            technology that keeps their fleets safe, connected, compliant, and
            operational.
          </p>
          <a className="button button-primary" href="/#onboard">Discuss your project <span>→</span></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="/"><img className="brand-logo" src="/tweeter-technical-logo.png" alt="" /><span>TWEETER <span className="brand-dim">TECHNICAL</span></span></a>
        <p>Integrity built. Diligence proven. Tenacity delivered.</p>
        <p>© 2026 Tweeter Technical Services. All rights reserved.</p>
      </footer>
    </main>
  );
}
