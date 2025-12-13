import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container className="py-14">
      <div className="text-muted uppercase tracking-widest text-sm">
        ABOUT US
      </div>

      <h1 className="mt-6 font-serif text-[56px] leading-[1.05] sm:text-[76px]">
        Expert Development
        <br />
        Team
      </h1>

      <p className="mt-8 max-w-xl text-muted text-[20px] leading-relaxed">
        We&apos;re a team of experienced developers passionate about creating
        innovative digital solutions.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        <div className="h-[520px] w-full bg-[#D9D9D9]" />

        <div>
          <h2 className="font-serif text-[44px] leading-tight">
            Building the
            <br />
            Future, One Line
            <br />
            at a Time
          </h2>

          <p className="mt-6 text-muted text-[20px] leading-relaxed max-w-md">
            With years of combined experience in software development, our team
            has successfully delivered projects for startups and enterprises.
            Our developers are experts in their respective fields, continuously
            learning and adapting to the latest industry trends. From initial
            concept to final deployment, we work closely with clients to ensure
            their vision becomes reality.
          </p>
        </div>
      </div>
    </Container>
  );
}
