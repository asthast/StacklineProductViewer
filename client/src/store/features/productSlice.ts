import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Array<{
    customer: string;
    review: string;
    score: number;
  }>;
  retailer: string;
  details: string[];
  tags: string[];
  sales: SalesData[];
}

interface ProductState {
  data: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchProductData = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await fetch('/api/product');
    return response.json();
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload[0];
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product data';
      });
  },
});

export default productSlice.reducer;
