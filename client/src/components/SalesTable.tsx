import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { format, parseISO } from 'date-fns';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface SalesTableProps {
  data: SalesData[];
}

type SortField = keyof SalesData;
type SortOrder = 'asc' | 'desc';

export default function SalesTable({ data }: SalesTableProps) {
  const [sortField, setSortField] = useState<SortField>('weekEnding');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return sortOrder === 'asc'
      ? (aValue as number) - (bValue as number)
      : (bValue as number) - (aValue as number);
  });

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <Card>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort('weekEnding')}
              >
                WEEK ENDING
              </TableHead>
              <TableHead 
                className="cursor-pointer text-right"
                onClick={() => handleSort('retailSales')}
              >
                RETAIL SALES
              </TableHead>
              <TableHead 
                className="cursor-pointer text-right"
                onClick={() => handleSort('wholesaleSales')}
              >
                WHOLESALE SALES
              </TableHead>
              <TableHead 
                className="cursor-pointer text-right"
                onClick={() => handleSort('unitsSold')}
              >
                UNITS SOLD
              </TableHead>
              <TableHead 
                className="cursor-pointer text-right"
                onClick={() => handleSort('retailerMargin')}
              >
                RETAILER MARGIN
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow key={row.weekEnding}>
                <TableCell>
                  {format(parseISO(row.weekEnding), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell className="text-right">
                  ${row.retailSales.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ${row.wholesaleSales.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {row.unitsSold.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ${row.retailerMargin.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
