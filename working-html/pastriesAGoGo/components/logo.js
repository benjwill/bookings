class logo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <a href="index.html"><img src="../static/images/pastriesAGOGOLogo.png" alt="" style="width: 20vw; position: relative; top:10vh;"></a>
        `;
    }
  }
  
  customElements.define('logo-component', logo);