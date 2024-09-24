import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

export default function CreateAccount() {
  const [fullName, setFullName] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { fullName, idNumber, birthDate, email, password })
  }

  return (
    <div className="min-h-screen bg-black bg-opacity-80 text-white">
      <nav className="bg-gray-900 p-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-yellow-400 font-bold">Inicio</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">opcion1</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">opcion2</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">opcion3</a></li>
        </ul>
      </nav>

      <div className="flex justify-between items-center p-4">
        <button className="text-white bg-blue-600 px-4 py-2 rounded">Logo</button>
        <button className="text-black bg-yellow-400 px-4 py-2 rounded">Iniciar sesión</button>
      </div>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">Crea una nueva cuenta</h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div>
            <Label htmlFor="fullName">Nombre completo</Label>
            <Input
              id="fullName"
              placeholder="Escribe tu nombre completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div>
            <Label htmlFor="idNumber">Número de identificación</Label>
            <Input
              id="idNumber"
              placeholder="Escribe tu # de identificación"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div>
            <Label htmlFor="birthDate">Fecha de nacimiento</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white ${!birthDate && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {birthDate ? format(birthDate, "PPP") : <span>Selecciona una fecha</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-gray-800" align="start">
                <Calendar
                  mode="single"
                  selected={birthDate}
                  onSelect={setBirthDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="Escribe tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <Button type="submit" className="w-full bg-yellow-400 text-black">
            Crear cuenta
          </Button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Al presionar "Crear cuenta" aceptas la política de privacidad y de uso de datos.
        </p>
      </main>
    </div>
  )
}