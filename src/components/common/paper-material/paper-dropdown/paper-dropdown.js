import Template from '../../../../libs/template';
import html from './paper-dropdown.html'
import css from './paper-dropdown.css'
import _ from 'underscore';
let templateObj = new Template(css,html);


export default class PaperDropDown extends HTMLElement {

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

}

customElements.define('paper-dropdown', PaperDropDown);
