<template>
  <form class="form" @submit.prevent="onSubmit">
    <label for="message">New Message</label>
    <textarea
      class="textarea"
      id="message"
      v-model="message"
    ></textarea>
    <div>
      <input class="submit" type="submit" value="Post"/>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CreateMessage',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit() {
      if (!this.message.trim()) {
        return;
      }

      this.$emit('create', this.message);
      this.message = '';
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0 2rem;
}

.textarea {
  border-radius: 5px;
  box-shadow: 1px 1px 1px #333;
  width: 100%;
  padding: 0.5rem;
  margin: 0.25rem 0 1rem 0;
  font: inherit;
}

.submit {
  background: var(--blue);
  border: 1px solid var(--dark-blue);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: var(--white);
}

.submit:active {
  background: var(--dark-blue);
}

.submit:hover, .submit:focus {
  outline: 2px solid var(--white);
  outline-offset: -0.25rem;
}
</style>