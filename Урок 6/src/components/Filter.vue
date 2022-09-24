<template lang="">
   <select :value="filterMethod" @change="changeFilter" class="form-select" >
      <option value="default"> Default </option>
      <option value="a-z"> A-Z </option>
      <option value="z-a"> Z-A </option>
   </select>
</template>
<script>
export default {
   computed: {
      filterMethod() {
         return this.$store.getters.filterMethod
      }
   },
   methods: {
      changeFilter(e){
         this.$store.dispatch('updateFilter', e.target.value)
      }
   },
}
</script>
<style lang="">
   
</style>