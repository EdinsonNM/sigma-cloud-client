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
		this.addListeners();
		this.active = false;
	}

	collectDataAttributes(){
		if ( this.attributes['bg-color'] ) {
			this.bgColor = this.attributes['bg-color'].nodeValue;
		}

		if ( this.attributes['label'] ) {
			this.label = this.attributes['label'].nodeValue;
		}
	}

	addListeners(){
		this.$button.addEventListener("click",(e)=>{
			if ( this.active ) {
				this.active = false;
				this.$list.classList.remove("mui--is-open");
			} else {
				this.active = true;
				this.$list.className += " mui--is-open"
			}
		})
	}

	initDOMRefs(){
		this.$button = this.shadowRoot.querySelector("#button");
		this.$list = this.shadowRoot.querySelector("#list");
	}

	connectedCallback(){
		if ( this.bgColor ) {
			this.$button.style = "background-color: " + this.bgColor;
		}

		if ( this.label ) {
			let span = document.createElement('span');
			let text = document.createTextNode(this.label+ ' ');
			span.setAttribute('class', 'mui-caret');
			this.$button.innerHTML = "";
			this.$button.appendChild(text);
			this.$button.appendChild(span);
		}

	}

}

customElements.define('paper-dropdown', PaperDropDown);
