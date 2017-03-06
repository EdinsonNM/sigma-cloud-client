import Template from '../../../libs/template';
import html from './splash.html';
import css from './splash.css';
let templateObj = new Template(css,html);
export default class AppSplash extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;

    }
    connectedCallback() {
        setTimeout(function() {
            document.location.hash="#/login";
        }, 4000);
	}

}
const nameWebComponent="app-splash";
const component=AppSplash;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});