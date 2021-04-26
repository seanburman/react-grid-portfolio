import store from '../app/store'
import { viewChange } from '../features/views/viewsSlice'

export function changeView(name) {
       store.dispatch(
            viewChange({
                name: name
            })
        )
}