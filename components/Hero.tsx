import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817] pt-20">

      {/* Lumières d'ambiance */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[35%] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[500px] bg-blue-500/5 blur-[120px]" />

      </div>

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">

        {/* ==================== GAUCHE ==================== */}

        <div className="relative z-20">

          {/* Label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#2563EB]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Des idées aux résultats
            </span>
          </div>

          {/* Titre */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.3rem]">

            J’allie analyse,

            <span className="block text-[#2563EB]">
              technologie et créativité
            </span>

            <span className="block">
              pour construire
            </span>

            <span className="block">
              un impact réel.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">

            Profil hybride en Informatique Décisionnelle,
            développement web et stratégie digitale.
            Je combine analyse, technologie et créativité
            pour concevoir des solutions numériques
            concrètes, utiles et durables.

          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/competences"
              className="group inline-flex items-center rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Découvrir mon univers

              <span className="ml-3 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/a-propos"
              className="inline-flex items-center rounded-full border border-blue-500/60 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10"
            >
              Voir mon parcours
            </Link>

          </div>

          {/* Domaines */}
          <div className="mt-14 grid max-w-xl grid-cols-3 gap-5">

            <div>
              <div className="mb-2 text-xl text-[#2563EB]">▥</div>

              <h3 className="text-sm font-bold text-white">
                DATA
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Comprendre pour décider
              </p>
            </div>

            <div>
              <div className="mb-2 text-xl text-[#2563EB]">
                &lt;/&gt;
              </div>

              <h3 className="text-sm font-bold text-white">
                WEB
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Développer pour bâtir
              </p>
            </div>

            <div>
              <div className="mb-2 text-xl text-[#2563EB]">
                ◉
              </div>

              <h3 className="text-sm font-bold text-white">
                DIGITAL
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Stratégie pour impacter
              </p>
            </div>

          </div>

        </div>


        {/* ==================== DROITE ==================== */}

        <div className="relative flex min-h-[620px] items-center justify-center">

          {/* Halo derrière la photo */}
          <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="absolute right-0 top-[8%] h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[100px]" />


          {/* Cadre lumineux */}
          <div className="absolute right-[8%] top-[12%] h-[430px] w-[340px] rounded-[30px] border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm" />


          {/* Photo */}
          <div className="relative z-10 h-[560px] w-[420px] overflow-hidden rounded-[35px]">

            <Image
              src="/CV/images/oscar-koi.png"
              alt="Oscar KOÏ"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Dégradé */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

            {/* Lumière bleue */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-fuchsia-500/10" />

          </div>


          {/* Carte citation */}
          <div className="absolute left-0 top-[16%] z-20 w-52 rounded-2xl border border-blue-400/20 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-xl">

            <div className="mb-3 text-3xl text-[#2563EB]">
              “
            </div>

            <p className="text-sm italic leading-6 text-slate-200">
              Les bonnes décisions naissent
              de meilleures données.
            </p>

            <div className="mt-4 h-[2px] w-10 bg-[#2563EB]" />

          </div>


          {/* Carte outils */}
          <div className="absolute bottom-[13%] left-[3%] z-20 w-52 rounded-2xl border border-blue-400/20 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl">

            <div className="mb-4 text-sm font-semibold text-white">
              Mes outils
            </div>

            <div className="grid grid-cols-3 gap-2">

              {["PY", "SQL", "JS", "HTML", "CSS", "PHP"].map((tool) => (
                <div
                  key={tool}
                  className="flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold text-blue-300"
                >
                  {tool}
                </div>
              ))}

            </div>

            <div className="mt-4 text-[9px] tracking-[0.2em] text-slate-500">
              APPRENDRE · CRÉER · ÉVOLUER
            </div>

          </div>


          {/* Carte disponibilité */}
          <div className="absolute bottom-[4%] right-[-2%] z-20 w-64 rounded-2xl border border-fuchsia-400/20 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl">

            <div className="flex items-center gap-2 text-sm font-medium text-white">

              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

              Disponible pour de nouveaux projets

            </div>

            <div className="mt-3 text-xs text-slate-400">
              Data · Web · Digital
            </div>

          </div>

        </div>

      </div>


      {/* Barre inférieure */}
      <div className="relative z-20 border-t border-white/5 bg-black/20">

        <div className="mx-auto grid max-w-7xl grid-cols-3 px-6 py-6 lg:px-8">

          <div className="border-r border-white/10">
            <div className="text-xs font-bold tracking-[0.2em] text-white">
              COMPRENDRE
            </div>

            <div className="mt-1 text-xs text-slate-500">
              Identifier les enjeux
            </div>
          </div>

          <div className="border-r border-white/10 pl-6">
            <div className="text-xs font-bold tracking-[0.2em] text-white">
              ANALYSER
            </div>

            <div className="mt-1 text-xs text-slate-500">
              Transformer les données
            </div>
          </div>

          <div className="pl-6">
            <div className="text-xs font-bold tracking-[0.2em] text-white">
              CONSTRUIRE
            </div>

            <div className="mt-1 text-xs text-slate-500">
              Créer des solutions
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}