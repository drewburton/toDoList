<template>
    <div class='category'>
      <router-link class="category-link" :to="{ name: 'CategoryInfo', params: { id: category.id }}">
        <div class='category-title'>
          <h1> {{ category.title }} </h1>
        </div>
      </router-link>
      <div class='remove-category'>
        <button class='remove-category' @click="removeCategory(category.id)">remove</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeCategory (id) {
      this.$emit('removeCategory', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category-link {
  text-decoration: none;
  color: #000000;
}

.category {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-left: 80px;
}

.category-title {
  width: 250px;
  padding: 20px;
  border: 1px solid #000000;
  margin-bottom: 18px;
  transition: all 0.25s ease
}

.remove-category {
  padding: 10px;
  margin-top: 15px;
}

.category-title:hover {
  transform: scale(1.05);
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
