import { Link } from "react-router";

export const Imprint = () => (
  <main className="mx-auto flex w-[min(calc(100%-2rem),768px)] flex-col gap-7">
    <h1 className="mt-12 text-4xl font-bold tracking-tighter">Impressum</h1>
    <section className="flex flex-col space-y-4">
      <p>
        <strong>Angaben gemäß § 5 TMG</strong>
        <br />
        Kian Lütke
        <br />
        Kiesgubenstraße 26
        <br />
        26123 Oldenburg
        <br />
        Deutschland
      </p>
      <p>
        <strong>Kontakt:</strong>
        <br />
        E-Mail: kianluetke@gmail.com
      </p>
      <p>
        <strong>Umsatzsteuer-ID:</strong>
        <br />
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE364645808
      </p>
      <p>
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
        <br />
        Kian Lütke, Anschrift wie oben
      </p>
      <p>Keine Eintragung im Handelsregister.</p>
      <p>
        <strong>Datenschutz-Hinweis:</strong>
        <br />
        Diese Website nutzt Cloudflare Web Analytics, um Zugriffe
        datenschutzfreundlich zu analysieren. Dabei werden keine Cookies gesetzt
        und es erfolgt keine Speicherung personenbezogener Daten über die Dauer
        der Sitzung hinaus. Anbieter ist Cloudflare Inc., 101 Townsend St, San
        Francisco, CA 94107, USA.
      </p>
      <Link to={"/"} className="btn btn-primary btn-xl mx-auto mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
        </svg>{" "}
        Take me back.
      </Link>
    </section>
  </main>
);
