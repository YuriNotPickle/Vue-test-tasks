<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<h1>Pug calculator <img class="pug" src="../images/pug.png" alt="Pug picture"></h1>
					<app-cart></app-cart>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import AppCart from './Cart';

	export default {
		components: { AppCart }
	}
</script>
<style scoped>
   .pug {
      transform: translateY(0px);
      transition: .3s;
   }
   .pug:hover {
      transform: translateY(-15px);
   }
</style>