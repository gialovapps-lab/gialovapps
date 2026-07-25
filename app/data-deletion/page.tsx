import Link from "next/link";

export const metadata = {
  title: "Data Deletion - Gialova Apps",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletion() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 inline-block"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-8">
        Data Deletion Request / Solicitud de Eliminación de Datos
      </h1>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">English</h2>
          <p>
            Our apps (including Gestix) do not require user accounts. Game data
            such as player names, scores and custom word lists is stored only on
            your device — uninstalling the app permanently deletes it.
          </p>
          <p className="mt-3">
            Advertising-related data (such as your device advertising
            identifier) may be processed by our advertising partner Appodeal.
            To request deletion of this data, or for any other privacy request,
            email us at{" "}
            <a
              href="mailto:info@gialovapps.com?subject=Data%20Deletion%20Request"
              className="text-cyan-400 hover:text-cyan-300"
            >
              info@gialovapps.com
            </a>{" "}
            with the subject &quot;Data Deletion Request&quot;, naming the app
            you use. We will process your request within 30 days. You can also
            reset or delete your advertising identifier at any time from your
            device settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Español</h2>
          <p>
            Nuestras apps (incluida Gestix) no requieren cuentas de usuario.
            Los datos del juego, como nombres de jugadores, puntuaciones y
            listas personalizadas, se guardan solo en tu dispositivo — al
            desinstalar la app se eliminan permanentemente.
          </p>
          <p className="mt-3">
            Los datos relacionados con publicidad (como el identificador
            publicitario de tu dispositivo) pueden ser procesados por nuestro
            socio publicitario Appodeal. Para solicitar su eliminación, o para
            cualquier otra solicitud de privacidad, escríbenos a{" "}
            <a
              href="mailto:info@gialovapps.com?subject=Solicitud%20de%20Eliminacion%20de%20Datos"
              className="text-cyan-400 hover:text-cyan-300"
            >
              info@gialovapps.com
            </a>{" "}
            con el asunto &quot;Solicitud de Eliminación de Datos&quot;,
            indicando qué app usas. Procesaremos tu solicitud en un máximo de
            30 días. También puedes restablecer o eliminar tu identificador
            publicitario en cualquier momento desde los ajustes de tu
            dispositivo.
          </p>
        </section>

        <section>
          <p className="text-gray-400 text-sm">
            See also our{" "}
            <Link
              href="/privacy"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>

      <footer className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Gialova Apps
      </footer>
    </main>
  );
}
