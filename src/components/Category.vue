<template>
  <router-link class="category-link" :to="{ name: 'CategoryInfo', params: { id: category.id }}">
    <div class="category">
      <h1> {{ category.title }} </h1>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: Object
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
  width: 250px;
  padding: 20px;
  border: 1px solid #000000;
  margin-bottom: 18px;
}
.category:hover {
  transform: scale(1.01);
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
