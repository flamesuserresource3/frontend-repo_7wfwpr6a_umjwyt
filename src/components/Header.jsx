import { HandHeart, Shirt, Recycle } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-orange-500 via-white to-green-600 grid place-items-center shadow">
              <Recycle className="h-5 w-5 text-white drop-shadow" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight">Trirang</p>
              <p className="text-[11px] uppercase tracking-widest text-gray-500">Circular Fashion India</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#rewear" className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-2">
              <Shirt className="h-4 w-4" /> R • Rewear
            </a>
            <a href="#reuse" className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-2">
              <HandHeart className="h-4 w-4" /> R • Reuse
            </a>
            <a href="#recycle" className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-2">
              <Recycle className="h-4 w-4" /> R • Recycle
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#donate" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Donate Clothes
            </a>
            <a href="#shop" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 via-saffron-500 to-green-600 px-3 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
              Explore Rewear
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
