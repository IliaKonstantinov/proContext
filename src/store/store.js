import { createStore } from 'vuex'
import lists from './modules/lists'
import panels from './modules/panels'

const store = createStore({
  modules: {
    lists,
    panels
  }
})

export default store;