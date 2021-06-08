<template>
  <div class="home">
      <category v-for="category in categories" :key="category.id" :category="category"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'

export default {
  name: 'ToDo',
  components: {
    Category
  },
  data () {
    return {
      categories: [
        {
          id: '123',
          title: 'math',
          contents: ['1', '2', '3']
        },
        {
          id: '456',
          title: 'science',
          contents: ['7', '8', '9']
        }
      ]
    }
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
