export default {
  state: {
    listShow: [true, false, false, false, false],
    listsMainInput: [true, true, false, false, false],
    firstList: [
      {
        count: 1,
        color: '#ff00ea',
        input: false
      },
      {
        count: 5,
        color: '#ff0000',
        input: true
      },
      {
        count: 17,
        color: '#0bd104',
        input: false
      },
      {
        count: 0,
        color: '#fcd303',
        input: true
      },
    ],
    secondList: [
      {
        count: 1,
        color: '#ff00ea',
        input: false
      },
      {
        count: 5,
        color: '#ff0000',
        input: true
      },
      {
        count: 17,
        color: '#0bd104',
        input: false
      },
      {
        count: 0,
        color: '#fcd303',
        input: true
      },
      {
        count: 3,
        color: '#a2bd99',
        input: true
      }
    ],
    thirdList: [
      {
        count: 1,
        color: '#ff00ea',
        input: false
      },
      {
        count: 5,
        color: '#ff0000',
        input: true
      },
      {
        count: 17,
        color: '#0bd104',
        input: false
      },
      {
        count: 0,
        color: '#fcd303',
        input: true
      },
      {
        count: 3,
        color: '#a2bd99',
        input: true
      },
      {
        count: 4,
        color: '#0d2e38',
        input: true
      },
      {
        count: 20,
        color: '#4c66b5',
        input: true
      },      {
        count: 8,
        color: '#000000',
        input: true
      },
      {
        count: 11,
        color: '#292004',
        input: true
      }
    ],
    fourthList: [
      {
        count: 1,
        color: '#ff00ea',
        input: false
      },
      {
        count: 5,
        color: '#ff0000',
        input: true
      },
      {
        count: 17,
        color: '#0bd104',
        input: false
      },
      {
        count: 0,
        color: '#fcd303',
        input: true
      },
      {
        count: 3,
        color: '#a2bd99',
        input: true
      },
      {
        count: 4,
        color: '#0d2e38',
        input: true
      },
      {
        count: 11,
        color: '#292004',
        input: true
      }
    ],
    fifthList: [
      {
        count: 1,
        color: '#ff00ea',
        input: false
      },
      {
        count: 5,
        color: '#ff0000',
        input: true
      },
      {
        count: 17,
        color: '#0bd104',
        input: false
      },
      {
        count: 0,
        color: '#fcd303',
        input: true
      },
      {
        count: 3,
        color: '#a2bd99',
        input: true
      },
      {
        count: 4,
        color: '#0d2e38',
        input: true
      },
      {
        count: 20,
        color: '#4c66b5',
        input: true
      },      {
        count: 8,
        color: '#000000',
        input: true
      },
      {
        count: 11,
        color: '#292004',
        input: true
      },
      {
        count: 19,
        color: '#ffffff',
        input: true
      }
    ]
  },
  actions: {
    listClick({commit}, index){
      commit('updateShow', index);
    },
    allChecked({commit}, index){
      commit('updateInputs', index)
    },
    addToPanel({commit}, data){
      const panel = []
      let inputs = 0;
      data.list.map(item => {
        if(item.input){
          inputs += 1;
          for(let i = 0; i < item.count; i++){
            panel.push({
              id: panel.length + 1,
              color: item.color,
            })
          }
        }
      })

      if(inputs){
        commit('checkMainInput', {bool:true ,index: data.index})
      }else {
        commit('checkMainInput', {bool:false ,index: data.index})
      }

      commit('addToPanel', {list: panel, index: data.index})
    }
  },
  mutations: {
    updateShow(state, index) {
      state.listShow[index] = !state.listShow[index];
    },
    updateInputs(state, index){
      let list;
      switch(index){
        case 0: 
          list = state.firstList;
          break;
        case 1: 
          list = state.secondList;
          break;
        case 2: 
          list = state.thirdList;
          break;
        case 3: 
          list = state.fourthList;
          break;
        case 4: 
          list = state.fifthList;
          break;
      }

      if(state.listsMainInput[index]){
        for(let i = 0; i < list.length; i++){
          if(list[i].input){
            list[i].input = !list[i].input
          }
        }
      } else {
        for(let i = 0; i < list.length; i++){
          if(!list[i].input){
            list[i].input = !list[i].input
          }
        }
      }
    },
    checkMainInput(state, data){
      state.listsMainInput[data.index] = data.bool
    }
  },
  getters: {
    getListShow(state){
      return state.listShow
    },
    getMainInputs(state){
      return state.listsMainInput
    },
    getFirstList(state){
      return state.firstList
    },
    getSecondList(state){
      return state.secondList
    },
    getThirdList(state){
      return state.thirdList
    },
    getFourthList(state){
      return state.fourthList
    },
    getFifthList(state){
      return state.fifthList
    }
  }
}