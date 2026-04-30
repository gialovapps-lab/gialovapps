import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Gialova Apps",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 inline-block"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-400 mb-6 text-sm">
        Last updated: April 7, 2026
      </p>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Introduction
          </h2>
          <p>
            Gialova Apps (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
            operates mobile applications available on the Google Play Store.
            This Privacy Policy explains how we collect, use, and protect your
            information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. Information We Collect
          </h2>
          <p>Our apps may collect the following types of information:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
            <li>
              <strong>Device sensors</strong> (accelerometer, gyroscope, GPS) —
              used locally for telemetry features
            </li>
            <li>
              <strong>Anonymous usage analytics</strong> — to improve app
              performance and user experience
            </li>
            <li>
              <strong>Crash reports</strong> — to identify and fix bugs
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. How We Use Your Information
          </h2>
          <p>We use collected information to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
            <li>Provide and improve our app features</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Fix bugs and improve stability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Data Sharing
          </h2>
          <p>
            We do not sell, trade, or share your personal information with third
            parties, except as required by law or to provide core app
            functionality through trusted service providers (e.g., analytics,
            crash reporting).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your
            information. Telemetry data is processed locally on your device
            whenever possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Children&apos;s Privacy
          </h2>
          <p>
            Our apps are not directed to children under 13. We do not knowingly
            collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, contact us at:{" "}
            <a
              href="mailto:info@gialovapps.com"
              className="text-cyan-400 hover:text-cyan-300"
            >
              info@gialovapps.com
            </a>
          </p>
        </section>
      </div>

      <footer className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Gialova Apps
      </footer>
    </main>
  );
}
