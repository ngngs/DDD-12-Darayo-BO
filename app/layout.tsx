import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link';
import { FiCalendar, FiUsers, FiMapPin, FiBell } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Festibee Dashboard',
  description: 'Admin dashboard for Festibee festival management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-sans bg-gray-100">
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-60 bg-white border-r border-gray-200 flex flex-col py-8 px-4 shadow-sm">
            <div className="mb-10 text-2xl font-bold text-blue-600 tracking-tight">Festibee Dashboard</div>
            <nav className="flex flex-col gap-2">
              <Link href="/festivals" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium">
                <FiCalendar className="text-xl" />
                Manage Festivals
              </Link>
              <Link href="/artists" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium">
                <FiUsers className="text-xl" />
                Manage Artists
              </Link>
              <Link href="/places" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium">
                <FiMapPin className="text-xl" />
                Manage Places
              </Link>
              <Link href="/alarms" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium">
                <FiBell className="text-xl" />
                Alarm Tests
              </Link>
            </nav>
          </aside>
          {/* Main content */}
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  )
} 