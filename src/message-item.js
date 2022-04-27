function template({ message, link, name, date }) {
  return `
    <style>
    .message-item {
      border-radius: 5px;
      box-shadow: 0px 1px 2px #333;
      max-width: 40vw;
      padding: 10px;
    }

    .message-item > * + * {
      margin-top: 10px;
    }

    .header, ul {
      display: flex;
    }

    .header {
      column-gap: 1rem;
    }

    .header > *:last-child {
       margin-left: auto;
    }

    ul {
      margin: 0;
      padding: 0;
      justify-content: space-evenly;
      list-style: none;
    }
    </style>
    <div class="message-item">
      <div class="header">
        <a href="${link}">${name}</a>
        <div class="date">${date}</div>
        <button>
          <icon-img name="delete" alt="Delete"></icon-img>
        </button>
      </div>
      <div class="message">${message}</div>
      <div class="footer">
        <ul>
          <li>
            <button>
              <icon-img name="comment" alt="Reply"></icon-img>
            </button>
          </li>
          <li>
            <button>
              <icon-img name="favorite" alt="Like"></icon-img>
            </button>
          </li>
          <li>
            <button>
              <icon-img name="sympathize" alt="Sympathize"></icon-img>
            </button>
          </li>
          <li>
            <button>
              <icon-img name="share" alt="Share"></icon-img>
            </button>
          </li>
        </ul>
      </div>
    </div>
  `;
}

class MessageItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const attributes = Array.from(this.attributes)
      .reduce((prev, curr) => {
        prev[curr.name] = curr.value;
        return prev;
      }, {})
    shadowRoot.innerHTML = template(attributes);
  }
}

customElements.define('message-item', MessageItem);