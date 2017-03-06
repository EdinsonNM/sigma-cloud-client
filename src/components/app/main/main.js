import html from './main.html';
import css from './main.css';
let template = createTemplate(html,css);

export default class AppMain extends HTMLElement{
		constructor(){
				super();
				let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;

		}

}


const nameWebComponent="app-main";
const component=AppMain;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
