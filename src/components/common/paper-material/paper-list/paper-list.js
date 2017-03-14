import Template from '../../../../libs/template';
import html from './paper-list.html'
import css from './paper-list.css'
let templateObj = new Template(css,html);


export default class PaperList extends HTMLElement {

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

customElements.define('paper-list', PaperList,{extends:'ul'});
