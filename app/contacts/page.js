export default function Contacts() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>

      <p className="mb-2">
        This is the contacts page of my portfolio website.
      </p>

      <p className="mb-4">
        You can reach me at:{" "}
        <a
          className="text-blue-600"
          href="mailto:yourname@example.com?subject=Portfolio%20Inquiry"
        >
          yourname@example.com
        </a>
      </p>
    </section>
  );
}
