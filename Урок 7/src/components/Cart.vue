<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div>
         <table class="table">
            <tr >
               <td class="col text-center">Product</td>
               <td class="col text-center">Price</td>
               <td class="col text-center">Quanity</td>
            </tr>
            
            <tr v-for="item in $store.state.cart.items" :key="item.id">
               <td class="col"><div class="text-center">{{ getName(item.id) }}</div></td>
               <td class="col"><div class="text-center">{{ getPrice(item.id) }}</div></td>
               <td class="col ">
                  <div class="d-flex align-items-center justify-content-evenly">
                     <button class="btn btn-warning" @click="removeOnePc([item.cnt, item.id])"> - </button>
                     {{ item.cnt }} 
                     <button class="btn btn-success" @click="addOnePc([item.cnt, item.id])"> + </button>

                     <button class="btn btn-danger" @click="remove(item.id)">Remove</button>
                  </div>
               </td>
            </tr>
         </table>
      </div>
      <p>Total : {{ $store.getters['cart/total'] }}</p>
		<router-link class="btn btn-success" :to="{ name: 'checkout' }">
			Order now
		</router-link>
	</div>
</template>

<script>
   import { mapActions } from 'vuex';
	export default {
      computed: {

      },
      methods: {
         getName(id) {
            return this.currentProduct(id).title;
         },
         getPrice(id) {
            return this.currentProduct(id).price;
         },
         currentProduct(id) {
            return this.$store.getters['products/currentProduct'](id)
         },
         ...mapActions('cart', [ 'remove', 'addOnePc', 'removeOnePc' ]),
      },
	}
</script>