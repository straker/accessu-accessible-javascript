<template>
  <ul class="message-list">
    <li v-for="message in messages">
      <MessageItem v-bind="message" @delete="onDelete" />
    </li>
  </ul>
</template>

<script>
import MessageItem from '../message-item/message-item.vue';

export default {
  name: 'MessageList',
  props: ['messages'],
  components: {
    MessageItem
  },
  methods: {
    onDelete(id) {
      this.$emit('delete', id);
    }
  }
}
</script>

<style scoped>
.message-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0;
}
</style>