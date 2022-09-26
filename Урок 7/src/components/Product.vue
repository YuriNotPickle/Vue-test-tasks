<template>
	<div v-if="currentProduct(routeId)">
		<h1>{{ currentProduct(routeId)[0].title }}</h1>
      <router-link :to="{ name: 'catalog' }">Back to products</router-link>
		
		<hr>
		<div class="alert alert-success">
			Price: {{ currentProduct(routeId)[0].price }}
		</div>
      <button v-if="inCart(routeId)" @click="remove(routeId)" type="button" class="btn btn-danger">
			Remove
	   </button>

		<button v-else @click="add(routeId)" type="button" class="btn btn-success">
			Add to cart
		</button>
	</div>
   <div v-else ></div>
</template>

<script>
   import { mapGetters } from 'vuex';
   import { mapActions } from 'vuex';

	export default {
    data() {
        return {
            routeId: this.$route.params.id,
        };
    },
    computed: {
        ...mapGetters("products", ["currentProduct"]),
        ...mapGetters('cart', [ 'inCart' ])

    },
    methods: {
		...mapActions('cart', [ 'add', 'remove' ])
	}
}
</script>