import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { AlertCircle, Camera } from 'lucide-react'

const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
]

const tickets = [
  { id: '001', date: '2023-06-15', description: 'Parking issue', status: 'Open' },
  { id: '002', date: '2023-06-14', description: 'Payment error', status: 'In Progress' },
  { id: '003', date: '2023-06-13', description: 'Access denied', status: 'Closed' },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Overview</h1>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded">Export</button>
      </div>
      
      <div className="grid grid-cols-5 gap-8">
        <Card className="col-span-1 bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <nav>
              <ul className="space-y-2">
                <li className="bg-yellow-500 text-black p-2 rounded">Overview</li>
                <li>Parking</li>
                <li>Tickets</li>
                <li>Reports</li>
                <li>Settings</li>
              </ul>
            </nav>
          </CardContent>
        </Card>
        
        <div className="col-span-4 space-y-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Live Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-600" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Active Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>{ticket.id}</TableCell>
                      <TableCell>{ticket.date}</TableCell>
                      <TableCell>{ticket.description}</TableCell>
                      <TableCell>
                        <Badge variant={ticket.status === 'Open' ? 'destructive' : ticket.status === 'In Progress' ? 'default' : 'secondary'}>
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <button className="bg-yellow-500 text-black px-2 py-1 rounded text-xs">View</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Revenue statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <div className="text-sm text-gray-400">Total revenue</div>
                  <div className="text-2xl font-bold">$25,400</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <div className="text-sm text-gray-400">Avg. transaction value</div>
                  <div className="text-2xl font-bold">$3,590</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">System alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="text-red-500" />
                      <span>Critical: Server overload</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="text-yellow-500" />
                      <span>Warning: Low disk space</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="text-green-500" />
                      <span>Info: System update available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}