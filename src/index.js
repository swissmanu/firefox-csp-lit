import { css, html, LitElement } from "lit";

class Button extends LitElement {
  static styles = css`
    button {
      background-color: red;
    }
  `;

  render() {
    return html`<button>Some Button</button>`;
  }
}
customElements.define("demo-button", Button);
