<template>
	<section>
		<div class="container">
			<div class="row ">
               <app-filter />
					<app-product v-for="product in filteredProd" :key="product.id" :product="product" ></app-product>
			</div>
         <app-order-btn />
		</div>
	</section>
</template>

<script>	
	import AppProduct from './Product';
   import AppOrderBtn from './OrderBtn.vue';
   import AppFilter from './Filter.vue'

	export default {
		components: { AppProduct, AppOrderBtn, AppFilter },
      computed: {
         products(){
            return this.$store.getters.products
         },
         filteredProd() {
            let filteredProd = JSON.parse(JSON.stringify(this.products));
            if (this.$store.getters.filterMethod == 'a-z'){
               Object.keys(this.products).sort((a , b) => {
                  if (a.name > b.name) {
                     return 1;
                  }
                  if (a.name < b.name) {
                     return -1
                  }
                  return 0
               }).forEach(function(key, i){
                  filteredProd[key] = obj[key];
               });
               return filteredProd
            }
            return filteredProd
            
         }
      }
	}
</script>