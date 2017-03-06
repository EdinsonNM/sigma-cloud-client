import Template from '../../../libs/template';
import html from './index.html';
import css from './main.css';
import NiceSteper from '../../common/nice-stepper/nice-stepper';
let templateObj = new Template(css,html);

export default class AppProfile extends HTMLElement{

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
	}

	initDOMRefs(){
		// this.$chipsContainer = this.shadowRoot.querySelector("#chip-container");
		// this.$chipsTemplate = this.shadowRoot.querySelector(this.$chipsContainer.getAttribute('ref'));
	}

	connectedCallback(){
		// this.$chipsContainer.innerHTML = Template.render(this.$chipsTemplate.innerHTML,this.data.modules);
	}

}
const nameWebComponent="app-profile";

const component=AppProfile;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
