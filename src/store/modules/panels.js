export default{
  state:{
    panelShow: [false, false, false, false, false],
    isFiltered: [true, true, true, true, true],
    firstPanel: [],
    secondPanel: [],
    thirdPanel: [],
    fourthPanel: [],
    fifthPanel: [],
  },
  actions: {
    panelClick({commit}, index){
      commit('panelShow', index)
    },
    buttonClick({commit}, data){
      commit('changeIsFiltered', data)
    },
    deleteSquare({commit}, data){
      commit('changePanel', data)
    }
  },
  mutations:{
    addToPanel(state, data){
      switch(data.index){
        case 0: state.firstPanel = data.list;
          break;
        case 1: state.secondPanel = data.list;
          break;
        case 2: state.thirdPanel = data.list;
          break;
        case 3: state.fourthPanel = data.list;
          break;
        case 4: state.fifthPanel = data.list;
          break;
      }

      state.isFiltered[data.index] = true
    },
    panelShow(state, index){
      state.panelShow[index] = !state.panelShow[index]
    },
    changeIsFiltered(state, data){
      console.log(data);
      state.isFiltered[data.index] = !state.isFiltered[data.index]
      if(!state.isFiltered[data.index]){
         data.array.sort(() => Math.random() - 0.5);
      }else{
         data.array.sort(( a, b ) =>  a.id - b.id)
      }
    },
    changePanel(state, data){
      switch(data.index){
        case 0: 
          state.firstPanel = state.firstPanel.filter(item => item.id !== data.item.id)
          break;
        case 1:
          state.secondPanel = state.secondPanel.filter(item => item.id !== data.item.id)
          break;
        case 2:
          state.thirdPanel = state.thirdPanel.filter(item => item.id !== data.item.id)
          break;
        case 3:
          state.fourthPanel = state.fourthPanel.filter(item => item.id !== data.item.id)
          break;
        case 4: 
          state.fifthPanel = state.fifthPanel.filter(item => item.id !== data.item.id)
          break;
      }
    }
  },
  getters: {
    getFirstPanel(state) {
      return state.firstPanel
    },
    getSecondPanel(state) {
      return state.secondPanel
    },
    getThirdPanel(state) {
      return state.thirdPanel
    },
    getFourthPanel(state) {
      return state.fourthPanel
    },
    getFifthPanel(state) {
      return state.fifthPanel
    },
    getPanelShow(state) {
      return state.panelShow
    },
    getIsFiltered(state) {
      return state.isFiltered
    }
  }
}