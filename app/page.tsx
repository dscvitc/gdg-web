import Image from "next/image";
import {
  Bolt,
  Star,
  Favorite,
  Snowflake,
  Handshake,
  Diversity3,
  Public,
  GroupAdd,
  ManageAccounts,
  Trophy,
  Campaign,
  ConnectWithoutContact,
  DesignServices,
  Palette,
  Language,
  Mobile2,
  SportsEsports,
  Analytics,
  Hub,
  Link,
} from "@material-symbols-svg/react/outlined";
const logoAsset = "/assets/gdg-logo.svg";
const markAsset = "/assets/gdg-mark.svg";
const rocketAsset = "/assets/rocket.svg";

const navItems = ["About", "Team", "Departments", "Events"];

const heroStats = [
  { value: "12", label: "departments", tone: "blue" },
  { value: "17", label: "student leads", tone: "red" },
  { value: "400+", label: "members", tone: "yellow" },
  { value: "12+", label: "events a year", tone: "green" },
] as const;

const marqueeItems = [
  { label: "BUILD", icon: Bolt, color: "#8ab4f8" },
  { label: "SHIP", icon: Star, color: "#ff7a6b" },
  { label: "LEARN", icon: Favorite, color: "#ffd45e" },
  { label: "HACK", icon: Snowflake, color: "#6ee7a0" },
  { label: "REPEAT", icon: Bolt, color: "#8ab4f8" },
];

const aboutPrinciples = [
  {
    icon: Handshake,
    title: "learn by doing",
    description: "every session ends with something you actually built.",
    color: "#8ab4f8",
  },
  {
    icon: Diversity3,
    title: "beginner friendly",
    description: "peers and mentors who still remember day one.",
    color: "#ff7a6b",
  },
  {
    icon: Public,
    title: "globally connected",
    description: "part of GDG on Campus chapters worldwide.",
    color: "#6ee7a0",
  },
] as const;

const advisoryBoard = [
  {
    name: "Pranav Prashant Shewale",
    role: "Board Member",
    image: "/board_and_leads/pranav_prashant_shewale.png",
    tone: "blue",
  },
  {
    name: "Ishita Chauhan",
    role: "Board Member",
    image: "/board_and_leads/ishita_chauhan.jpeg",
    tone: "green",
  },
  {
    name: "Sagnik Sen",
    role: "Board Member",
    image: "/board_and_leads/sagnik_sen.jpeg",
    tone: "yellow",
  },
  {
    name: "Anay Patil",
    role: "Board Member",
    image: "/board_and_leads/anay.png",
    tone: "red",
  },
] as const;

const coreBoard = [
  {
    name: "Varun Achary",
    role: "Management Lead",
    image: "/board_and_leads/varun_achary.jpeg",
    tone: "blue",
  },
  {
    name: "Dhyan",
    role: "Management Lead",
    image: "/board_and_leads/dhyan.jpeg",
    tone: "blue",
  },
  {
    name: "Aayush Talukdar",
    role: "CP Lead",
    image: "/board_and_leads/aayush_talukdar.jpeg",
    tone: "red",
  },
  {
    name: "Rahul Chowdhary",
    role: "CP Lead",
    image: "/board_and_leads/rahul.png",
    tone: "red",
  },
  {
    name: "Adarsh B Poduval",
    role: "Outreach Lead",
    image: "/board_and_leads/adarsh_b_poduval.jpeg",
    tone: "blue",
  },
  {
    name: "Sumedh Patange",
    role: "Outreach Lead",
    image: "/board_and_leads/sumedh_patange.jpeg",
    tone: "red",
  },
  {
    name: "Adil O",
    role: "UI/UX Lead",
    image: "/board_and_leads/adil_o.jpeg",
    tone: "yellow",
  },
  {
    name: "Surjyadip Sen",
    role: "Webdev Lead",
    image: "/board_and_leads/surjyadipsen.png",
    tone: "yellow",
  },
  {
    name: "V Srivatsan",
    role: "Cloud & DevOps Lead",
    image: "/board_and_leads/v_srivatsan.jpeg",
    tone: "yellow",
  },
  {
    name: "Hardik Prem",
    role: "App Dev Lead",
    image: "/board_and_leads/hardik_prem.jpeg",
    tone: "blue",
  },
  {
    name: "Kingshuk",
    role: "GameDev Lead",
    image: "/board_and_leads/Kingshuk.jpeg",
    tone: "red",
  },
  {
    name: "Kanha Arjun Jain",
    role: "GameDev Lead",
    image: "/board_and_leads/kanha.png",
    tone: "green",
  },
  {
    name: "Vedanti",
    role: "Publicity Lead",
    image: "/board_and_leads/vedanti.png",
    tone: "yellow",
  },
  {
    name: "Sadhana",
    role: "Creatives Co-Lead",
    image: "/board_and_leads/shadhna.jpeg",
    tone: "green",
  },
  {
    name: "Samriddhi",
    role: "Creatives Lead",
    image: "/board_and_leads/samriddhi.png",
    tone: "green",
  },
  {
    name: "Ananya Harithas",
    role: "Publicity Lead",
    image: "/board_and_leads/ananya_harithas.jpeg",
    tone: "red",
  },
  {
    name: "Srivarshini S",
    role: "Data Science Lead",
    image: "/board_and_leads/srivarshini_s.jpeg",
    tone: "green",
  },
  {
    name: "Aditi Singh",
    role: "Blockchain Lead",
    image: "/board_and_leads/aditi_singh.jpeg",
    tone: "yellow",
  },
] as const;

