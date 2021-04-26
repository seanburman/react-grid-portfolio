import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        viewProject(state, action) {
            state[0] = action.payload
        },
        clearProject(state) {
            state.pop()
        }
    }
})

export const { viewProject, clearProject } = projectsSlice.actions

export default projectsSlice.reducer