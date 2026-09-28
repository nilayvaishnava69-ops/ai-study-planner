export default function PageContainer({ title, description, children }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            {title}
          </h1>

          <p className="mt-3 text-gray-600">
            {description}
          </p>

          {children}
        </div>
      </section>
    </main>
  );
}