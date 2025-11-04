import { Shirt, Recycle, Hammer, RefreshCw } from 'lucide-react';

function Card({ id, icon: Icon, title, subtitle, points, accent }) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className={`rounded-2xl border shadow-sm overflow-hidden bg-white`}>        
        <div className={`h-1 w-full ${accent}`} />
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
            {points.map((p, i) => (
              <li key={i} className="rounded-md bg-gray-50 p-3 ring-1 ring-gray-200">• {p}</li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="#donate" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline">Start here →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ThreeRs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" id="how">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">The 3 R model of Trirang</h2>
          <p className="text-gray-600 mt-2">A simple, transparent path for every garment.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card
          id="rewear"
          icon={Shirt}
          title="R • Rewear (Thrift)"
          subtitle="Quality pieces are cleaned, verified and listed at fair prices."
          points={[
            'Size and quality check by our team',
            'Affordable community marketplace',
            'Earnings support artisans and logistics',
            'Pick-up and delivery options available',
          ]}
          accent="bg-orange-500"
        />

        <Card
          id="reuse"
          icon={Hammer}
          title="R • Reuse (Upcycle)"
          subtitle="Indian artisans transform textiles into quilts, bags, and home decor."
          points={[
            'Ethically made with fair pay',
            'Designs rooted in local crafts',
            'Traceable donor-to-artisan stories',
            'Workshops and custom requests',
          ]}
          accent="bg-amber-500"
        />

        <Card
          id="recycle"
          icon={Recycle}
          title="R • Recycle (Responsible)"
          subtitle="End-of-life fabrics go to certified textile recyclers."
          points={[
            'Material sorting and fiber recovery',
            'Compliant, zero-landfill process',
            'Reports on diverted waste',
            'Partnered with verified facilities',
          ]}
          accent="bg-green-600"
        />
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-green-50 p-6 ring-1 ring-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-600">For donors</p>
            <h3 className="text-xl font-bold mt-1">Simple 3-step donation</h3>
            <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
              <li>Schedule a free doorstep pick-up</li>
              <li>Track where your clothes go</li>
              <li>Get impact receipts and rewards</li>
            </ul>
          </div>
          <a href="#donate" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-3 text-white font-semibold shadow hover:bg-black">
            Donate now <RefreshCw className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
