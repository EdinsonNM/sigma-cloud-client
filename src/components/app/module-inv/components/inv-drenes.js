import Template from '../../../../libs/template';
import html from './inv-drenes.html'
import css from './inv-drenes.css'
import _ from 'underscore';
let templateObj = new Template(css,html);


export default class InvDrenes extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.addListeners();
	}

	initDOMRefs(){
	
	}
	addListeners(){
		
	}

	attributeChangedCallback(attr, oldValue, newValue) {
	}

	static get observedAttributes() {
		return [];
	}

	

	render(){
		
	}

	
	

}

customElements.define('inv-drenes', InvDrenes);
