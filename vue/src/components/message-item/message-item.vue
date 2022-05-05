<template>
  <div class="message-item" tabindex="-1" ref="container" data-test-handle="message-item">
    <div>
      <img class="profile" :src="user.profile" alt="" />
    </div>
    <div class="message">
      <div class="header">
        <a class="link" :href="user.link">
          <span class="name">{{ user.name }}</span>
          <span class="handle">{{ user.handle }}</span>
        </a>
        <div class="date">{{ relativeTime }}</div>
        <button
          class="delete"
          title="Delete"
          v-on:click="deleteMessage"
          data-test-handle="delete-item"
        >
          <Icon name="delete" alt="Delete"/>
        </button>
      </div>
      <div class="body">
        {{ message }}
      </div>
      <div class="footer">
        <ul class="list">
          <li>
            <SocialButton icon="comment" title="Comment" :count="comments.length" :pressed="state.userCommented"/>
          </li>
          <li>
            <SocialButton icon="like" title="Like" :count="state.likes" :pressed="state.userLiked"/>
          </li>
          <li>
            <SocialButton icon="sympathize" title="Sympathize" :count="state.sympathy" :pressed="state.userSympathy"/>
          </li>
          <li>
            <SocialButton icon="share" title="Share" :count="state.shares" :pressed="state.userShared"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SocialButton from '../social-button/social-button.vue';
import Icon from '../icon/icon.vue';
import { getTime } from '../../utils';

export default {
  name: 'MessageItem',
  props: ['id', 'user', 'timestamp', 'message', 'comments', 'likes', 'sympathy', 'shares', 'focus'],
  components: {
    SocialButton,
    Icon
  },
  data() {
    return {
      state: {
        userCommented: false,
        likes: this.likes,
        userLiked: false,
        sympathy: this.sympathy,
        userSympathy: false,
        shares: this.shares,
        userShared: false
      }
    }
  },
  mounted() {
    if (this.focus) {
      this.$refs.container.focus();
    }
  },
  watch: {
    focus() {
      if (this.focus) {
        this.$refs.container.focus();
      }
    }
  },
  computed: {
    relativeTime() {
      return getTime(this.timestamp);
    }
  },
  methods: {
    deleteMessage() {
      this.$emit('delete', this.id);
    }
  }
}
</script>

<style scoped>
.message-item {
  border-radius: 5px;
  box-shadow: 1px 1px 3px #333;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  column-gap: 0.75rem;
  min-height: 5.5rem;
}

.profile {
  width: 3rem;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #333;
}

.message {
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  width: 100%;
}

.header {
  display: flex;
  column-gap: 1rem;
}

.link {
  color: inherit;
  text-decoration: none;
  position: relative;
  white-space: nowrap;
}

.link:hover::before, .link:focus::before {
  content: '';
  width: 100%;
  background: #888;
  height: 1px;
  position: absolute;
  bottom: 0.2rem;
}

.date {
  white-space: nowrap;
}

.name {
  font-weight: bold;
}

.handle {
  color:  #555;
  padding-left: 0.25rem;
}

.delete {
  margin-left: auto;
}

.body {
  margin-bottom: 1rem;
  max-width: 90%;
}

.list {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.footer {
  margin-top: auto;
}

.stat-button {
  display: flex;
  align-items: center;
  column-gap: 0.5rem
}

@media only screen and (max-width: 33rem) {
  .header {
    display: grid;
    column-gap: 0;
    grid-template-areas:
        "a b"
        "c b";
  }

  .link {
    grid-area: a;
  }

  .date {
    grid-area: c;
  }

  .body {
    margin-top: 0.5rem;
  }

  .footer {
    margin-left: -3rem;
  }
}
</style>