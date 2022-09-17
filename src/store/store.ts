import { createSlice, configureStore } from '@reduxjs/toolkit'

export const register = createSlice({
  name: 'user',
  initialState: {
    authenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.authenticated = true
      state.user = action.payload
    },
    logout: (state) => {
      state.authenticated = false
      state.user = null
    }
  }
})

export const store = configureStore({
  reducer: {
    user: register.reducer

  }
})