const heads = [
  {
    name: "V Srivatsan",
    role: "Projects Head",
    image: "/board_and_leads/v_srivatsan.jpeg",
    tone: "red",
  },
  {
    name: "Aditi Singh",
    role: "Technical Head",
    image: "/board_and_leads/aditi_singh.jpeg",
    tone: "yellow",
  },
] as const;

const departments = [
  {
    icon: ManageAccounts,
    tone: "#8ab4f8",
    name: "Management",
    description: "Operations, logistics and the people who make events happen.",
    leads: {
      1: { name: "Varun Achary", role: "Management Lead", image: "/board_and_leads/varun_achary.jpeg" },
      2: { name: "Dhyan", role: "Management Lead", image: "/board_and_leads/dhyan.jpeg" },
    },
  },
  {
    icon: Campaign,
    tone: "#FF7A6B",
    name: "Publicity",
    description: "Our voice online — reels, posts & campaigns.",
    leads: {
      1: { name: "Vedanti", role: "Publicity Lead", image: "/board_and_leads/vedanti.png" },
      2: { name: "Ananya Harithas", role: "Publicity Lead", image: "/board_and_leads/ananya_harithas.jpeg" },
    },
  },
  {
    icon: ConnectWithoutContact,
    tone: "#FFD45E",
    name: "Outreach",
    description: "Partnerships, sponsors & sister communities.",
    leads: {
      1: { name: "Adarsh B Poduval", role: "Outreach Lead", image: "/board_and_leads/adarsh_b_poduval.jpeg" },
      2: { name: "Sumedh Patange", role: "Outreach Lead", image: "/board_and_leads/sumedh_patange.jpeg" },
    },
  },
  {
    icon: DesignServices,
    tone: "#FF7A6B",
    name: "UI / UX",
    description: "Research, wireframes & interfaces people love.",
    leads: {
      1: { name: "Adil O", role: "UI/UX Lead", image: "/board_and_leads/adil_o.jpeg" },
    },
  },
  {
    icon: Palette,
    tone: "#FFD45E",
    name: "Creatives",
    description: "Branding, posters & the visual identity of GDG VITC.",
    leads: {
      1: { name: "Sadhana", role: "Creatives Co-Lead", image: "/board_and_leads/shadhna.jpeg" },
      2: { name: "Samriddhi", role: "Creatives Lead", image: "/board_and_leads/samriddhi.png" },
    },
  },
  {
    icon: Language,
    tone: "#8AB4F8",
    name: "Web Dev",
    description: "Modern frontends, full-stack apps & the open web.",
    leads: {
      1: { name: "Surjyadip Sen", role: "Webdev Lead", image: "/board_and_leads/surjyadipsen.png" },
    },
  },
  {
    icon: Mobile2,
    tone: "#6EE7A0",
    name: "App Dev",
    description: "Android & cross-platform apps with Kotlin & Flutter.",
    leads: {
      1: { name: "Hardik Prem", role: "App Dev Lead", image: "/board_and_leads/hardik_prem.jpeg" },
    },
  },
  {
    icon: SportsEsports,
    tone: "#FF7A6B",
    name: "Game Dev",
    description: "Building games with Unity, Godot & the web.",
    leads: {
      1: { name: "Kingshuk", role: "GameDev Lead", image: "/board_and_leads/Kingshuk.jpeg" },
      2: { name: "Kanha Arjun Jain", role: "GameDev Lead", image: "/board_and_leads/kanha.png" },
    },
  },
  {
    icon: Analytics,
    tone: "#8AB4F8",
    name: "Data Science",
    description: "ML, analytics & making sense of messy data.",
    leads: {
      1: { name: "Srivarshini S", role: "Data Science Lead", image: "/board_and_leads/srivarshini_s.jpeg" },
    },
  },
  {
    icon: Link,
    tone: "#FFD45E",
    name: "Blockchain",
    description: "Web3, smart contracts & decentralized apps.",
    leads: {
      1: { name: "Aditi Singh", role: "Blockchain Lead", image: "/board_and_leads/aditi_singh.jpeg" },
    },
  },
  {
    icon: Link,
    tone: "#FFD45E",
    name: "Cloud & DevOps",
    description: "Everything about backend",
    leads: {
      1: { name: "V Srivatsan", role: "Cloud & DevOps Lead", image: "/board_and_leads/v_srivatsan.jpeg" },
    },
  },
  {
    icon: Trophy,
    tone: "#6EE7A0",
    name: "Competitive Programming",
    description: "DSA, contests & cracking that dream internship.",
    leads: {
      1: { name: "Aayush Talukdar", role: "CP Lead", image: "/board_and_leads/aayush_talukdar.jpeg" },
      2: { name: "Rahul Chowdhary", role: "CP Lead", image: "/board_and_leads/rahul.png" },
    },
  },
] as const;

