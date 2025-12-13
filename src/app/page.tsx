import Container from "@/components/Container";

export default function HomePage() {
  return (
    <Container className="py-16">
      <h1 className="font-serif text-[56px] leading-[1.05] sm:text-[76px] md:text-[92px]">
        Building Tomorrow&apos;s
        <br />
        Digital Solutions Today
      </h1>

      <p className="mt-10 max-w-xl text-muted text-[20px] leading-relaxed">
        We provide on-demand development services across web, mobile, and
        software systems. Clients can commission us to build apps, implement
        features, develop APIs, create dashboards, integrate services, fix bugs,
        and more—customized to their exact specifications.
      </p>
    </Container>
  );
}
