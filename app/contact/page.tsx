import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactOptions = [
  {
    number: "01",
    title: "Projet",
    description:
      "Vous avez un projet web, data ou digital et souhaitez en discuter ?",
  },
  {
    number: "02",
    title: "Opportunité",
    description:
      "Vous souhaitez échanger autour d'une opportunité professionnelle ou d'une mission ?",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "Vous souhaitez construire quelque chose ensemble ou explorer une collaboration ?",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020817] pt-20 text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[15%] top-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
            <div className="absolute right-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2563EB]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                  Contact
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Une idée ?
                <span className="block text-[#2563EB]">
                  Construisons-la.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Projet, opportunité professionnelle ou collaboration :
                expliquez-moi ce que vous avez en tête. Chaque échange peut
                être le début de quelque chose de concret.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">
                Pourquoi me contacter ?
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Choisissez votre point de départ.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {contactOptions.map((option) => (
                <div
                  key={option.number}
                  className="group rounded-3xl border border-white/10 bg-slate-950/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.04]"
                >
                  <div className="text-sm font-semibold text-blue-400">
                    {option.number}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {option.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {option.description}
                  </p>

                  <div className="mt-8 h-[1px] w-10 bg-blue-500 transition-all duration-300 group-hover:w-20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM + INFOS */}
        <section className="relative">
          <div className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[120px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">
                Parlons-nous
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Discutons de votre projet.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-slate-400">
                Pas besoin d'avoir toutes les réponses avant de me contacter.
                Présentez simplement votre besoin, votre idée ou votre
                problématique.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Profil
                  </div>
                  <div className="mt-2 text-white">
                    Data · Web · Digital
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Spécialité académique
                  </div>
                  <div className="mt-2 text-white">
                    Informatique Décisionnelle
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Localisation
                  </div>
                  <div className="mt-2 text-white">
                    Bénin
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Nom
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-white/[0.05]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="vous@email.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-white/[0.05]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Sujet
                  </label>

                  <select
                    id="subject"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500/60"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#020817]">
                      Sélectionnez une option
                    </option>
                    <option value="projet" className="bg-[#020817]">
                      Projet
                    </option>
                    <option value="opportunite" className="bg-[#020817]">
                      Opportunité professionnelle
                    </option>
                    <option value="collaboration" className="bg-[#020817]">
                      Collaboration
                    </option>
                    <option value="autre" className="bg-[#020817]">
                      Autre
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Votre message
                  </label>

                  <textarea
                    id="message"
                    rows={7}
                    placeholder="Parlez-moi de votre besoin..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-white/[0.05]"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center rounded-full bg-[#2563EB] px-7 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.4)]"
                >
                  Envoyer le message
                  <span className="ml-3 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Comprendre. Analyser. Construire.
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
              Chaque projet commence par une conversation.
            </h2>

            <Link
              href="/competences"
              className="mt-8 inline-flex rounded-full border border-blue-500/50 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-blue-400 hover:bg-blue-500/10"
            >
              Voir mes compétences
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}