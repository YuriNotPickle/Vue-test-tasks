<template>
   <div>
      <div class="form-group" >
			<label> 
				{{ label }} 
            <font-awesome-icon v-show="output" :icon="symbol" :color="color" />
			</label>
			<input type="text" class="form-control"  v-model="value" @input="$emit('send-value', [value, checkValidation])">
		</div>
   </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
         components: {
            FontAwesomeIcon,
         },
         props: {
            label: { type: String, required: true },
            pattern: { type: RegExp, required: true },
         },
         data() {
            return {
               value: '',
               activationStatus: false,
            }
         },
         computed: {
            checkValidation() {
               return this.pattern.test(this.value.trim())
            },
            symbol() {
               if(this.checkActivation()) return this.checkValidation ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation';
            },
            color() {
               if(this.checkActivation()) return this.checkValidation ? 'green' : 'red';
            },
            output() {
               return this.activationStatus ? true : false
            },
         },
         methods: {
            checkActivation() {
               if (this.value.length >= 1) {
                  this.activationStatus = true;
               };
               return this.activationStatus;
            }
         }
      }
</script>
