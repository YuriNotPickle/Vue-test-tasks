<template>
		<button class="btn btn-primary" @click="sendOrder">Send</button>
		<div class="alert alert-warning" v-if="orderIsPending">
			Calculating...
		</div>
		<div class="alert alert-success" v-else-if="orderIsDone">
			You need to pay {{ this.$store.getters.total }} RUB for this Pug bundle.
		</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
   computed: mapGetters(['orderIsPending', 'orderIsDone']),
   methods: {
      sendOrder(){
				this.$store.dispatch('send');
		}
   },
}
</script>
<style>
   
</style>