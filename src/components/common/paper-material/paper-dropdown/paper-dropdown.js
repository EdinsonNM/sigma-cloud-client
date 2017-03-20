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
		// if ( this.attributes['bg-color'] ) {
		// 	this.bgColor = this.attributes['bg-color'].nodeValue;
		// }
		//
		//
		if ( this.attributes['label'] ) {
			this.label = this.attributes['label'].nodeValue;
		}

		if ( this.attributes['default-value'] ) {
			this.defaultValue = this.attributes['default-value'].nodeValue;
		}
	}

	addListeners(){
		const self = this;

		this.$list.addEventListener('animationend', ()=>{
			if ( this.active ) {
				this.active = false;
				this.$list.classList.remove('animated', 'fadeOut');
				this.$list.style.display = 'none';
			} else  {
				this.active = true;
				this.$list.classList.remove('animated', 'fadeIn');
				this.$list.style.display = '';
			}
		});

		this.$button.addEventListener("click",(e)=>{
			if ( this.active ) {
				this.$list.classList.add('animated', 'fadeOut');
			} else {
				this.$list.style.display = '';
				this.$list.classList.add('animated', 'fadeIn');
			}
		});

		// document.addEventListener('dropOptionChanged', (e)=> {
		// 	self.	changeLabel(e.detail.label);
		// 	self.active = false;
		// 	self.$list.classList.remove("mui--is-open");
		// });
	}

	initDOMRefs(){
		this.$button = this.shadowRoot.querySelector("#button");
		this.$list = this.shadowRoot.querySelector("#list");
		this.$label = this.shadowRoot.querySelector("#label");
		this.$value = this.shadowRoot.querySelector("#value-container");
	}

	changeLabel(label) {
		if ( label ) {
			this.$label.innerText = label;
		}
	}

	changeValue(value) {
		if ( value ) {
			this.$value.innerText = value;
		}
	}

	connectedCallback(){
		this.changeLabel(this.label);
		this.changeValue(this.defaultValue);
	}

}

customElements.define('paper-dropdown', PaperDropDown);
