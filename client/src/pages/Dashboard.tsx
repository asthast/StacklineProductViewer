import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchProductData } from '@/store/features/productSlice';
import Sidebar from '@/components/Sidebar';
import SalesChart from '@/components/SalesChart';
import SalesTable from '@/components/SalesTable';
import { Skeleton } from '@/components/ui/skeleton';

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: product, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex">
        <Skeleton className="w-[300px] h-screen" />
        <div className="flex-1 p-8 space-y-8">
          <Skeleton className="w-full h-[400px]" />
          <Skeleton className="w-full h-[400px]" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar product={product} />
      <main className="flex-1 p-8 space-y-8">
        <SalesChart data={product.sales} />
        <SalesTable data={product.sales} />
      </main>
    </div>
  );
}
