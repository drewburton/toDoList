<template>
  <div class="info-item" @mouseover="showRemove=true" @mouseleave="showRemove=false">
    <h1 class="info-item-contents"> {{ contents }} </h1>

    <div class="remove-button" v-if="showRemove">
      <button @click="removeInfoItem">remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    contents: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showRemove: false
    }
  },
  methods: {
    removeInfoItem () {
      this.$emit('removeInfoItem', this.id)
    }
  }
}
</script>

<style>
.info-item {
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: auto;
}

.remove-button {
  padding: 10px;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
