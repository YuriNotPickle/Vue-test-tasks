import { createStore } from 'vuex'

/*
	const ORDER_STATUSES = {
		new: 0,
		pending: 1,
		done: 2
	}
*/

const store = {
	state: {
		products: [
         {
            name: 'Leash',
            price: 1000,
            cnt: 0,
            id: 0,
         },
         {  
            name: 'Dog food',
            price: 500,
            cnt: 0,
            id: 1,
         },
         {  
            name: 'Bed',
            price: 3000,
            cnt: 0,
            id: 2,
         },
         {
            name: 'Graft',
            price: 5000,
            cnt: 0,
            id: 3,
         },
         {
            name: 'Pug',
            price: 10000,
            cnt: 0,
            id: 4,
         },
         {
            name: 'Taksa',
            price: 80000,
            cnt: 0,
            id: 5,
         },
         {
            name: 'Podstilka',
            price: 800,
            cnt: 0,
            id: 6,
         }
      ],
      orderStatus: 0,
      filterMethod: 'default',
	},
	getters: {
      products: state => state.products,
		total: getters => {
         let total = 0;

         for(let product of getters.products){
            total +=  product.price * product.cnt;
         }
         
         return total;
      },
		orderIsNothing: state => state.orderStatus == 0, // wtf my english
		orderIsPending: state => state.orderStatus == 1,
		orderIsDone: state => state.orderStatus == 2,
      filterMethod: state => state.filterMethod
	},
	mutations: {
		setCnt(state, val){
         let parsedVal = parseInt(val[0]);
         if (isNaN(parsedVal) || parsedVal < 0) {
            parsedVal = 0;
         }
         state.products[val[1]].cnt = parsedVal;
         
		},
		setOrderStatus(state, status){
			state.orderStatus = status;
		},
      filterUpd(state, val){
         state.filterMethod = val;
      }
	},
	actions: {
      increase({ commit, getters }, id){
         commit('setCnt', [getters.products[id].cnt + 1, id])
      },
      decrease(store, id){
         store.commit('setCnt', [store.getters.products[id].cnt - 1, id])
      },
      setCnt(store, val){
         store.commit('setCnt', val)
      },
		send(store){
			store.commit('setOrderStatus', 1);

			// request to server
			setTimeout(() => {
				store.commit('setOrderStatus', 2);
			}, 1000);
		},
      updateFilter(store, value) {
         store.commit('filterUpd', value);
      }
	},
	strict: process.env.NODE_ENV !== 'production'
}

export default createStore(store);

/*
	class VuexParody{
		state = {}
		mutations = {}

		commit(name){
			let fn = this.mutations[name]
			fn(this.state);
		}
	}

*/