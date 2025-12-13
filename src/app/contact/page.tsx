import Container from "@/components/Container";

function Input({
  label,
  type = "text",
  placeholder = ""
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 font-sans text-[18px]">{label} *</div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-white px-4 py-3 text-[16px] outline-none focus:border-ink"
      />
    </label>
  );
}

export default function ContactPage() {
  return (
    <Container className="py-14">
      <div className="text-muted uppercase tracking-widest text-sm">
        GET IN TOUCH
      </div>

      <h1 className="mt-6 font-serif text-[64px] leading-[1.05] sm:text-[76px]">
        Contact Us
      </h1>

      <p className="mt-6 text-muted text-[20px]">
        Have questions or want to discuss your project?
      </p>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left column */}
        <div>
          <h2 className="font-serif text-[64px] leading-[1.05]">Let&apos;s Talk</h2>

          <p className="mt-6 max-w-sm text-muted text-[20px] leading-relaxed">
            Whether you have a specific project in mind or just want to explore
            possibilities, our team is here to help.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <div className="text-muted font-sans font-semibold tracking-widest">
                EMAIL
              </div>
              <div className="mt-2 text-[20px] text-muted">
                hello@devcommission.com
              </div>
            </div>

            <div>
              <div className="text-muted font-sans font-semibold tracking-widest">
                PHONE
              </div>
              <div className="mt-2 text-[20px] text-muted">+1 (555) 123-4567</div>
            </div>

            <div>
              <div className="text-muted font-sans font-semibold tracking-widest">
                OFFICE
              </div>
              <div className="mt-2 text-[20px] text-muted">
                123 Tech Street, Silicon Valley,
                <br />
                CA 94025
              </div>
            </div>
          </div>
        </div>

        {/* Right column form */}
        <div className="bg-panel p-8 md:p-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input label="Name" />
            <Input label="Email" type="email" />
          </div>

          <div className="mt-8">
            <Input label="Subject" />
          </div>

          <div className="mt-8">
            <label className="block">
              <div className="mb-2 font-sans text-[18px]">Message *</div>
              <textarea
                className="h-[220px] w-full resize-none rounded-md border border-line bg-white px-4 py-3 text-[16px] outline-none focus:border-ink"
                placeholder=""
              />
            </label>
          </div>

          <button className="mt-10 w-full bg-[#1F1F1F] py-4 text-center text-[22px] font-semibold text-white">
            Send Message
          </button>
        </div>
      </div>
    </Container>
  );
}
