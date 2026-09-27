const steps = [
  {
    year: "FORMATION",
    title: "Informatique Décisionnelle",
    text: "Un parcours orienté systèmes d'information, données, analyse et aide à la décision.",
  },
  {
    year: "AUJOURD'HUI",
    title: "Data · Web · Digital",
    text: "Je consolide mes compétences en analyse de données, développement web et stratégie digitale.",
  },
  {
    year: "PROCHAINE ÉTAPE",
    title: "Data & Intelligence Artificielle",
    text: "Approfondir Python, la Data et progressivement les technologies liées à l'Intelligence Artificielle.",
  },
];

export default function JourneyPreview() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-28 lg:px-8">

      <div className="pointer-events-none absolute bottom-0 right-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">

          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#2563EB]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
              Mon évolution
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Un parcours en
            <span className="text-[#2563EB]"> construction permanente.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            Le numérique évolue constamment. Mon approche consiste à
            consolider mes fondamentaux tout en développant progressivement
            de nouvelles compétences.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative mt-16">

          {/* Ligne */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:block" />

          <div className="space-y-10">

            {steps.map((step, index) => (
              <div
                key={step.year}
                className="relative grid gap-6 md:grid-cols-[120px_40px_1fr] md:items-start"
              >

                {/* Année / étape */}
                <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 md:pt-2">
                  {step.year}
                </div>

                {/* Point */}
                <div className="hidden justify-center md:flex">
                  <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/40 bg-[#020817]">
                    <span className="h-2 w-2 rounded-full bg-[#2563EB] shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.04]">

                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <span className="text-xs text-slate-500">
                        0{index + 1}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    <span className="hidden text-2xl text-blue-500/30 sm:block">
                      →
                    </span>

                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}