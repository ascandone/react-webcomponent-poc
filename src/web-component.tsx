/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import css from "./index.css";

class CustomWc extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    const rootDiv = document.createElement("div");
    shadowRoot.appendChild(rootDiv);

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css as any);
    this.shadowRoot!.adoptedStyleSheets = [sheet];

    ReactDOM.createRoot(rootDiv).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

customElements.define("example-wc", CustomWc);
