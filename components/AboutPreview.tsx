import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-28 lg:px-8">

      {/* Lumière décorative */}
      <div className="pointer-events-none absolute left-[-150px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* En-tête */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2563EB]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
                À propos de moi
              </span>
            </div>

            <h2 className="mt-6 max-w-md text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Un profil à la croisée de la
              <span className="text-[#2563EB]"> technologie </span>
              et du
              <span className="text-[#2563EB]"> digital.</span>
            </h2>
          </div>

          {/* Présentation */}
          <div className="max-w-2xl">

            <p className="text-lg leading-8 text-slate-300">
              Je suis <strong className="font-semibold text-white">Oscar KOÏ</strong>,
              informaticien spécialisé en Informatique Décisionnelle.
              Mon parcours m'a conduit à développer des compétences dans
              l'analyse de données, le développement web et le digital.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Ce qui m'intéresse avant tout, c'est de comprendre un besoin,
              analyser les informations disponibles et transformer une idée
              en une solution numérique concrète.
            </p>

            <Link
              href="/a-propos"
              className="group mt-8 inline-flex items-center text-sm font-semibold text-white"
            >
              Découvrir mon parcours

              <span className="ml-3 text-[#2563EB] transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>

          </div>

        </div>


        {/* Formation */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm lg:p-9">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                Formation
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Master en Informatique de Gestion
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Spécialité : Informatique Décisionnelle
              </p>
            </div>

            <div className="border-l border-white/10 pl-6 lg:pl-10">
              <p className="text-sm leading-7 text-slate-400">
                Une formation qui m'a permis de développer une compréhension
                des systèmes d'information, de la donnée et des problématiques
                liées à l'aide à la décision.
              </p>
            </div>

          </div>

        </div>


        {/* Approche */}
        <div className="mt-20">

          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
              Mon approche
            </span>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Comprendre. Analyser. Construire.
            </h3>
          </div>


          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">

            {/* Comprendre */}
            <div className="group bg-[#020817] p-8 transition-colors duration-300 hover:bg-white/[0.04]">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-lg text-blue-400">
                01
              </div>

              <h4 className="text-xl font-bold text-white">
                Comprendre
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Identifier le besoin, le problème et les objectifs avant
                de chercher une solution.
              </p>

            </div>


            {/* Analyser */}
            <div className="group bg-[#020817] p-8 transition-colors duration-300 hover:bg-white/[0.04]">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-lg text-blue-400">
                02
              </div>

              <h4 className="text-xl font-bold text-white">
                Analyser
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Examiner les données, les contraintes et les opportunités
                pour orienter les choix.
              </p>

            </div>


            {/* Construire */}
            <div className="group bg-[#020817] p-8 transition-colors duration-300 hover:bg-white/[0.04]">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-lg text-blue-400">
                03
              </div>

              <h4 className="text-xl font-bold text-white">
                Construire
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Transformer l'analyse en une solution numérique adaptée
                au contexte et aux utilisateurs.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}