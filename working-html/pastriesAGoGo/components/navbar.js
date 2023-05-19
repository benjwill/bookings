class navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        var url = window. location. pathname;
        var filename = url.substring(url.lastIndexOf('/')+1);
        this.innerHTML = `
            <style>
                .nav-item{
                    font-family: 'Roboto Slab', serif;
                    font-size: 2.5vh;
                }
                .active{
                    background-color:#3485b3;
                    border-radius:1vh;
                }
                .nav-link{
                    color:black;
                }
                a:hover{
                    color:#F69D9A;
                }
            </style>
            <ul class="nav nav-pills fixed-top border" style="background-color: #98cdeb; padding-left: 1vw; padding: 1vh;">
                <li class="nav-item ${((filename==="index.html") ? `active` : '')}">
                    <a class="nav-link" href="index.html" >Home</a>
                </li>
                <li class="nav-item ${((filename==="about.html") ? `active` : '')}">
                    <a class="nav-link" href="about.html" >About us</a>
                </li>
                <li class="nav-item ${((filename==="menu.html") ? `active` : '')}">
                    <a class="nav-link" href="menu.html">Menu</a>
                </li>
                <li class="nav-item ${((filename==="bakery.html") ? `active` : '')}">
                    <a class="nav-link" href="#">Bakery</a>
                </li>
                <li class="nav-item ${((filename==="catering.html") ? `active` : '')}">
                    <a class="nav-link" href="#">Catering</a>
                </li>
                <li class="nav-item ${((filename==="contact.html") ? `active` : '')}">
                   <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        `;
    }
  }
  
  customElements.define('navbar-component', navbar);
