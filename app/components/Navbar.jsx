import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2 p-4">
        <Link
          href="/"
          className="rounded px-3 py-2 font-semibold hover:bg-gray-100"
        >
          Home
        </Link>

        <Link
          href="/academic-profile"
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          Academic Profile
        </Link>

        <Link
          href="/study-preferences"
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          Study Preferences
        </Link>

        <Link
          href="/ai-planner"
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          AI Tutor & Planner
        </Link>

        <Link
          href="/notifications"
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          Notifications
        </Link>

        <Link
          href="/data-sync"
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          Data & Sync
        </Link>

        <Link
          href="/health"
          className="rounded px-3 py-2 hover:bg-gray-100"
        >
          Health
        </Link>
      </div>
    </nav>
  );
}