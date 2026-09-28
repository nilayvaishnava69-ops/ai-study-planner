export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-white p-10 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            AI Study Planner
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Plan smarter. Study better.
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Organize your academic tasks, manage your study plan,
            and track your progress from one workspace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/ai-planner"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Open AI Planner
            </a>

            <a
              href="/academic-profile"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 hover:bg-gray-100"
            >
              Academic Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}