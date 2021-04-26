import { configureStore } from '@reduxjs/toolkit'
import modalsReducer from '../features/modals/modalsSlice'
import viewsReducer from '../features/views/viewsSlice'
import projectsReducer from '../features/projects/projectsSlice'

export default configureStore({
    reducer: {
        views: viewsReducer,
        modals: modalsReducer,
        projects: projectsReducer
    },
})