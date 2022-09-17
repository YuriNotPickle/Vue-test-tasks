<template>
	 <div class="wrapper">
		  <div class="sample">
			<form @submit.prevent v-show="!formSent">
				<app-progress :percent="getPercent" />
				<div>
               <app-field v-for="field,i in info" :key="i" :label='field.label' :pattern='field.pattern'  @send-value="componentAction($event, field)" />  
				</div>
				<button class="btn btn-primary" :disabled="isBtnDisabled" @click.once="formSent = true">
					Send Data
				</button>
			</form>
			<pre>
			</pre>
			<div class="t-body">
				<table class="table table-bordered" v-show="formSent">
					<tr v-for="field in info">
						<td>{{ field.label }}</td>
						<td> {{ field.value }} </td>
					</tr>
				</table>
			</div>
		</div>
	 </div>
</template>

<script>
import AppField from './components/Field.vue'
import AppProgress from "./components/Progress.vue"
export default {
  name: 'App',
  components: {
            AppField,
            AppProgress,
         },
			data: () => ({
				info: [
					{
						label: 'Name',
						value: '',
						pattern: /^[a-zA-Z ]{2,30}$/,
                  status: false,
					},
					{
						label: 'Phone',
						value: '',
						pattern: /^[0-9]{7,14}$/,
                  status: false,
					},
					{
						label: 'Email',
						value: '',
						pattern: /.+/,
                  status: false,
					},
					{
						label: 'Some Field 1',
						value: '',
						pattern: /.+/,
                  status: false,
					},
					{
						label: 'Some Field 2',
						value: '',
						pattern: /.+/,
                  status: false,
					}
				],
            formSent: false,
			}),
         computed: {
            getTotal() {
               return this.info.length;
            },
            getPercent() {
               return this.getCurrent() / this.getTotal * 100
            },
            isBtnDisabled() {
               return this.getPercent === 100 ? false : true
            }
         },
         methods: {
            getCurrent() {
               let current = 0;
               this.info.forEach(element => {
                  if (element.status) {
                     current += 1
                  }
               });
               return current
            },
            componentAction(e, field) {
               field.value = e[0];
               field.status = e[1]
            }
         },
         }
</script>

<style>

</style>
