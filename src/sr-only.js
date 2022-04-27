function template() {
  return `
    <style>
    * {
      position:absolute;
      left:-10000px;
      top:auto;
      width:1px;
      height:1px;
      overflow:hidden;
    }
    </style>
    <span id="slot"></span>
  `;
}

class SrOnly extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template();
    const slot = this.shadowRoot.getElementById('slot');
    slot.append(...this.childNodes)
  }
}

customElements.define('sr-only', SrOnly);