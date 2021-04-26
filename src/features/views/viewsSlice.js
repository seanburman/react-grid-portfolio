import { createSlice } from '@reduxjs/toolkit'

const initialState = [{name: 'About'}]

const viewsSlice = createSlice({
    name: 'views',
    initialState,
    reducers: {
        viewChange(state, action) {
            state[0] = action.payload
        }
    }
})

export const { viewChange } = viewsSlice.actions

export default viewsSlice.reducer