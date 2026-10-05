export const metadata = {
  alternates: { canonical: '/website-development/custom-web-application' },
};

export default function CustomWebApplicationPage() {
  return (
    <main className="min-h-screen bg-[#f6fafd]">

      <section className="bg-[#071827] py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-[#38a9f5]">
            Website Development
          </span>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Custom Web Application Development
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-slate-300">
            Custom web applications designed around your business
            processes, workflows and specific requirements.
          </p>

        </div>
      </section>

    </main>
  );
}