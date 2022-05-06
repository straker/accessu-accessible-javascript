<script>
import Icon from '../icon/icon.svelte';
import { formatStat } from '../../utils';

export let title;
export let icon;
export let count;
export let pressed;

let formattedCount = formatStat(count);
let iconName = `${icon}${pressed ? '_filled' : ''}`;
let className = `social-button ${pressed ? 'pressed' : ''}`;

function onClick() {
  pressed = !pressed;
  count = count + (pressed ? 1 : -1);
  formattedCount = formatStat(count);
  className = `social-button ${pressed ? 'pressed' : ''}`;
}
</script>

<style>
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

<button
  aria-pressed={pressed}
  class={className}
  title={title}
  on:click={onClick}
>
  <Icon name={iconName} alt={title}></Icon>
  { formattedCount }
</button>