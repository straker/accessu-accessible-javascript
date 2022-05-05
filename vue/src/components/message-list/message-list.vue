<template>
  <ul class="message-list">
    <li v-for="(message, index) in messages">
      <MessageItem v-bind="message" @delete="onDelete" :focus="focus && index === 0 ? true : null" />
    </li>
  </ul>
</template>

<script>
import MessageItem from '../message-item/message-item.vue';

export default {
  name: 'MessageList',
  props: ['messages', 'focus'],
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