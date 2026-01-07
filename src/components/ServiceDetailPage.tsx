import { Link, useParams } from "react-router-dom";

import React from "react";
import { services } from "../data/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14">
        <h1 className="text-2xl font-black">Servicio no encontrado</h1>
        <p className="mt-2 text-gray-500">
          Revisa el enlace o vuelve a la lista de servicios.
        </p>
        <Link className="mt-6 inline-block underline" to="/servicios">
          Volver a servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14">
      <Link to="/servicios" className="text-gray-600 underline">
        ← Volver
      </Link>

      <h1 className="mt-4 text-3xl md:text-4xl font-black">{service.title}</h1>
      <p className="mt-3 text-gray-500">{service.short}</p>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6">
        <h2 className="text-xl font-black">¿Qué incluye?</h2>

        <ul className="mt-4 space-y-2 text-gray-600">
          {service.bullets.map((b, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="mt-[2px]">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {service.note ? (
          <p className="mt-5 text-gray-500">{service.note}</p>
        ) : null}

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/#contacto"
            className="rounded-xl px-4 py-2 font-semibold bg-black text-white hover:opacity-90 transition text-center"
          >
            Cotizar / Contacto
          </Link>

          <Link
            to="/"
            className="rounded-xl px-4 py-2 font-semibold border border-gray-200 hover:bg-gray-50 transition text-center"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
