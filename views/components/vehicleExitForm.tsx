import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CarFront, Clock, DollarSign, HourglassIcon } from "lucide-react"

export default function VehicleExitForm() {
  const [licensePlate, setLicensePlate] = useState('')
  const [exitTime, setExitTime] = useState('')
  const [duration, setDuration] = useState('')
  const [cost, setCost] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar la salida del vehículo
    console.log('Vehículo saliendo:', { licensePlate, exitTime, duration, cost })
  }

  const handleLicensePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLicensePlate(e.target.value)
    // Aquí se simularía la búsqueda del vehículo y el cálculo de la duración y el costo
    // Por ahora, solo estableceremos valores de ejemplo
    setDuration('2 horas 30 minutos')
    setCost('$15.00')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Card className="max-w-md mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-yellow-400">
            Salida de Vehículo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="licensePlate" className="text-sm font-medium text-gray-300">
                Placa del Vehículo
              </Label>
              <div className="relative">
                <CarFront className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="licensePlate"
                  value={licensePlate}
                  onChange={handleLicensePlateChange}
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                  placeholder="ABC-123"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="exitTime" className="text-sm font-medium text-gray-300">
                Hora de Salida
              </Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="exitTime"
                  type="time"
                  value={exitTime}
                  onChange={(e) => setExitTime(e.target.value)}
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-medium text-gray-300">
                Duración de Estancia
              </Label>
              <div className="relative">
                <HourglassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="duration"
                  value={duration}
                  readOnly
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cost" className="text-sm font-medium text-gray-300">
                Costo Total
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="cost"
                  value={cost}
                  readOnly
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              Registrar Salida
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}