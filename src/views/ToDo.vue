<template>
  <div class="home">
      <Category v-for="category in categories" :key="category.id" :category="category"/>
      <div class='add-category'>
        <strong> Add Category </strong>
        <textarea class="add-category-area" v-model="categoryText"/>
      </div>

      <button class="add-category-button" @click="addCategory">Add</button>
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
      categoryText: '',
      categories: null
    }
  },
  created () {
    EventService.getCategories()
      .then(response => { this.categories = response.data })
      .catch(error => console.log(error))
  },
  methods: {
    addCategory () {
      if (this.categoryText) {
        this.categories.push({
          id: this.categories.length + 1,
          title: this.categoryText,
          content: [' ']
        })

        // push the information to the database, then clear the text area
        EventService.addCategory(this.categories[this.categories.length - 1])
        this.categoryText = ''
      }
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

.add-category {
  display: flex;
  flex-direction: column;
}

.add-category-button {
  margin-top: 10px;
  padding: 5px;
  transition: all 0.25 ease;
  cursor: pointer;
}

.add-category-button:hover {
  transform: scale(1.1, 1.1);
}
</style>
