import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        injectModal(state, action) {
            state.push(action.payload)
        },
        clearModal(state) {
            state.pop()
        }
    }
})

export const { injectModal, clearModal } = modalsSlice.actions

export default modalsSlice.reducer