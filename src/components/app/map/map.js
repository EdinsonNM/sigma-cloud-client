import Template from '../../../libs/template';
import css from './map.css';
import html from './map.html';
import NiceMap from '../../common/nice-map/nice-map';
let templateObj = new Template(css,html);

export default class AppMap extends HTMLElement{

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
const nameWebComponent="app-map";

const component=AppMap;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
