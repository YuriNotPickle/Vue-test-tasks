<template>
	<div class="container mt-2">
		<form @submit.prevent="sendForm" v-if="!formDone">
			<app-progress :current="fieldDone" :max="info.length" />
			<div>
				<app-field 
					v-for="field,i in info"
					:key="i"
					:label="field.label"
					:value="field.value"
					:valid="field.valid"
					@updated="onUpdate(i, $event)"
				></app-field>
			</div>
			<button class="btn btn-primary" :disabled="!formReady">
				Send Data
			</button>
		</form>
		<div v-else>
         <h1>All done</h1>
		</div>
	</div>
   <vue-final-modal 
   v-model="showModal"
   :name="null"
   classes="modal-container" content-class="modal-content"
   >
      <h2>Is all correct?</h2>
      <table class="table table-bordered wzz50">
			<tbody>
				<tr v-for="field,i in info" :key="i">
					<td>{{ field.label }}</td>
					<td>{{ field.value }}</td>
				</tr>
			</tbody>
		</table>
      <div class="modal__action">
        <button @click="modalSuccess()" class="btn btn-success">Confirm</button>
        <button @click="modalFail()" class="btn btn-danger">Cancel</button>
      </div>
    </vue-final-modal>
</template>

<script>
import AppField from './components/Field'
import AppProgress from './components/Progress'
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'

export default {
	components: { AppField, AppProgress, VueFinalModal, ModalsContainer },
	data: () => ({
		info: [
			{
				label: 'Name',
				value: '',
				pattern: /^[a-zA-Z ]{2,30}$/
			},
			{
				label: 'Phone',
				value: '',
				pattern: /^[0-9]{7,14}$/
			},
			{
				label: 'Email',
				value: '',
				pattern: /.+/
			},
			{
				label: 'Some Field 1',
				value: '',
				pattern: /.+/
			},
			{
				label: 'Some Field 2',
				value: '',
				pattern: /.+/
			}
		],
		formDone: false,
      showModal: false
	}),
	computed: {
		fieldDone(){
			// return this.info.reduce((total, field) => total + (field.valid ? 1 : 0), 0)
			return this.info.filter(field => field.valid).length;
		},
		formReady(){
			return this.fieldDone >= this.info.length;
		},
		progressStyles(){
			let rel = this.fieldDone / this.info.length * 100;
			return { width: rel + '%' };
		},
	},
	methods: {
      modalSuccess() {
         this.formDone = true;
         this.showModal = false;
      },
      modalFail() {
         this.showModal = false;
      },
		onUpdate(i, val){
			let field = this.info[i];
			field.value = val.trim();
			field.valid = field.pattern.test(field.value);
		},
		sendForm(){
			if(this.formReady){
				this.showModal = true;
			}
		}
	},
	created(){
		this.info.forEach(field => {
			field.valid = false;
		})
	}
}
</script>
<style scoped>
   ::v-deep .modal-container {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ::v-deep .modal-content {
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     width: auto;
     min-width: 30%;
     margin: 0 1rem;
     padding: 1rem;
     border: 1px solid #e2e8f0;
     border-radius: 0.25rem;
     background: #fff;
   }
   .modal__title {
     font-size: 1.5rem;
     font-weight: 700;
   }
   .modal__action {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
   }
</style>