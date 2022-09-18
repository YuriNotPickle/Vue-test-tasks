<template>
	<div class="form-group">
		<label>
			{{ label }}
            <transition name="rotate" mode="out-in">
                  <fa-icon v-if="valid && activated"
                  class="text-success"
                  icon="check-circle"
                  />
                  <fa-icon v-else-if="!valid && activated"
                  class="text-danger"
                  icon="exclamation-circle"
                  />
         </transition>
		</label>
		<input type="text" class="form-control" :value="value" @input="onInput">
	</div>
</template>
<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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