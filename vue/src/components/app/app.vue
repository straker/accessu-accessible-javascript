<template>
  <div class="app">
    <header class="header">
      <img class="icon" src="/src/assets/vue-logo.svg" alt=""/>
      <h1 class="title">Home</h1>
    </header>
    <main class="body">
      <CreateMessage @create="createMessage"/>
      <MessageList :messages="messages" @delete="deleteMessage" :focus="focus" />
    </main>
  </div>
</template>

<script>
import CreateMessage from '../create-message/create-message.vue';
import MessageList from '../message-list/message-list.vue';

// pretend we got this from a database query
import messages from '../../assets/messages';

export default {
  name: 'App',
  components: {
    CreateMessage,
    MessageList
  },
  data() {
    return {
      messages,
      focus: false
    }
  },
  methods: {
    /**
     * Create a new message state object.
     * @param {String} message - User message.
     */
    createMessage(message) {
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
        message,
        comments: [],
        likes: 0,
        sympathy: 0,
        shares: 0
      };
      this.messages = [newMessage, ...this.messages];
      this.focus = true;
    },

    /**
     * Delete a message from the messages state.
     * @param {Number} id - ID of the message to delete.
     */
    deleteMessage(id) {
      this.messages = this.messages.filter(message => message.id !== id);
      this.focus = true;
    }
  }
}
</script>

<style scoped>
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