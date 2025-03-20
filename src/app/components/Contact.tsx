import { Mail, MapPin, Phone } from "lucide-react"

interface ContactProps {
  phone: string;
  email: string;
  address: string;
}

function Contact({ phone, email, address }: ContactProps) {
  return (
    <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-light mb-16 text-center">CONTACTO</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <Phone className="w-8 h-8 mb-4" />
          <h3 className="text-xl mb-2">Teléfono</h3>
          <p className="text-gray-600">{phone}</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Mail className="w-8 h-8 mb-4" />
          <h3 className="text-xl mb-2">Email</h3>
          <p className="text-gray-600">{email}</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <MapPin className="w-8 h-8 mb-4" />
          <h3 className="text-xl mb-2">Showroom</h3>
          <p className="text-gray-600">{address}</p>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Contact