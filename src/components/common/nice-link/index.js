import html from './index.html'
import css from './main.css'
import _ from 'underscore';

let template = createTemplate(html,css);

export default class NiceLink extends HTMLElement {

	constructor(){
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		var preTemplate = _.template(template);
		console.log(this.attributes, this.attributes['data-name'].nodeValue);
		this._shadowRoot.innerHTML = preTemplate({linkID: 1, linkName: this.attributes['data-name'].nodeValue});
		// this.addListeners();
		// this.initDOMRefs()
	}

	initDOMRefs(){
		// this.$container = this.shadowRoot.querySelector("#paper-button");
	}
}

customElements.define('nice-link', NiceLink);
