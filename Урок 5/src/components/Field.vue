<template>
	<div class="form-group">
		<label>
			{{ label }}
               <transition v-if="activated" name="rotate" mode="out-in" 
               appear appear-active-class="fade">
                     <fa-icon 
                     :key="valid"
                     :class="valid ? 'text-success' : 'text-danger'"
                     :icon="valid ? 'check-circle' : 'exclamation-circle'"
                     />
               </transition>
		</label>
		<input type="text" class="form-control" :value="value" @input="onInput">
	</div>
</template>
<style>

.fade {
  animation: fade .3s ;
}

.rotate-enter-active {
  animation: rotate .25s;
}
.rotate-leave-active {
  animation: rotate .25s reverse;
}
@keyframes rotate {
  0% {
    transform: rotateY(90deg);
  }
  100% {
   transform: rotateY(0deg);
  }
}
@keyframes fade {
   from { opacity: 0; }
   to { opacity: 1; }
}
</style>
<script>
   
export default {
	props: {
		label: { type: String, required: true },
		value: { type: String, required: true },
		valid: { type: Boolean, required: true }
	},
	data(){
		return {
			activated: this.value != ''
		}
	},
	methods: {
		onInput(e){
			this.activated = true;
			this.$emit('updated', e.target.value)
		}
	}
}
</script>