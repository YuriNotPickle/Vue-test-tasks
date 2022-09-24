<template>
	<div class="col-3 border border-primary p-2 m-1">
		<h2> {{ product.name }}</h2>
		<div class="price">{{ product.price }}</div>
		<hr>
		<button class="btn btn-warning" @click="decrease">-1</button>
		 <input type="text" :value="product.cnt" @change="validCnt"> 
		<button class="btn btn-success" @click="increase">+1</button>
		<hr>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
      props: ['product'],
		computed: mapGetters(['products']),
		methods: {
			increase(){
				this.$store.dispatch('increase', this.product.id);
			},
			decrease(){
				this.$store.dispatch('decrease', this.product.id);
			},
			setCnt(e){
				this.$store.dispatch('setCnt', [e.target.value, this.product.id]);
			},
         validCnt(e) {
            let re = /[^0-9]/g;
            e.target.value = e.target.value.replaceAll(re, '');
            if (e.target.value == '') {
               e.target.value = 1;
            }
            this.setCnt(e);
         },
		},

	}
</script>