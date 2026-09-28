import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";


export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020817] text-white">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-24 pt-40 lg:px-8">

          {/* Lumières */}
          <div className="pointer-events-none absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="pointer-events-none absolute right-[-150px] top-40 h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl">

            <div className="max-w-4xl">

              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2563EB]" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
                  À propos de moi
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Derrière les compétences,
                <span className="block text-[#2563EB]">
                  il y a une curiosité.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Comprendre comment les choses fonctionnent,
                trouver des solutions et continuer à apprendre.
              </p>

            </div>

          </div>

        </section>


        {/* PRÉSENTATION */}
        <section className="border-y border-white/5 bg-[#050d1d] px-6 py-24 lg:px-8">

          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Qui suis-je ?
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Oscar KOÏ
              </h2>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">
                Data · Web · Digital
              </p>

            </div>


            <div className="space-y-6 text-base leading-8 text-slate-300">

              <p>
                Je suis <strong className="text-white">Oscar KOÏ</strong>,
                informaticien spécialisé en
                <strong className="text-white">
                  {" "}Informatique Décisionnelle.
                </strong>
              </p>

              <p>
                Mon parcours m'a amené à développer des compétences
                dans plusieurs domaines complémentaires : l'analyse
                de données, les bases de données, le développement web
                et le digital.
              </p>

              <p>
                Ce qui m'intéresse particulièrement, c'est la capacité
                de la technologie à répondre à des problèmes concrets.
                Pour moi, une bonne solution ne commence pas par un
                outil : elle commence par une compréhension claire
                du besoin.
              </p>

              <p>
                J'avance donc avec une approche simple :
                <span className="font-semibold text-blue-400">
                  {" "}comprendre, analyser, concevoir et construire.
                </span>
              </p>

            </div>

          </div>

        </section>


        {/* PARCOURS */}
        <section className="px-6 py-28 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Mon parcours
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Une base en informatique,
                <span className="text-[#2563EB]">
                  {" "}une évolution vers la Data.
                </span>
              </h2>

            </div>


            <div className="mt-14 grid gap-6 md:grid-cols-2">

              {/* Formation */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">

                <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                  Formation
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  Master en Informatique de Gestion
                </h3>

                <p className="mt-2 text-sm text-blue-300">
                  Spécialité : Informatique Décisionnelle
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-400">
                  Une formation qui m'a permis de développer des
                  connaissances en systèmes d'information, bases de
                  données, analyse et aide à la décision.
                </p>

              </div>


              {/* Orientation */}
              <div className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.04] p-8">

                <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                  Aujourd'hui
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  Data · Web · Digital
                </h3>

                <p className="mt-6 text-sm leading-7 text-slate-400">
                  Je consolide mes compétences techniques tout en
                  développant une approche plus large qui combine
                  données, développement web et stratégie digitale.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* MÉTHODE */}
        <section className="bg-[#050d1d] px-6 py-28 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Ma méthode
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Je ne commence pas par la technologie.
                <span className="block text-[#2563EB]">
                  Je commence par le problème.
                </span>
              </h2>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Comprendre",
                  text: "Identifier le besoin, le contexte, les utilisateurs et les objectifs.",
                },
                {
                  number: "02",
                  title: "Analyser",
                  text: "Examiner les données, les contraintes et les différentes possibilités.",
                },
                {
                  number: "03",
                  title: "Construire",
                  text: "Transformer l'analyse en une solution concrète, cohérente et utile.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group rounded-3xl border border-white/10 bg-[#020817] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                >

                  <div className="text-sm font-semibold text-blue-400">
                    {item.number}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* VISION */}
        <section className="px-6 py-28 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-[#0b1f3a] to-[#020817] p-8 sm:p-12 lg:p-16">

              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-blue-500/15 blur-[120px]" />

              <div className="relative z-10 max-w-3xl">

                <span className="text-xs uppercase tracking-[0.3em] text-blue-300">
                  Ma vision
                </span>

                <blockquote className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  « Comprendre aujourd'hui.
                  <span className="text-blue-400">
                    {" "}Construire demain.
                  </span> »
                </blockquote>

                <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300">
                  Je considère l'apprentissage comme une partie
                  permanente de mon parcours. Mon objectif est de
                  continuer à progresser dans la Data, le développement
                  et progressivement l'Intelligence Artificielle.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="px-6 pb-28 lg:px-8">

          <div className="mx-auto max-w-7xl border-t border-white/10 pt-16">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>

                <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                  Et maintenant ?
                </span>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Découvrez ce que je sais faire.
                </h2>

              </div>

              <Link
                href="/competences"
                className="group inline-flex items-center rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-500"
              >
                Explorer mes compétences

                <span className="ml-3 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}