import PaperInput from '../../common/paper-material/paper-input/paper-input'

import html from './login.html';
import css from './login.css';
let template = createTemplate(html,css);

export default class AppLogin extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.innerHTML = template;
        this.initDOMRefs();
        this.addListeners();
    }
    initDOMRefs(){
        this.$user = this._shadowRoot.querySelector("#txtUser");
        this.$password = this._shadowRoot.querySelector("#txtPassword");
        this.$btnLogin = this._shadowRoot.querySelector("#btnLogin");
    }
    addListeners(){
        this.$btnLogin.addEventListener("click",this.login.bind(this))
    }
    connectedCallback(){
        
    }
    login(e){
        let user = this.$user.value;
        let password = this.$password.value;
        //alert("Hola Mundo");
        console.log(user,password);
    }

}


const nameWebComponent="app-login";
const component=AppLogin;
customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});