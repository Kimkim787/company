import Container from "@/components/Container";

function ServiceCard({
  title,
  subtitle,
  body
}: {
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <div>
      <div className="h-[210px] w-full bg-[#D9D9D9]" />
      <div className="mt-4 text-muted font-sans font-semibold tracking-wide">
        {title}
      </div>
      <div className="mt-1 font-serif text-[22px]">{subtitle}</div>
      <p className="mt-2 text-muted leading-relaxed">{body}</p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Container className="py-14">
      <div className="text-muted uppercase tracking-widest text-sm">
        OUR EXPERTISE
      </div>

      <h1 className="mt-6 font-serif text-[56px] leading-[1.05] sm:text-[76px]">
        Development Services
        <br />
        We Offer
      </h1>

      <p className="mt-8 max-w-2xl text-muted text-[20px] leading-relaxed">
        From mobile applications to complex backend systems, our team specializes
        in building scalable, efficient, and user-friendly solutions tailored to
        your business needs.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        <ServiceCard
          title="MOBILE DEVELOPMENT"
          subtitle="iOS & Android Apps"
          body="Native and cross-platform mobile applications using Swift, Kotlin, React Native, and Flutter. From concept to App Store deployment."
        />
        <ServiceCard
          title="CLOUD & DEVOPS"
          subtitle="Infrastructure & Deployment"
          body="AWS, Google Cloud, Azure deployment. CI/CD pipelines, containerization, and automated testing for reliable releases."
        />
      </div>
    </Container>
  );
}
