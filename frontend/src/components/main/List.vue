<template>
<ul>
  <button @click="back">Back to learning flashcards</button>
  <div v-for="item in items" :key="item.id" class="card">
    <p>Front: {{item.front}}</p>
    <p>Back: {{item.back}}</p>
    <p>Group: {{item.group}}</p>
    <button type="button" name="button" @click="deleteItem(item.id)">Delete</button>
    <button type="button" name="button">Edit</button>
  </div>
</ul>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {}
  },
  components: {

  },
  methods: {
    deleteItem(item) {
      this.items.splice(this.items.indexOf(item), 1)
      this.$emit('ondelete', this.items)
    },
    back() {
      this.$emit('manager')
    },
  }
}
</script>
