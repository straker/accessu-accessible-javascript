function template({ name, alt }) {
  return `
    <style>
    img {
      display: block;
      padding: 0;
      margin: 0;
      width: 1.2rem;
      height: 1.2rem;
    }
    </style>
    <img src="/src/assets/${name}.svg" alt="${alt}"/>
  `;
}

class IconImg extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template({
      name: this.getAttribute('name'),
      alt: this.getAttribute('alt')
    });
  }
}

customElements.define('icon-img', IconImg);