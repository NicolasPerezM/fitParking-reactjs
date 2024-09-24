import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('client')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de inicio de sesión
    console.log('Iniciar sesión con:', { email, password, userType })
  }

  return (
    <div className="min-h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <header className="flex justify-between items-center mb-8">
          <div className="text-yellow-400 text-2xl font-bold">FitParking</div>
          <div>
            <Button variant="outline" className="text-yellow-400 border-yellow-400 mr-2">Iniciar sesión</Button>
            <Button className="bg-yellow-400 text-black">Crear cuenta</Button>
          </div>
        </header>

        <main className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-48 mb-4">
            <img
              src="/placeholder.svg?height=192&width=384"
              alt="Estacionamiento iluminado"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-yellow-400 mb-2">Bienvenido a FitParking</h1>
                <p className="text-white">La forma más rápida de parquear</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <RadioGroup defaultValue="client" className="flex justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="client" id="client" 
                  checked={userType === 'client'}
                  onChange={() => setUserType('client')}
                />
                <Label htmlFor="client">Iniciar como cliente</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="admin" 
                  checked={userType === 'admin'}
                  onChange={() => setUserType('admin')}
                />
                <Label htmlFor="admin">Iniciar como admin</Label>
              </div>
            </RadioGroup>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="sr-only">Correo electrónico</Label>
                <Input
                  id="email"
                  placeholder="Correo electrónico"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="password" className="sr-only">Contraseña</Label>
                <Input
                  id="password"
                  placeholder="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-6 bg-yellow-400 text-black">
              Iniciar sesión
            </Button>

            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-yellow-400 hover:underline">
                ¿Olvidó su contraseña? Click aquí
              </a>
            </div>
            <div className="mt-2 text-center">
              <a href="#" className="text-sm text-yellow-400 hover:underline">
                ¿No tiene cuenta con FitParking? Click aquí
              </a>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}