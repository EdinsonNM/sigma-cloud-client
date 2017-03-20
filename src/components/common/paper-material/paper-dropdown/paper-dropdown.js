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
		this.countOptions();
		this.initDOMRefs();
		this.collectDataAttributes();
		this.addListeners();
		this.calculateHeight();
		this.active = false;
	}

	countOptions(){
		console.log(this.innerHTML);
		this.countOptions = (this.innerHTML.match(/<\/paper-dropoption>/g) || []).length;
	}

	collectDataAttributes(){

		if ( this.attributes['label'] ) {
			this.label = this.attributes['label'].nodeValue;
		}

		if ( this.attributes['default-value'] ) {
			this.defaultValue = this.attributes['default-value'].nodeValue;
		}
	}

	addListeners(){
		const self = this;

		this.$button.addEventListener("click",(e)=>{
			if ( this.active ) {
				this.$list.classList.add('hidden');
			} else {
				this.$list.classList.remove('hidden');
			}
			 this.active = ! this.active;
		});

		document.addEventListener("dropOptionChanged", (e)=>{
			console.log(e.detail);
			self.changeValue(e.detail.value, e.detail.label);
		});
	}

	initDOMRefs(){
		this.$button = this.shadowRoot.querySelector("#button");
		this.$list = this.shadowRoot.querySelector("#list");
		this.$label = this.shadowRoot.querySelector("#label");
		this.$valueLabel = this.shadowRoot.querySelector("#value-container");
	}

	changeLabel(label) {
		if ( label ) {
			this.$label.innerText = label;
		}
	}

	changeValue(value, label) {
		if ( value ) {
			this.value = value;
		}
		if ( label ) {
			this.$valueLabel.innerText = label;
		}
	}

	calculateHeight() {
		if ( this.countOptions && ! isNaN(this.countOptions)){
			this.$list.style.height = (this.countOptions * 25) + 'px';
		}
	}

	getValue(){
		return this.value;
	}

	connectedCallback() {
		this.changeLabel(this.label);
		this.changeValue(this.defaultValue);
	}

}

customElements.define('paper-dropdown', PaperDropDown);
