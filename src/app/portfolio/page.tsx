import Container from "@/components/Container";

const stats = [
  { label: "PROJECTS COMPLETED", value: "150+" },
  { label: "SATISFIED CLIENTS", value: "50+" },
  { label: "YEARS OF EXPERIENCE", value: "10+" }
];

const skills = [
  "JavaScript",
  "React",
  "Python",
  "Node.js",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "REST API",
  "Git",
  "AWS",
  "CI/CD"
];

const projects = [
  {
    type: "WEB APPLICATION",
    title: "E-Commerce Platform",
    desc:
      "Built a full-featured e-commerce platform handling 100k+ monthly transactions. Implemented real-time inventory management, payment processing, and an analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    type: "MOBILE APP",
    title: "Fitness Tracking App",
    desc:
      "Developed cross-platform mobile application with real-time workout tracking, social features, and wearable integration. Launched on iOS and Android app stores.",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    type: "WEB APPLICATION",
    title: "E-Commerce Platform",
    desc:
      "Built a full-featured e-commerce platform handling 100k+ monthly transactions. Implemented real-time inventory management, payment processing, and an analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    type: "MOBILE APP",
    title: "Fitness Tracking App",
    desc:
      "Developed cross-platform mobile application with real-time workout tracking, social features, and wearable integration. Launched on iOS and Android app stores.",
    tags: ["React", "Node.js", "PostgreSQL"]
  }
];

function Divider() {
  return <div className="my-10 h-px w-full bg-line" />;
}

export default function PortfolioPage() {
  return (
    <Container className="py-12">
      {/* Top profile block */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[320px_1fr] md:items-start">
        <div className="flex justify-center md:block">
          <div className="h-[260px] w-[260px] rounded-full bg-[#D9D9D9]" />
        </div>

        <div>
          <div className="font-serif text-[44px] leading-tight">John Doe</div>
          <div className="mt-2 text-[22px] font-semibold text-blue-600">
            Full-Stack Developer &amp; Technical
            <br />
            Architect
          </div>

          <p className="mt-6 max-w-2xl text-muted text-[18px] leading-relaxed">
            With over 10 years of experience building scalable web and mobile
            applications, I specialize in modern JavaScript frameworks, cloud
            architecture, and leading high-performance development teams.
            Passionate about clean code, user experience, and innovative
            problem-solving.
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-muted font-sans font-semibold tracking-wide">
              {s.label}
            </div>
            <div className="mt-2 text-[22px] font-semibold">{s.value}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Skills */}
      <div>
        <div className="font-serif text-[28px]">Technical Skills</div>
        <div className="mt-6 h-px w-full bg-line" />

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((sk) => (
            <div
              key={sk}
              className="flex items-center justify-center rounded-md border border-line bg-white px-4 py-4 text-center text-[14px] text-muted"
            >
              {sk}
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Projects */}
      <div>
        <div className="font-serif text-[28px]">Featured Projects</div>
        <div className="mt-6 h-px w-full bg-line" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((p, idx) => (
            <div key={idx} className="border border-line bg-white p-8">
              <div className="text-blue-600 font-sans font-semibold text-[12px] tracking-widest">
                {p.type}
              </div>
              <div className="mt-2 font-serif text-[24px]">{p.title}</div>
              <p className="mt-4 text-muted leading-relaxed">{p.desc}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-4 py-2 text-[13px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
