export const metadata = {
  alternates: { canonical: '/website-development/business' },
};

export default function BusinessWebsitePage() {
  return (
    <main className="min-h-screen bg-[#f6fafd]">

      <section className="bg-[#071827] py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-[#38a9f5]">
            Website Development
          </span>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Business Website Development
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300">
            Professional business websites designed to build trust,
            attract customers and grow your online presence.
          </p>

        </div>
      </section>

    </main>
  );
}