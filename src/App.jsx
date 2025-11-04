import Header from './components/Header';
import Hero from './components/Hero';
import ThreeRs from './components/ThreeRs';
import ArtisanShowcase from './components/ArtisanShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <ThreeRs />
        <section id="donate" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6 shadow-sm bg-white">
              <h3 className="text-xl font-bold">1. Schedule a pick-up</h3>
              <p className="mt-2 text-gray-600">Select a time and we’ll pick up from your doorstep. Don’t worry about sorting—our team will handle it sustainably.</p>
            </div>
            <div className="rounded-2xl border p-6 shadow-sm bg-white">
              <h3 className="text-xl font-bold">2. Track the journey</h3>
              <p className="mt-2 text-gray-600">See how each item moves through Rewear, Reuse or Recycle. Full transparency on impact and partners.</p>
            </div>
            <div className="rounded-2xl border p-6 shadow-sm bg-white">
              <h3 className="text-xl font-bold">3. Earn impact rewards</h3>
              <p className="mt-2 text-gray-600">Get receipts, badges, and credits you can use to thrift or commission artisan-made products.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-3 text-white font-semibold shadow hover:bg-black">Donate now</a>
            <a href="#shop" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50">Browse thrift</a>
          </div>
        </section>
        <ArtisanShowcase />
      </main>
      <footer className="border-t mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Trirang — Built for a circular India.</p>
            <div className="flex items-center gap-4">
              <a href="#rewear" className="hover:underline">Rewear</a>
              <a href="#reuse" className="hover:underline">Reuse</a>
              <a href="#recycle" className="hover:underline">Recycle</a>
              <a href="#donate" className="hover:underline">Donate</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
