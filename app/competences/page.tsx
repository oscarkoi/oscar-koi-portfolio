import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const dataSkills = [
  {
    name: "Python",
    description:
      "Manipulation, traitement et analyse de données. Utilisation de Python comme base pour progresser vers la Data et l'IA.",
    tags: ["Python", "Pandas", "NumPy"],
  },
  {
    name: "SQL",
    description:
      "Interrogation et exploitation de bases de données relationnelles pour extraire et analyser les informations utiles.",
    tags: ["SELECT", "JOIN", "GROUP BY", "Agrégations"],
  },
  {
    name: "Analyse de données",
    description:
      "Explorer, nettoyer, transformer et interpréter des données afin d'en tirer des informations pertinentes.",
    tags: ["Exploration", "Nettoyage", "Transformation", "Analyse"],
  },
  {
    name: "Bases de données",
    description:
      "Comprendre, structurer et exploiter les données dans des environnements relationnels.",
    tags: ["Modélisation", "SQL", "Relations", "Données"],
  },
];

const webSkills = [
  {
    name: "HTML & CSS",
    description:
      "Structurer et mettre en forme des interfaces web modernes, accessibles et responsives.",
    tags: ["HTML5", "CSS3", "Responsive"],
  },
  {
    name: "JavaScript",
    description:
      "Créer des interactions et des fonctionnalités dynamiques pour améliorer l'expérience utilisateur.",
    tags: ["JavaScript", "DOM", "Interactions"],
  },
  {
    name: "PHP",
    description:
      "Développer des fonctionnalités côté serveur et connecter les applications aux données.",
    tags: ["PHP", "Backend", "Données"],
  },
];

const digitalSkills = [
  {
    name: "Community Management",
    description:
      "Gérer et animer une communauté autour d'une marque, d'un service ou d'un projet.",
    tags: ["Animation", "Engagement", "Communauté"],
  },
  {
    name: "Social Media",
    description:
      "Construire une présence cohérente sur les réseaux sociaux en fonction des objectifs d'une marque.",
    tags: ["Facebook", "Instagram", "Stratégie"],
  },
  {
    name: "Stratégie de contenu",
    description:
      "Définir des contenus adaptés aux objectifs de visibilité, d'engagement et de conversion.",
    tags: ["Content", "Copywriting", "Planning"],
  },
  {
    name: "Social Selling",
    description:
      "Utiliser les réseaux sociaux comme levier de relation, de prospection et de développement commercial.",
    tags: ["Prospection", "Relation", "Conversion"],
  },
];

function SkillCard({
  name,
  description,
  tags,
}: {
  name: string;
  description: string;
  tags: string[];
}) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-[#020817] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.03]">

      <div className="flex items-start justify-between gap-5">

        <h3 className="text-xl font-bold text-white">
          {name}
        </h3>

        <span className="text-blue-500/40 transition-colors group-hover:text-blue-400">
          ↗
        </span>

      </div>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-300"
          >
            {tag}
          </span>
        ))}

      </div>

    </article>
  );
}

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020817] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-24 pt-40 lg:px-8">

          <div className="pointer-events-none absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="pointer-events-none absolute right-[-150px] top-40 h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl">

            <div className="max-w-4xl">

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-10 bg-[#2563EB]" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
                  Expertise
                </span>

              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

                Des compétences
                <span className="block text-[#2563EB]">
                  concrètes.
                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Je développe des compétences à la croisée de la donnée,
                du développement web et du digital, avec une approche
                orientée vers les besoins réels.
              </p>

            </div>

          </div>

        </section>


        {/* DATA */}
        <section className="border-y border-white/5 bg-[#050d1d] px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>

                <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                  01 · Data
                </span>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Données & Analyse
                </h2>

              </div>

              <p className="max-w-md text-sm leading-6 text-slate-400">
                Transformer des données brutes en informations
                compréhensibles et exploitables.
              </p>

            </div>


            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {dataSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}

            </div>

          </div>

        </section>


        {/* WEB */}
        <section className="px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>

                <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                  02 · Web
                </span>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Développement Web
                </h2>

              </div>

              <p className="max-w-md text-sm leading-6 text-slate-400">
                Concevoir des interfaces et développer des fonctionnalités
                web adaptées aux utilisateurs.
              </p>

            </div>


            <div className="mt-10 grid gap-5 md:grid-cols-3">

              {webSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}

            </div>

          </div>

        </section>


        {/* DIGITAL */}
        <section className="border-y border-white/5 bg-[#050d1d] px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>

                <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                  03 · Digital
                </span>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Digital & Social Media
                </h2>

              </div>

              <p className="max-w-md text-sm leading-6 text-slate-400">
                Développer la présence digitale d'une marque et créer
                une relation durable avec sa communauté.
              </p>

            </div>


            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {digitalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}

            </div>

          </div>

        </section>


        {/* STACK */}
        <section className="px-6 py-28 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Environnement
              </span>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Mon environnement
                <span className="text-[#2563EB]">
                  {" "}technique.
                </span>
              </h2>

            </div>


            <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">

              <div className="grid border-b border-white/10 md:grid-cols-2">

                <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Langages
                  </span>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Python", "SQL", "HTML", "CSS", "JavaScript", "PHP"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-200"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>


                <div className="p-7">

                  <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Data
                  </span>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {["Pandas", "NumPy", "Analyse", "Bases de données"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                        >
                          {item}
                        </span>
                      ),
                    )}

                  </div>

                </div>

              </div>


              <div className="grid md:grid-cols-2">

                <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">

                  <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Web
                  </span>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {["Frontend", "Backend", "Responsive", "Applications Web"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                        >
                          {item}
                        </span>
                      ),
                    )}

                  </div>

                </div>


                <div className="p-7">

                  <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Digital
                  </span>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {[
                      "Community Management",
                      "Social Media",
                      "Content",
                      "Social Selling",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* APPRENTISSAGE */}
        <section className="bg-[#050d1d] px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-[#0b1f3a] to-[#020817] p-8 sm:p-12 lg:p-16">

              <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/15 blur-[120px]" />

              <div className="relative z-10 max-w-3xl">

                <span className="text-xs uppercase tracking-[0.3em] text-blue-300">
                  Apprentissage continu
                </span>

                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                  Mes compétences évoluent
                  <span className="text-blue-400">
                    {" "}avec mes objectifs.
                  </span>
                </h2>

                <p className="mt-6 text-base leading-7 text-slate-300">
                  Je continue à approfondir Python, la Data et les
                  technologies liées à l'Intelligence Artificielle afin
                  de construire progressivement un profil toujours plus
                  complet.
                </p>

                <div className="mt-8">

                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
                  >
                    Échanger avec moi
                    <span className="ml-3">→</span>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}