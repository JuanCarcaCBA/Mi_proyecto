import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    // La ruta de tu API es http://localhost:3000/api/user
    const res = await fetch('http://localhost:3000/api/user') 
    
    if(!res.ok) throw new Error('Error fetching users')
    return res.json()
})


const usersSlice = createSlice({
name: 'users',
initialState: { data: [], loading: false, error: null },
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchUsers.pending, (state) => { state.loading = true; state.error = null })
.addCase(fetchUsers.fulfilled, (state, action) => { state.loading = false; state.data = action.payload })
.addCase(fetchUsers.rejected, (state, action) => { state.loading = false; state.error = action.error.message })
}
})


export default usersSlice.reducer