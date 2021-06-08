<template>
    <div v-if="list">
        <h1 v-for="item in list" :key=item> {{ item }} </h1>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  data () {
    return {
      list: null
    }
  },
  created () {
    EventService.getList(this.id)
      .then(response => { this.list = response.data.contents })
      .catch(error => console.log(error))
  }

}
</script>

<style>

</style>
