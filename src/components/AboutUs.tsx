export default function AboutUs() {
  return (
    <section className="container mx-auto px-4 pb-10">
      <div className="card p-8 bg-white rounded-3xl shadow-sm">
        <h3 className="text-3xl font-bold mb-4">¿Quiénes somos?</h3>
        <p className="text-gray-700 leading-relaxed max-w-4xl">
          En <span className="font-semibold">Sublimundo Textil</span> hacemos productos personalizados
          con enfoque en calidad: colores vibrantes, materiales resistentes y acabados limpios.
          Cuéntanos tu idea y lo hacemos realidad ✨
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="font-bold">Calidad</p>
            <p className="text-gray-600 text-sm mt-1">Impresión nítida y materiales premium.</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="font-bold">Personalización</p>
            <p className="text-gray-600 text-sm mt-1">Diseños únicos para cada cliente.</p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="font-bold">Entrega</p>
            <p className="text-gray-600 text-sm mt-1">Envíos a todo México.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
