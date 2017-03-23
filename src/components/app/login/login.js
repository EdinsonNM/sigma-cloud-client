import Template from '../../../libs/template';
import html from './login.html';
import css from './login.css';
import '../logo/app-logo';
let templateObj = new Template(css,html);

export default class AppLogin extends HTMLElement {

		constructor(){
			super();
			this._shadowRoot = this.attachShadow({mode: 'open'});
			this._shadowRoot.innerHTML = templateObj.template;
			this.initDOMRefs();
			this.addListeners();
		}

		initDOMRefs(){
			this.$user = this._shadowRoot.querySelector("#txtUser");
			this.$password = this._shadowRoot.querySelector("#txtPassword");
			this.$btnLogin = this._shadowRoot.querySelector("#btnLogin");
		}

		addListeners(){
			this.$btnLogin.addEventListener("click", this.login.bind(this));
		}

		connectedCallback(){

		}

		login(e){
			let user = this.$user.value;
			let password = this.$password.value;
			//alert("Hola Mundo");
			document.location.hash="#/main/app";
			console.log(user,password);
		}

		render(){
			this._shadowRoot.innerHTML = template.render(this.data);
		}

}


const nameWebComponent="app-login";
const component=AppLogin;
customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
