import { Mail, MapPin, Phone, Send } from "lucide-react";

import React from "react";

type Props = {
  whatsappNumber?: string; // ej: "5215512345678"
};

const Contact: React.FC<Props> = ({ whatsappNumber = "5215512345678" }) => {
  const waLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-3">
            Contáctanos <span className="gradient-text">hoy</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Envíanos tu idea, logo o referencia y te cotizamos rápido ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FORM */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center">
                <Send className="w-6 h-6 text-violet-700" />
              </div>
              <div>
                <p className="text-xl font-black">Mándanos un mensaje</p>
                <p className="text-gray-500 text-sm">Te respondemos por WhatsApp</p>
              </div>
            </div>

            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(waLink, "_blank");
              }}
            >
              <input
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                placeholder="Nombre"
                required
              />
              <input
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                placeholder="WhatsApp"
              />
              <textarea
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                placeholder="¿Qué quieres personalizar? (playera, taza, gorra...)"
                rows={5}
                required
              />

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-black transition shadow-lg"
              >
                <Send className="w-5 h-5" />
                Enviar por WhatsApp
              </button>

              <p className="text-xs text-gray-400 text-center">
                Tip: puedes pegar un link de tu diseño o mandar una foto por WhatsApp 😉
              </p>
            </form>
          </div>

          {/* INFO + MAP */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="grid gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-black">WhatsApp</p>
                  <a className="text-gray-600 hover:text-violet-700 transition" href={waLink} target="_blank" rel="noreferrer">
                    {whatsappNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-black">Correo</p>
                  <p className="text-gray-600">contacto@sublimundo.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-violet-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-violet-700" />
                </div>
                <div>
                  <p className="font-black">Ubicación</p>
                  <p className="text-gray-600">México</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9973601399024!2d-98.98699808981779!3d19.369266981821127!2m3!1f0!2f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3002a0b26e7%3A0x46efd1eae895bd80!2sABOGADOS%20IUSTICIA!5e0!3m2!1ses-419!2smx!4v1765756692802!5m2!1ses-419!2smx"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
