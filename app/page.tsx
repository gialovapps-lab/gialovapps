import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <Image
          src="/logo.png"
          alt="Gialova Apps"
          width={280}
          height={158}
          priority
          className="mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Gialova Apps
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12">
          App &amp; Software Development. We build motorcycle telemetry tools
          and mobile games.
        </p>

        {/* App cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl w-full">
          <a
            href="https://www.wayraracing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-cyan-900/50 rounded-2xl p-6 bg-[#0d1524] hover:border-cyan-500/50 transition-colors"
          >
            <Image
              src="/wayra.png"
              alt="Wayra Racing"
              width={756}
              height={178}
              className="h-10 w-auto mx-auto mb-4"
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(0, 212, 255, 0.6)) drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))",
              }}
            />
            <h2 className="text-xl font-semibold mb-2">Moto Telemetry</h2>
            <p className="text-gray-400 text-sm">
              Real-time motorcycle telemetry, data logging, and AI-powered
              analysis for track riders.
            </p>
          </a>
          <div className="border border-cyan-900/50 rounded-2xl p-6 bg-[#0d1524] hover:border-cyan-500/50 transition-colors">
            <Image
              src="/gestix.png"
              alt="Gestix"
              width={827}
              height={414}
              className="h-10 w-auto mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Games</h2>
            <p className="text-gray-400 text-sm">
              Gestix is a team charades party game: act out songs, movies and
              characters without talking. 60 seconds to guess, or the rival
              team steals the point. On iOS and Android.
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.gestix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-4 py-2 rounded-lg border border-cyan-900/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                Google Play
              </a>
              <a
                href="https://apps.apple.com/app/gestix/id6773967776"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-4 py-2 rounded-lg border border-cyan-900/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-6 text-center text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <span>&copy; {new Date().getFullYear()} Gialova Apps</span>
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <a href="mailto:info@gialovapps.com" className="hover:text-gray-300 transition-colors">
            info@gialovapps.com
          </a>
        </div>
      </footer>
    </main>
  );
}
