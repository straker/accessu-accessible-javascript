<script>
import MessageItem from '../message-item/message-item.svelte';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let messages;
export let focus;

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
  {#each messages as message, index}
    <li v-for="message in messages">
      <MessageItem {...message} on:delete={onDelete} focus={index === 0 && focus}/>
    </li>
  {/each}
</ul>