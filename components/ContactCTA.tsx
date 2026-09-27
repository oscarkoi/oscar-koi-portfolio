import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 pb-24 pt-10 lg:px-8">

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-[#0b1f3a] via-[#07152b] to-[#020817] px-7 py-16 sm:px-12 lg:px-16">

        {/* Lumières */}
        <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-180px] left-[20%] h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[120px]" />


        <div className="relative z-10 max-w-3xl">

          <div className="flex items-center gap-3">

            <span className="h-[2px] w-10 bg-[#2563EB]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-300">
              Parlons de votre projet
            </span>

          </div>


          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

            Une idée ?

            <span className="block text-blue-400">
              Construisons-la.
            </span>

          </h2>


          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
            Projet web, besoin d'analyse de données ou réflexion autour
            d'une solution digitale ? Échangeons sur votre besoin et
            voyons comment lui donner forme.
          </p>


          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="group inline-flex items-center rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Me contacter

              <span className="ml-3 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/competences"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-blue-400/50 hover:bg-white/5"
            >
              Voir mes compétences
            </Link>

          </div>

        </div>


        {/* Signature */}
        <div className="relative z-10 mt-16 border-t border-white/10 pt-6">

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              OSCAR KOÏ · DATA · WEB · DIGITAL
            </p>

            <p className="text-sm italic text-slate-500">
              Comprendre. Analyser. Construire.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}