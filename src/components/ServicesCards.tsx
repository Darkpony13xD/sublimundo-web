import { Link } from "react-router-dom";
import React from "react";
import { services } from "../data/services";

const iconBySlug: Record<string, string> = {
  "impresion-personalizacion": "🖨️",
  "gran-formato": "📣",
  "pop-corporativo": "🏷️",
};

export default function ServicesCards() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">Servicios</h2>
            <p className="mt-2 text-gray-500">
              Conoce nuestras áreas principales. Da clic en “VER MÁS”.
            </p>
          </div>

          <Link
            to="/servicios"
            className="rounded-xl px-4 py-2 font-semibold border border-gray-200 hover:bg-gray-50 transition"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
            >
              <div className="text-3xl">{iconBySlug[s.slug] ?? "✨"}</div>

              <h3 className="mt-3 text-xl font-black">{s.title}</h3>
              <p className="mt-2 text-gray-500">{s.short}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {s.bullets.slice(0, 3).map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[2px]">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to={`/servicios/${s.slug}`}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold bg-black text-white hover:opacity-90 transition"
                >
                  VER MÁS →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
