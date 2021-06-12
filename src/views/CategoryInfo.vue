<template>
  <div class="category-info" v-if="list">
    <CategoryInfoItem
      v-for="(item, index) in list"
      :key="index"
      :id="index"
      :contents="item"
      @removeInfoItem="removeInfo"/>
  </div>

  <div class="category-add">
    <textarea v-model="addText"/>
    <div>
      <button @click="addInfo">add</button>
    </div>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
import CategoryInfoItem from '@/components/CategoryInfoItem.vue'

export default {
  props: ['id'],
  components: {
    CategoryInfoItem
  },
  data () {
    return {
      list: null,
      addText: ''
    }
  },
  created () {
    EventService.getList(this.id)
      .then(response => { this.list = response.data.contents })
      .catch(error => console.log(error))
  },
  methods: {
    addInfo () {
      if (this.list) {
        this.list.push(this.addText)
        this.addText = ''
      } else {
        this.list = [this.addText]
      }
      EventService.updateList(this.list, this.id)
    },
    removeInfo (id) {
      this.list.splice(id, 1)
      EventService.updateList(this.list, this.id)
    }
  }

}
</script>

<style>

</style>
