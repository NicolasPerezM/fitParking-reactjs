import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar la suscripción
    console.log('Suscripción procesada')
  }

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-yellow-400 text-lg font-semibold mb-4">FitParking</h3>
            <p className="text-sm text-gray-400">
              La solución inteligente para la gestión de estacionamientos. Simplificamos el proceso de parqueo para conductores y administradores.
            </p>
          </div>
          <div>
            <h4 className="text-yellow-400 text-md font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Tarifas</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-400 text-md font-semibold mb-4">Contacto</h4>
            <address className="not-italic">
              <p className="text-sm text-gray-400">123 Calle Principal</p>
              <p className="text-sm text-gray-400">Ciudad, País 12345</p>
              <p className="text-sm text-gray-400 mt-2">Teléfono: (123) 456-7890</p>
              <p className="text-sm text-gray-400">Email: info@fitparking.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-yellow-400 text-md font-semibold mb-4">Suscríbete</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2023 FitParking. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}