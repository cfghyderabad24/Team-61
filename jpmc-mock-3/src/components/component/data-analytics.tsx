
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import axios from "axios"
import React, { useEffect } from "react"
export function DataAnalytics() {
  const [data, setData] = React.useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/total-sales-by-product');
        setData(res.data); // Ensure to extract data from the response
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-muted/40 border-b px-4 lg:px-6 flex items-center h-14">
        <a href="#" className="flex items-center gap-2" >
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Dashboard
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Transactions
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Reports
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Settings
          </a>
        </nav>
      </header>
      <main className="flex-1 grid gap-6 p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardDescription>Total Revenue</CardDescription>
              {/* <CardTitle>$2,389,000</CardTitle> */}
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Gross Profit</CardDescription>
              <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Net Income</CardDescription>
              {/* <CardTitle>$986,000</CardTitle> */}
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Cash on Hand</CardDescription>
              {/* <CardTitle>$3,200,000</CardTitle> */}
            </CardHeader>
            <CardContent>
              <PieChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Expense</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Rent</TableCell>
                    <TableCell>$50,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Salaries</TableCell>
                    <TableCell>$750,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Marketing</TableCell>
                    <TableCell>$100,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Utilities</TableCell>
                    <TableCell>$25,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Other</TableCell>
                    <TableCell>$75,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Liabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Liability</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Accounts Payable</TableCell>
                    <TableCell>$150,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Loans</TableCell>
                    <TableCell>$500,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Taxes Payable</TableCell>
                    <TableCell>$75,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Other</TableCell>
                    <TableCell>$25,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Cash</TableCell>
                    <TableCell>$3,200,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Accounts Receivable</TableCell>
                    <TableCell>$1,500,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Inventory</TableCell>
                    <TableCell>$750,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Equipment</TableCell>
                    <TableCell>$1,000,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Other</TableCell>
                    <TableCell>$250,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Equity</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Common Stock</TableCell>
                    <TableCell>$2,000,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Retained Earnings</TableCell>
                    <TableCell>$1,500,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Other</TableCell>
                    <TableCell>$250,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-muted/40 border-t px-4 lg:px-6 py-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Privacy Policy
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Contact
          </a>
        </nav>
      </footer>
    </div>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { "name": 1, "count": 35 },
          { "name": 2, "count": 45 },
          { "name": 3, "count": 82 },
          { "name": 4, "count": 60 },
          { "name": 5, "count": 80 },
          { "name": 6, "count": 75 },
          { "name": 7, "count": 35 },
          { "name": 8, "count": 95 }
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function LineChart(props) {
  const data = [
    { id: 1, totalSales: 35, monthlySales: { Jan: 5, Feb: 10, Mar: 5, Apr: 5, May: 5, Jun: 5 } },
    { id: 2, totalSales: 45, monthlySales: { Jan: 7, Feb: 8, Mar: 10, Apr: 6, May: 8, Jun: 6 } },
    { id: 3, totalSales: 82, monthlySales: { Jan: 12, Feb: 10, Mar: 15, Apr: 13, May: 17, Jun: 15 } },
    { id: 4, totalSales: 60, monthlySales: { Jan: 10, Feb: 12, Mar: 10, Apr: 9, May: 10, Jun: 9 } },
    { id: 5, totalSales: 80, monthlySales: { Jan: 14, Feb: 15, Mar: 13, Apr: 12, May: 13, Jun: 13 } },
    { id: 6, totalSales: 75, monthlySales: { Jan: 12, Feb: 14, Mar: 13, Apr: 12, May: 12, Jun: 12 } },
    { id: 7, totalSales: 35, monthlySales: { Jan: 5, Feb: 5, Mar: 5, Apr: 5, May: 7, Jun: 8 } },
    { id: 8, totalSales: 95, monthlySales: { Jan: 16, Feb: 18, Mar: 17, Apr: 15, May: 14, Jun: 15 } }
  ];
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: 1,
            data: [
              { x: "Jan", y: 50 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: 2,
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcaLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
