import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ParkingRecord {
  id: string
  licensePlate: string
  entryTime: string
  exitTime: string
  duration: string
  cost: string
}

const mockData: ParkingRecord[] = [
  { id: '1', licensePlate: 'ABC-123', entryTime: '2023-06-15 09:00', exitTime: '2023-06-15 11:30', duration: '2h 30m', cost: '$15.00' },
  { id: '2', licensePlate: 'XYZ-789', entryTime: '2023-06-15 10:15', exitTime: '2023-06-15 14:45', duration: '4h 30m', cost: '$27.00' },
  { id: '3', licensePlate: 'DEF-456', entryTime: '2023-06-15 11:30', exitTime: '2023-06-15 12:30', duration: '1h 0m', cost: '$6.00' },
  { id: '4', licensePlate: 'GHI-789', entryTime: '2023-06-15 13:00', exitTime: '2023-06-15 17:30', duration: '4h 30m', cost: '$27.00' },
  { id: '5', licensePlate: 'JKL-012', entryTime: '2023-06-15 14:45', exitTime: '2023-06-15 16:15', duration: '1h 30m', cost: '$9.00' },
]

export default function ParkingHistoryTable() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const recordsPerPage = 5
  const totalPages = Math.ceil(mockData.length / recordsPerPage)

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const paginatedData = mockData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-yellow-400">
            Historial de Estacionamiento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">Placa</TableHead>
                <TableHead className="text-gray-300">Entrada</TableHead>
                <TableHead className="text-gray-300">Salida</TableHead>
                <TableHead className="text-gray-300">Duración</TableHead>
                <TableHead className="text-gray-300">Costo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.licensePlate}</TableCell>
                  <TableCell>{record.entryTime}</TableCell>
                  <TableCell>{record.exitTime}</TableCell>
                  <TableCell>{record.duration}</TableCell>
                  <TableCell>{record.cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between items-center mt-4">
            <Button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-gray-700 text-white hover:bg-gray-600"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <span className="text-sm text-gray-400">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-gray-700 text-white hover:bg-gray-600"
            >
              Siguiente <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}