const events = [
  {
    month: "AUG",
    date: "04",
    name: "GDG Open Day",
    venue: "Nethaji Auditorium",
  },
  {
    month: "AUG",
    date: "28",
    name: "Game Arcade",
    venue: "Kasturba Hall",
  },
  {
    month: "SEP",
    date: "11",
    name: "Web2 + Web3 Hackathon",
    venue: "Nethaji Auditorium",
  },
  {
    month: "SEP",
    date: "18",
    name: "Figma Workshop",
    venue: "Nethaji Auditorium",
  },
  {
    month: "OCT",
    date: "05",
    name: "AI Product Management Summit",
    venue: "Nethaji Auditorium",
  },
  {
    month: "OCT",
    date: "12",
    name: "Flutter Wars",
    venue: "Nethaji Auditorium",
  },
  {
    month: "OCT",
    date: "20",
    name: "Algo Wars",
    venue: "Nethaji Auditorium",
  },
] as const;

const footerLinks = [
  "About the chapter",
  "The people",
  "Departments",
  "Upcoming events",
] as const;

function MaskIcon({
  src,
  color,
  size = 24,
  className = "",
}: {
  src: string;
  color: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`mask-icon ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
      }}
    />
  );
}

function SectionLabel({
  children,
  tone = "yellow",
}: {
  children: string;
  tone?: "yellow" | "green" | "red";
}) {
  return <p className={`section-label section-label-${tone}`}>{children}</p>;
}

function TeamAvatar({
  tone,
  size = "large",
  src,
  alt,
}: {
  tone: "blue" | "red" | "green" | "yellow";
  size?: "large" | "medium" | "small";
  src?: string;
  alt?: string;
}) {
  return (
    <div className={`team-avatar team-avatar-${tone} team-avatar-${size}`}>
      <div className="team-avatar-inner">
        {src ? (
          <Image
            src={src}
            alt={alt || "Team member photo"}
            width={size === "large" ? 122 : size === "medium" ? 82 : 96}
            height={size === "large" ? 122 : size === "medium" ? 82 : 96}
            style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "999px" }}
          />
        ) : (
          <>
            <MaskIcon
              src="/assets/icon-vector-4.svg"
              color="rgba(27, 27, 27, 0.55)"
              size={size === "large" ? 28 : size === "medium" ? 24 : 22}
            />
            <span>Photo</span>
          </>
        )}
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <div className="marquee" aria-label="Build, ship, learn, hack, repeat">
      <div className="marquee-track">
        {[0, 1, 2].map((copy) => (
          <div className="marquee-copy" key={copy} aria-hidden={copy > 0}>
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={item.label}>
                {item.label}
                <item.icon color={item.color} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="content-section about" id="about">
      <div className="about-grid">
        <div>
          <SectionLabel tone="red">// ABOUT THE CHAPTER</SectionLabel>
          <h2>a home for builders on campus.</h2>
          <div className="section-wave wave-red" />
          <p className="body-copy">
            GDG on Campus · VIT Chennai is a student-led community backed by
            Google Developers. We run hands-on workshops, hackathons, and
            speaker sessions, no experience required, just curiosity and a
            slightly reckless will to build.
          </p>
        </div>

        <div className="principles">
          {aboutPrinciples.map((principle) => (
            <div key={principle.title}>
              <principle.icon
                color={principle.color}
                style={{ width: 30, height: 30 }}
              />
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="content-section team" id="team">
      <SectionLabel tone="yellow">// THE PEOPLE</SectionLabel>
      <h2>the crew behind it all.</h2>
      <p className="body-copy intro-copy">
        From the campus organiser to project heads and faculty mentors, the
        people who keep the community moving.
      </p>
      <div className="team-group team-group-top">
        <div className="team-top-grid">

          <div className="team-column team-column-advisors">
            <h3 className="group-title">BOARD MEMBERS</h3>
            <div className="team-advisors-grid">
              {advisoryBoard.map((member) => (
                <div className="person-card person-card-core" key={member.name}>
                  <TeamAvatar tone={member.tone} size="small" src={member.image} alt={member.name} />
                  <strong>{member.name}</strong>
                  <small className={`tone-${member.tone}`}>{member.role}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="team-divider" aria-hidden />

          <div className="team-column team-column-organiser">
            <h3 className="group-title">HEADS</h3>
            <div className="team-heads-grid">
              {heads.map((member) => (
                <div className="person-card person-card-core" key={member.name}>
                  <TeamAvatar tone={member.tone} size="small" src={member.image} alt={member.name} />
                  <strong>{member.name}</strong>
                  <small className={`tone-${member.tone}`}>{member.role}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="team-group">
        <h3 className="group-title group-title-core">
          LEADS
        </h3>
        <div className="team-core-grid">
          {coreBoard.map((member) => (
            <div className="person-card person-card-core" key={member.name}>
              <TeamAvatar tone={member.tone} size="small" src={member.image} alt={member.name} />
              <strong>{member.name}</strong>
              <small className={`tone-${member.tone}`}>{member.role}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Departments() {
  return (
    <section className="departments" id="departments">
      <div className="content-section departments-inner">
        <SectionLabel tone="green">// WHERE THE WORK HAPPENS</SectionLabel>
        <h2>twelve departments.</h2>
        <p className="body-copy intro-copy">
          Every department runs its own workshops, projects and is led by
          students, open to all.
        </p>
        <div className="department-list">
          {departments.map((department, index) => (
            <div
              className="department-block"
              key={`${department.name}-${index}`}
              style={{ "--tone-color": department.tone } as React.CSSProperties}
            >
              <div className="department-container">
                <department.icon color={department.tone} size={"44px"} />
                <div className="department-text-container">
                  <h3>{department.name}</h3>
                </div>
                <div className="department-description">
                  <p>{department.description}</p>
                </div>
              </div>
              <div className="department-big-icon">
                <department.icon
                  color={department.tone}
                  size={"170px"}
                  style={{ zIndex: 0 }}
                />
              </div>
              <div className="department-overlay">
                <h3 style={{ color: department.tone }}>LEAD</h3>
                <div>
                  {Object.entries(department.leads).map(
                    ([key, lead], index) => (
                      <div key={index}>
                        <div
                          style={{
                            height: "62px",
                            width: "62px",
                            borderRadius: "50%",
                            borderColor: department.tone,
                            borderWidth: "2px",
                            borderStyle: "solid",
                            overflow: "hidden",
                          }}
                        >
                          {lead.image ? (
                            <Image
                              src={lead.image}
                              alt={lead.name}
                              width={62}
                              height={62}
                              style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                          ) : null}
                        </div>
                        {lead.name}
                        <br />
                        {lead.role}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="content-section events" id="events">
      <div className="events-heading">
        <div>
          <SectionLabel tone="yellow">// WHAT&apos;S ON</SectionLabel>
          <h2>upcoming events.</h2>
        </div>
        <a href="https://gdg.community.dev/gdg-on-campus-vellore-institute-of-technology-chennai-india/" target="_blank">
          View on GDG Community <span>→</span>
        </a>
      </div>
      <div className="event-list">
        {events.map((event) => (
          <div className="event-row" key={event.name}>
            <div className="event-date">
              <small>{event.month}</small>
              <strong>{event.date}</strong>
            </div>
            <div className="event-main">
              <h3>{event.name}</h3>
              <p>{event.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LookingBack() {
  return (
    <section className="content-section looking-back">
      <div className="look-copy">
        <SectionLabel tone="green">// LOOKING BACK</SectionLabel>
        <h2>Devshouse&apos;26, and everything after.</h2>
        <p className="body-copy">
          Our flagship day brought together 500+ students, 12 speakers and a
          room that stayed full till midnight, one of many moments from a year
          of building together.
        </p>
        <div className="look-stats">
          <span>
            <strong>500+</strong>
            <small>Attendees</small>
          </span>
          <span>
            <strong>30</strong>
            <small>Hackathon teams</small>
          </span>
          <span>
            <strong>12</strong>
            <small>Speakers</small>
          </span>
        </div>
      </div>
      <div className="photo-placeholder">
        <MaskIcon
          src={markAsset}
          color="#ffd45e"
          size={40}
          className="photo-mark"
        />
        <p>DevFest / event photo</p>
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section className="join-section" id="join">
      <div className="join-dots">
        <i />
        <i />
        <i />
        <i />
      </div>
      <h2>ready to build with us?</h2>
      <p>
        Membership open to every VIT Chennai student.
        <br />
        Join, show up, and start shipping things.
      </p>
      <div className="join-actions">
        <a
          className="button button-primary"
          href="https://recruitment.gdgvitc.tech/"
          style={{ backgroundColor: "var(--yellow)" }}
        >
          <span aria-hidden>
            <GroupAdd style={{ width: 20, height: 20 }} />
          </span>
          Become a member
        </a>
        <a className="button button-outline" href="#events">
          Join our next event
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <a className="brand" href="#top">
            <Image
              src={logoAsset}
              alt="GDG on Campus · VIT Chennai"
              width={184}
              height={24}
              priority
            />
            <span>GDG on Campus · VIT Chennai</span>
          </a>
          <p>
            A student developer community at Vellore Institute of Technology,
            Chennai - learning and building with Google technologies.
          </p>
          {/* <div className="socials">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/social-instagram.svg"
                alt=""
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/social-linkedin.svg"
                alt=""
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://x.com/"
              aria-label="X"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/assets/social-x.svg" alt="" width={22} height={22} />
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/social-youtube.svg"
                alt=""
                width={22}
                height={22}
              />
            </a>
          </div> */}
        </div>

        <div>
          <h4>Explore</h4>
          {footerLinks.map((link, index) => (
            <a href={`#${navItems[index].toLowerCase()}`} key={link}>
              {link}
            </a>
          ))}
        </div>

        <div>
          <h4>Get in touch</h4>
          <a href="mailto:gdgvitc@gmail.com">gdgvitc@gmail.com</a>
          <span>VIT Chennai, Kelambakkam</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 GDG on Campus · VIT Chennai.</span>
        <span>design by ui/ux dept. and developed by web dev dept.</span>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top">
          <Image
            src={logoAsset}
            alt="GDG on Campus · VIT Chennai"
            width={300}
            height={27}
            priority
          />
        </a>

        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <a className="button button-join" href="https://recruitment.gdgvitc.tech/">
          <span aria-hidden>⚡</span> Join us
        </a>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-red" />
        <div className="hero-glow hero-glow-green" />
        <div className="hero-blob" />
        <MaskIcon
          src="/assets/sparkle-star.svg"
          color="#ffd45e"
          size={26}
          className="hero-spark hero-spark-yellow"
        />
        <MaskIcon
          src="/assets/sparkle-bolt.svg"
          color="#8ab4f8"
          size={50}
          className="hero-spark hero-spark-blue"
        />
        <MaskIcon
          src="/assets/sparkle-star.svg"
          color="#ff7a6b"
          size={24}
          className="hero-spark hero-spark-red"
        />

        <div className="hero-sticker hero-sticker-left">
          beginner friendly ✳
        </div>
        <div className="hero-sticker hero-sticker-right">12 departments</div>

        <div className="hero-inner">
          <p className="eyebrow">
            <i /> Student Dev Community · backed by Google Developers
          </p>

          <h1 id="hero-title">
            <span>we build </span>
            <span className="headline-blue">weird</span>
            <span>,</span>
            <br />
            <span>wonderful </span>
            <span className="headline-red">things</span>
            <br />
            <span className="together">together</span>
          </h1>

          <p className="hero-copy">
            The home for builders at <strong>VIT Chennai,</strong> twelve
            departments, dozens of student leads, and a year of workshops,
            hackathons and gloriously over-ambitious side projects.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="https://recruitment.gdgvitc.tech/">
              <span aria-hidden>
                <Image
                  src={rocketAsset}
                  alt=""
                  width={20}
                  height={20}
                  className="hero-rocket"
                />
              </span>
              Become a GDG Member
            </a>
            <a className="button button-outline" href="#departments">
              Explore Departments
            </a>
          </div>

          <div className="stats" aria-label="Community stats">
            {heroStats.map((stat) => (
              <div className={`stat stat-${stat.tone}`} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
      <About />
      <Team />
      <Departments />
      <Events />
      <LookingBack />
      <JoinSection />
      <Footer />
    </main>
  );
}
