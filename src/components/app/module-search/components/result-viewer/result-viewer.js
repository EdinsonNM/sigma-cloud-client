import Template from '../../../../../libs/template';
import html from './result-viewer.html';
import css from './result-viewer.css';
let templateObj = new Template(css,html);

export default class ResultViewer extends HTMLElement{

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
const nameWebComponent="result-viewer";

const component=ResultViewer;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
