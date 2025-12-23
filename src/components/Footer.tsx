import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b0f] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Sublimundo" className="h-12 w-12 rounded-xl object-cover" />
              <p className="text-xl font-black gradient-text">Sublimundo Textil</p>
            </div>
            <p className="text-gray-400 mt-4 max-w-sm">
              Estampados, sublimación y personalizados con calidad premium.
              Diseños únicos y entregas rápidas.
            </p>
          </div>

          <div>
            <p className="text-white font-black mb-4">Secciones</p>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#inicio">Inicio</a></li>
              <li><a className="hover:text-white transition" href="#nosotros">Nosotros</a></li>
              <li><a className="hover:text-white transition" href="#productos">Productos</a></li>
              <li><a className="hover:text-white transition" href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className="text-white font-black mb-4">Contacto</p>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp: <span className="text-gray-200 font-semibold">+52 1 55 1234 5678</span></li>
              <li>Correo: <span className="text-gray-200 font-semibold">contacto@sublimundo.com</span></li>
              <li>Horario: <span className="text-gray-200 font-semibold">Lun–Sáb 10:00–19:00</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sublimundo Textil. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Hecho con ❤️ y tinta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
