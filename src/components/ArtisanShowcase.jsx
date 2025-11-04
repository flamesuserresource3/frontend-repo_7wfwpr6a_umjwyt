import { MapPin, Star } from 'lucide-react';

const artisans = [
  {
    name: 'Asha Quilts',
    city: 'Jaipur, Rajasthan',
    rating: 4.8,
    tags: ['Kantha', 'Quilts', 'Upcycled'],
    color: 'from-pink-200 to-rose-100',
  },
  {
    name: 'Kalamkari Kraft',
    city: 'Machilipatnam, Andhra Pradesh',
    rating: 4.7,
    tags: ['Bags', 'Home Decor'],
    color: 'from-amber-200 to-orange-100',
  },
  {
    name: 'Dharavi Stitchers',
    city: 'Mumbai, Maharashtra',
    rating: 4.6,
    tags: ['Denim', 'Accessories'],
    color: 'from-blue-200 to-sky-100',
  },
  {
    name: 'Kutch Threads',
    city: 'Bhuj, Gujarat',
    rating: 4.9,
    tags: ['Embroidery', 'Home'],
    color: 'from-emerald-200 to-green-100',
  },
];

function ArtisanCard({ name, city, rating, tags, color }) {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <div className={`h-28 w-full bg-gradient-to-br ${color}`} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-lg">{name}</h4>
          <div className="inline-flex items-center gap-1 text-amber-600 text-sm">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" /> {rating}
          </div>
        </div>
        <div className="mt-1 flex items-center gap-1 text-gray-600 text-sm">
          <MapPin className="h-4 w-4" />
          <span>{city}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 ring-1 ring-gray-200">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <a href="#shop" className="flex-1 rounded-md bg-gray-900 text-white text-sm font-semibold px-3 py-2 text-center hover:bg-black">View Products</a>
          <a href="#collab" className="flex-1 rounded-md border border-gray-300 text-sm font-semibold px-3 py-2 text-center hover:bg-gray-50">Collaborate</a>
        </div>
      </div>
    </div>
  );
}

export default function ArtisanShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" id="shop">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Meet the makers</h2>
          <p className="text-gray-600 mt-2">Local Indian artisans who turn donations into beautiful products.</p>
        </div>
        <a href="#collab" className="hidden sm:inline-flex rounded-md bg-gradient-to-r from-orange-500 to-green-600 px-4 py-2 text-white text-sm font-semibold shadow hover:opacity-95">
          Apply as an artisan
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artisans.map((a) => (
          <ArtisanCard key={a.name} {...a} />
        ))}
      </div>
    </section>
  );
}
