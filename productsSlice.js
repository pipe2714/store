import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulent', image: 'aloe-vera.jpg' },
    { id: 2, name: 'Fiddle Leaf Fig', price: 20, category: 'Indoor', image: 'fiddle-leaf-fig.jpg' },
    // Add more products here
  ],
  reducers: {},
});

export default productsSlice.reducer;
