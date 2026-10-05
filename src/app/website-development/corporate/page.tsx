export const metadata = {
  alternates: { canonical: '/website-development/corporate' },
};

export default function CorporateWebsitePage() {
  return (
    <main className="min-h-screen bg-[#f6fafd]">

      <section className="bg-[#071827] py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-[#38a9f5]">
            Website Development
          </span>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Corporate Website Development
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300">
            Establish a strong corporate presence with a modern,
            professional website built around your organization.
          </p>

        </div>
      </section>

    </main>
  );
}