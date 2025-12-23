export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Personaliza tus productos con{" "}
          <span className="gradient-text">estampados únicos</span>
        </h2>

        <p className="text-lg text-gray-700 mb-8 max-w-xl">
          Camisetas, tazas, gorras y accesorios con sublimación y estampado de alta calidad.
          Envíos a todo México.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="#catalogo"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition"
          >
            Ver catálogo
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-full shadow transition"
          >
            Cotizar ahora
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-2xl" />

          <div className="relative z-10 animate-float">
            <img
              src="/PlayeraGoku.jpg"
              alt="Ejemplo de sublimación"
              className="rounded-[40px] shadow-2xl border-8 border-white w-[340px] md:w-[420px] h-auto object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
