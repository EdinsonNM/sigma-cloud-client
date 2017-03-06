import html from './nice-stepper.html'
import css from './nice-stepper.css'
// import _ from 'underscore';
import PaperIcon from '../paper-material/paper-icon/paper-icon';

let template = createTemplate(html,css);

export default class Stepper extends HTMLElement {

	constructor(){
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		// console.log(this.attributes, this.attributes['data-name'].nodeValue);
		this._shadowRoot.innerHTML = template;
		// this.addListeners();
		// this.initDOMRefs()
	}

	initDOMRefs(){
		// this.$container = this.shadowRoot.querySelector("#paper-button");
	}
}

customElements.define('nice-stepper', Stepper);
