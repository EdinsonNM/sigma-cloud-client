import html from './nice-step.html'
import css from './nice-step.css'
import Template from '../../../libs/template';

let templateObj = new Template(css,html);

export default class NiceStep extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.collectDataAttributes();
	}

	initDOMRefs(){
		this.$stepContainer = this.shadowRoot.querySelector("#step-container");
	}

	collectDataAttributes(){
		this.index  = null;

		if ( this.attributes['data-index'] ) {
			 this.label = parseInt(this.attributes['data-index'].nodeValue);
		}
	}

	connectedCallback(){
		this.$stepContainer.innerHTML = this.innerHTML;
	}
}

customElements.define('nice-step', NiceStep);
