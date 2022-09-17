<template>
	<div class="form-group">
		<label>
			{{ label }}
         <transition-group name="fade" mode="in-out">
         <template v-if="activated">
            <fa-icon v-if="valid"
				class="text-success"
				icon="check-circle"
			/>
         <fa-icon v-if="!valid"
				class="text-danger"
				icon="exclamation-circle"
			/>
         </template>
      </transition-group>
		</label>
		<input type="text" class="form-control" :value="value" @input="onInput">
	</div>
</template>
<style>
.fade-enter-active, .mode-fade-leave-active {
  transition: opacity .5s ease
}

.fade-enter-from, .mode-fade-leave-to {
  opacity: 0
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