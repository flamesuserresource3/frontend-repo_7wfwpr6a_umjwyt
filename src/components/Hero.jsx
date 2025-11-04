import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200 mb-5">
              <Leaf className="h-4 w-4" />
              Nothing ends up in landfills
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              India’s circular fashion hub for donations, artisans and zero-waste
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Trirang connects donors with local Indian artisans to give textiles a second, third, and endless life. Rewear through thrifting, Reuse through upcycling, and fully Recycle responsibly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#donate" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white font-semibold shadow hover:bg-black">
                Donate your clothes <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50">
                How Trirang works
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Transparent flows, fair artisan pay, verified recycling partners.
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-white shadow">
              <div className="absolute inset-0 grid grid-cols-3">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100" />
                <div className="bg-gradient-to-br from-white to-emerald-50" />
                <div className="bg-gradient-to-br from-green-50 to-green-100" />
              </div>
              <div className="relative z-10 h-full w-full p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Circular Flow</p>
                  <h3 className="mt-1 text-2xl font-bold">Donate → Rewear → Reuse → Recycle</h3>
                </div>
                <ul className="grid sm:grid-cols-3 gap-3 text-sm">
                  <li className="rounded-lg bg-white/80 p-3 ring-1 ring-gray-200 shadow-sm">
                    • Quality check & sort
                  </li>
                  <li className="rounded-lg bg-white/80 p-3 ring-1 ring-gray-200 shadow-sm">
                    • Listed for thrift
                  </li>
                  <li className="rounded-lg bg-white/80 p-3 ring-1 ring-gray-200 shadow-sm">
                    • Upcycled by artisan
                  </li>
                  <li className="rounded-lg bg-white/80 p-3 ring-1 ring-gray-200 shadow-sm">
                    • Converted to products
                  </li>
                  <li className="rounded-lg bg-white/80 p-3 ring-1 ring-gray-200 shadow-sm">
                    • Fabric recycled
                  </li>
                  <li className="rounded-lg bg-white/80 p-3 ring-1 ring-gray-200 shadow-sm">
                    • Zero to landfills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
