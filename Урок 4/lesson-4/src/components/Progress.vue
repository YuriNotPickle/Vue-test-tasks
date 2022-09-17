<template>
	<div class="progress">
		<div class="progress-bar" :style="progressStyles"></div>
	</div>
</template>
<script>
export default {
   props: {
      percent: { type: Number, required: true }
   },
   computed: {
      progressStyles() {
               return { width: this.percent + '%'  }
      },
   }
}
</script>
<style lang="">
   
</style>