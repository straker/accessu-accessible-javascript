<script>
import MessageItem from '../message-item/message-item.svelte';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let messages;

function onDelete({ detail }) {
  dispatch('delete', detail);
}
</script>

<style>
.message-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0;
}
</style>

<ul class="message-list">
  {#each messages as message}
    <li v-for="message in messages">
      <MessageItem {...message} on:delete={onDelete} />
    </li>
  {/each}
</ul>