import html from './splash.html'
import css from './splash.css'
let template = createTemplate(html,css);

export default class AppSplash extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;

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