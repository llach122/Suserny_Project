import { Mail, MapPin, Phone } from "lucide-react"

function About() {
  return (
    <section className="py-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-light mb-6">ARTESANÍA EN CADA DETALLE</h2>
        <p className="text-gray-600 mb-8">
          Desde 1995, nos dedicamos a crear espejos que van más allá de su función básica. 
          Cada pieza es una obra de arte que combina diseño contemporáneo con técnicas artesanales tradicionales.
        </p>
        <div className="flex items-center gap-8">
          <div>
            <p className="text-4xl font-light mb-2">25+</p>
            <p className="text-gray-600">Años de experiencia</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-2">1000+</p>
            <p className="text-gray-600">Proyectos completados</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-2">100%</p>
            <p className="text-gray-600">Clientes satisfechos</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img 
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80" 
          alt="Craftmanship"
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
  </section>
  )
}
export default About