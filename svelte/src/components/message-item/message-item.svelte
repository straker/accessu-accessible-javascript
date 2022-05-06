<script>
import SocialButton from '../social-button/social-button.svelte';
import Icon from '../icon/icon.svelte';
import { getTime } from '../../utils';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let id;
export let user;
export let timestamp;
export let message;
export let comments;
export let likes;
export let sympathy;
export let shares;

let userCommented = false;
let userLiked = false
let userSympathy = false
let userShared = false

let relativeTime = getTime(timestamp);

function deleteMessage() {
  dispatch('delete', { id });
}
</script>

<style>
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

<div class="message-item">
  <div>
    <img class="profile" src={user.profile} alt="" />
  </div>
  <div class="message">
    <div class="header">
      <a class="link" href={user.link}>
        <span class="name">{ user.name }</span>
        <span class="handle">{ user.handle }</span>
      </a>
      <div class="date">{ relativeTime }</div>
      <button
        class="delete"
        title="Delete"
        on:click={deleteMessage}
      >
        <Icon name="delete" alt="Delete"/>
      </button>
    </div>
    <div class="body">
      { message }
    </div>
    <div class="footer">
      <ul class="list">
        <li>
          <SocialButton icon="comment" title="Comment" count={comments.length} pressed={userCommented}/>
        </li>
        <li>
          <SocialButton icon="like" title="Like" count={likes} pressed={userLiked}/>
        </li>
        <li>
          <SocialButton icon="sympathize" title="Sympathize" count={sympathy} pressed={userSympathy}/>
        </li>
        <li>
          <SocialButton icon="share" title="Share" count={shares} pressed={userShared}/>
        </li>
      </ul>
    </div>
  </div>
</div>