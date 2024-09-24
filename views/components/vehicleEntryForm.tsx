import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CarFront, Clock } from "lucide-react"

export default function VehicleEntryForm() {
  const [licensePlate, setLicensePlate] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [entryTime, setEntryTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el ingreso del vehículo
    console.log('Vehículo ingresado:', { licensePlate, vehicleType, entryTime })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Card className="max-w-md mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-yellow-400">
            Ingreso de Vehículo
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
                  onChange={(e) => setLicensePlate(e.target.value)}
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                  placeholder="ABC-123"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicleType" className="text-sm font-medium text-gray-300">
                Tipo de Vehículo
              </Label>
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Seleccione el tipo de vehículo" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600 text-white">
                  <SelectItem value="car">Automóvil</SelectItem>
                  <SelectItem value="motorcycle">Motocicleta</SelectItem>
                  <SelectItem value="truck">Camión</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="entryTime" className="text-sm font-medium text-gray-300">
                Hora de Entrada
              </Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="entryTime"
                  type="time"
                  value={entryTime}
                  onChange={(e) => setEntryTime(e.target.value)}
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              Registrar Ingreso
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}