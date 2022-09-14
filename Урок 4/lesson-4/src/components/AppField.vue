<template>
   <div>
      <div class="form-group" >
			<label> 
				{{ label }} 
            <font-awesome-icon v-show="this.output" v-if="this.symbol" icon="fa-solid fa-circle-check" color="green" />
            <font-awesome-icon v-show="this.output" v-else-if="!this.symbol" icon="fa-solid fa-circle-exclamation" color="red" />
			</label>
			<input type="text" class="form-control"  v-model="this.value" @input="$emit('send-value', [this.value, this.checkValidation])">
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
               if(this.checkActivation()) return this.checkValidation ? true : false;
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
