import template from './login.html';

export default class AppLogin extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;

    }

}
const nameWebComponent="app-login";
const component=AppLogin;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});