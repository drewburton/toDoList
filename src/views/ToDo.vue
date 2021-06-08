<template>
  <div class="home">
      <Category v-for="category in categories" :key="category.id" :category="category"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'ToDo',
  components: {
    Category
  },
  data () {
    return {
      categories: null
    }
  },
  created() {
    EventService.getCategories()
    .then(response => { this.categories = response.data })
    .catch(error => console.log(error))
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
