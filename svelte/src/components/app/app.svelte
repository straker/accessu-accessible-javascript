<script>
import CreateMessage from '../create-message/create-message.svelte';
import MessageList from '../message-list/message-list.svelte';

// pretend we got this from a database query
import messageData from '../../assets/messages';
let messages = messageData;

/**
 * Create a new message state object.
 * @param {String} message - User message.
 */
function createMessage(event) {
  const newMessage = {
    // a mock id and user data
    id: Math.random(),
    user: {
      name: 'Sam Mills',
      handle: '@sam_mills',
      link: '/users/@sam_mills',
      profile: '/src/assets/sam-profile.png'
    },
    timestamp: (new Date()).toISOString(),
    message: event.detail.message,
    comments: [],
    likes: 0,
    sympathy: 0,
    shares: 0
  };
  messages = [newMessage, ...messages];
}

/**
 * Delete a message from the messages state.
 * @param {Number} id - ID of the message to delete.
 */
function deleteMessage(event) {
  messages = messages.filter(message => message.id !== event.detail.id);
}
</script>

<style>
.app {
  padding: 0 2rem;
}

.header {
  display: flex;
  flex-flow: row;
  align-items: center;
  border-bottom: 1px solid #888;
}

.icon {
  width: 1.8rem;
  height: 1.8rem;
}

.title {
  margin: 0 0 0 0.25rem;
}

.body {
  max-width: 30rem;
}

@media only screen and (max-width: 33rem) {
  .app {
    padding: 0 0.25rem;
  }
}
</style>

<div class="app">
  <header class="header">
    <img class="icon" src="/src/assets/svelte-logo.svg" alt=""/>
    <h1 class="title">Home</h1>
  </header>
  <main class="body">
    <CreateMessage on:create={createMessage}/>
    <MessageList messages={messages} on:delete={deleteMessage}/>
  </main>
</div>