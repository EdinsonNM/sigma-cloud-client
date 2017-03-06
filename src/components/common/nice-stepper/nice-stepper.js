import html from './nice-stepper.html'
import css from './nice-stepper.css'
import Template from '../../../libs/template';
import PaperIcon from '../paper-material/paper-icon/paper-icon';

let templateObj = new Template(css,html);

export default class Stepper extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
	}

	initDOMRefs(){
		// this.$container = this.shadowRoot.querySelector("#paper-button");
	}

	connectedCallback(){
		// this.$chipsContainer.innerHTML = Template.render(this.$chipsTemplate.innerHTML,this.data.modules);
	}
}

customElements.define('nice-stepper', Stepper);
