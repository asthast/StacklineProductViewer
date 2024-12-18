import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { format, parseISO } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
}

interface SalesChartProps {
  data: SalesData[];
}

export default function SalesChart({ data }: SalesChartProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="weekEnding"
                tickFormatter={(date) => format(parseISO(date), 'MMM')}
                tick={{ fill: '#666' }}
                axisLine={false}
              />
              <YAxis 
                tick={{ fill: '#666' }}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
                labelFormatter={(date) => format(parseISO(date as string), 'MMM dd, yyyy')}
              />
              <Line
                type="monotone"
                dataKey="retailSales"
                stroke="#40a9ff"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="wholesaleSales"
                stroke="#95a5a6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
