
export default {
	namespaced: true,
	state: {
		items: []
	},
	getters: {
		inCart: state => id => state.items.some(item => item.id == id),
		length: state => state.items.length,
      currentProd: (state, getters, rootState, rootGetters) => id => rootGetters['products/currentProduct'](id)[0],
      total: (state, getters) => {
         let total = 0;
         state.items.forEach( item => total+= getters.currentProd(item.id).price * item.cnt)

         return total
      }
		// total: (state, getter, rootState, rootGetters) rootGetters 
	},
	mutations: {
		add(state, id){
			state.items.push({ id, cnt: 1 });
		},
		remove(state, id){
			state.items = state.items.filter(item => item.id != id);
		},
      setCnt(state, value){
         const updatedItem = state.items.filter(current => current.id == value[1])[0];
         updatedItem.cnt = value[0];

         if(updatedItem.cnt <= 0) {
            updatedItem.cnt = 1
         }
      }
	},
	actions: {
		add({ commit, getters }, id){
			if(!getters.inCart(id)){
				commit('add', id);
			}
		},
		remove({ commit, getters }, id){
			if(getters.inCart(id)){
				commit('remove', id);
			}
		},
      addOnePc({ commit }, value){
         commit('setCnt', [value[0] + 1, value[1]])
      },
      removeOnePc({ commit }, value){
         commit('setCnt', [value[0] - 1, value[1]])
      }
	}
}

/*
	inCart(state){
		return function(id){
			return state.items.some(item => item.id == id);
		}
	}

	inCart: state => id => state.items.some(item => item.id == id)
*/