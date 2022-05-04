<template>
  <div
    :class="className"
    :title="title"
    v-on:click="onClick"
  >
    <Icon :name="iconName" :alt="title"></Icon>
    {{ formattedCount }}
  </div>
</template>

<script>
import Icon from '../icon/icon.vue';
import { formatStat } from '../../utils';

export default {
  name: 'SocialButton',
  props: ['title', 'icon', 'count', 'pressed'],
  components: {
    Icon
  },
  data() {
    return {
      state: {
        count: this.count,
        pressed: this.pressed
      }
    }
  },
  computed: {
    formattedCount() {
      return formatStat(this.state.count);
    },
    iconName() {
      return `${this.icon}${this.state.pressed ? '_filled' : ''}`;
    },
    className() {
      return `social-button ${this.state.pressed ? 'pressed' : ''}`;
    }
  },
  methods: {
    onClick() {
      this.state.pressed = !this.state.pressed;
      this.state.count = this.state.count + (this.state.pressed ? 1 : -1);
    }
  }
}
</script>

<style scoped>
.social-button {
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  border: 0;
  background: transparent;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  user-select: none;
}

.social-button:hover {
  cursor: pointer;
  outline: 2px solid var(--blue);
}

.social-button.pressed {
  color: var(--blue);
}
</style>