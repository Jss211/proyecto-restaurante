import { UtensilsCrossed } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm">
        <div className="w-14 h-14 bg-red-100 text-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
          <UtensilsCrossed className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-black text-brand-red mt-2">
          ¡Chifa & Ceviche al paso!
        </h1>
        <p className="text-slate-600 mt-2 text-sm">
          Tailwind CSS v4 y React con iconos SVG vectoriales.
        </p>
        <button className="mt-4 w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl shadow transition">
          Ver Carta
        </button>
      </div>
    </div>
  );
}