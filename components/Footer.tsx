import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#010611] px-6 py-10 lg:px-8">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">

        {/* Identité */}
        <div>

          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            OSCAR <span className="text-[#2563EB]">KOÏ</span>
          </Link>

          <p className="mt-2 text-[9px] tracking-[0.35em] text-slate-500">
            DATA · WEB · DIGITAL
          </p>

          <p className="mt-5 max-w-sm text-xs leading-5 text-slate-600">
            Profil hybride en Informatique Décisionnelle,
            développement web et stratégie digitale.
          </p>

        </div>


        {/* Navigation */}
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">

          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Accueil
          </Link>

          <Link
            href="/a-propos"
            className="transition-colors hover:text-white"
          >
            À propos
          </Link>

          <Link
            href="/competences"
            className="transition-colors hover:text-white"
          >
            Compétences
          </Link>

          <Link
            href="/contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </Link>

        </div>

      </div>


      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-slate-600 sm:flex-row">

        <p>
          © 2026 Oscar KOÏ. Tous droits réservés.
        </p>

        <p>
          Comprendre · Analyser · Construire
        </p>

      </div>

    </footer>
  );
}