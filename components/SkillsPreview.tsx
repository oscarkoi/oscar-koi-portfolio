import Link from "next/link";

const skillGroups = [
  {
    number: "01",
    category: "DATA",
    title: "Données & Analyse",
    description:
      "Exploiter les données pour comprendre une situation, identifier des informations utiles et contribuer à la prise de décision.",
    skills: [
      "Python",
      "SQL",
      "Analyse de données",
      "Bases de données",
    ],
    icon: "▥",
  },
  {
    number: "02",
    category: "WEB",
    title: "Développement Web",
    description:
      "Concevoir des interfaces et développer des solutions web adaptées aux besoins des utilisateurs.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
    ],
    icon: "</>",
  },
  {
    number: "03",
    category: "DIGITAL",
    title: "Social Media",
    description:
      "Développer une présence digitale cohérente grâce à la stratégie de contenu et à l'animation des communautés.",
    skills: [
      "Community Management",
      "Social Media",
      "Stratégie de contenu",
      "Social Selling",
    ],
    icon: "◉",
  },
];

export default function SkillsPreview() {
  return (
    <section className="relative overflow-hidden bg-[#050d1d] px-6 py-28 lg:px-8">

      {/* Décorations */}
      <div className="pointer-events-none absolute right-[-200px] top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl">

        {/* En-tête */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2563EB]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
                Expertise
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Des compétences au service de
              <span className="text-[#2563EB]"> solutions concrètes.</span>
            </h2>

          </div>

          <Link
            href="/competences"
            className="group inline-flex items-center text-sm font-semibold text-white"
          >
            Explorer toutes mes compétences

            <span className="ml-3 text-[#2563EB] transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>

        </div>


        {/* Cartes */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#020817] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)]"
            >

              {/* Numéro */}
              <div className="absolute right-6 top-6 text-xs font-medium tracking-[0.2em] text-slate-600">
                {group.number}
              </div>

              {/* Icône */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-lg font-bold text-blue-400 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
                {group.icon}
              </div>

              {/* Catégorie */}
              <div className="mt-8 text-xs font-semibold tracking-[0.3em] text-blue-400">
                {group.category}
              </div>

              {/* Titre */}
              <h3 className="mt-2 text-2xl font-bold text-white">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-4 min-h-[80px] text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              {/* Compétences */}
              <div className="mt-7 flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-colors group-hover:border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Ligne décorative */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-500/40 via-blue-500/10 to-transparent" />

              <div className="mt-4 flex items-center justify-between">

                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                  Niveau intermédiaire
                </span>

                <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </div>

            </article>
          ))}

        </div>


        {/* Bandeau */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/[0.08] to-transparent p-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                Une compétence en construction permanente
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Apprendre aujourd'hui. Construire demain.
              </h3>
            </div>

            <Link
              href="/competences"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-blue-500/40 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-500/10"
            >
              Voir le détail →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}