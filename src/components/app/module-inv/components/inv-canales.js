import Template from '../../../../libs/template';
import html from './inv-canales.html'
import css from './inv-canales.css'
import _ from 'underscore';
let templateObj = new Template(css,html);


export default class InvCanales extends HTMLElement {

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

customElements.define('inv-canales', InvCanales);
