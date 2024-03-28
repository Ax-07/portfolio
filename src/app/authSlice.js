import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isConnected: false
  },
  reducers: {
    setIsConnected: (state, action) => {
      state.token = action.payload;
      state.isConnected = true;
    },
    logout: (state) => {
        state.token = null;
        state.isConnected = false;
    }
  },
});

export const { setIsConnected, logout } = authSlice.actions; // equivalent a une methode de class
export default authSlice.reducer;