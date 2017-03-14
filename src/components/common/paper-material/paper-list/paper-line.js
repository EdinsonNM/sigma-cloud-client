import Template from '../../../../libs/template';
import html from './paper-line.html'
import css from './paper-line.css'
let templateObj = new Template(css,html);


export default class PaperLine extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.collectDataAttributes();
	}

	collectDataAttributes(){


	}

	initDOMRefs(){
	}
	

	connectedCallback(){

	}

	attributeChangedCallback(attr, oldValue, newValue) {
	
	}



}

customElements.define('paper-line', PaperLine,{extends:'ul'});
