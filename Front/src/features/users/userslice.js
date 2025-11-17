import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// Ejemplo: se usa fetch contra JSONPlaceholder, se puede cambiar la URL
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users')
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