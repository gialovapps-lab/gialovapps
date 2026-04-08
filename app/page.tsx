import Image from "next/image";
import Link from "next/link";

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
          <div className="border border-cyan-900/50 rounded-2xl p-6 bg-[#0d1524] hover:border-cyan-500/50 transition-colors">
            <div className="text-3xl mb-3">🏍️</div>
            <h2 className="text-xl font-semibold mb-2">Moto Telemetry</h2>
            <p className="text-gray-400 text-sm">
              Real-time motorcycle telemetry, data logging, and AI-powered
              analysis for track riders.
            </p>
          </div>
          <div className="border border-cyan-900/50 rounded-2xl p-6 bg-[#0d1524] hover:border-cyan-500/50 transition-colors">
            <div className="text-3xl mb-3">🎮</div>
            <h2 className="text-xl font-semibold mb-2">Games</h2>
            <p className="text-gray-400 text-sm">
              Fun and engaging mobile games. More titles coming soon.
            </p>
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
