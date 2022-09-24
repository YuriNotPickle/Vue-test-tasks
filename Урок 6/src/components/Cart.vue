<template>
	<div>
		<div></div>
		<div>Total: {{ total }}</div>
		<div>$: {{ some }}</div>
		<hr>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters([ 'total']),
			some(){
				return this.total / 120;
			}
		}
	}

	/*
		mapGetters(['cnt', 'total'])

		{
			cnt(){
				return this.$store.getters.cnt;
			},
			total(){
				return this.$store.getters.total;
			}
		}

	*/	

</script>