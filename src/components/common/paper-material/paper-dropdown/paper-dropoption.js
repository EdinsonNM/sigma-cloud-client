import Template from '../../../../libs/template';
import html from './paper-dropoption.html'
import css from './paper-dropoption.css'
let templateObj = new Template(css,html);


export default class PaperDropOption extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.collectDataAttributes();
		this.initDOMRefs();
		this.addListeners();
	}

	addListeners(){
		this.$link.addEventListener('click', this.clickedOption.bind(this));
	}

	collectDataAttributes(){
		if ( this.attributes['value'] ) {
			this.value = this.attributes['value'].nodeValue;
		}
	}

	setSelected(){
		this.$link.classList.add('selected');
	}

	unsetSelected(){
		this.$link.classList.remove('selected');
	}

	clickedOption(event){
		event.preventDefault();
		document.dispatchEvent(new CustomEvent('dropOptionChanged',{
			detail: {
				label: this.innerText,
				value: this.value,
				target: this
			}
		}));
	}

	initDOMRefs(){
		this.$container = this.shadowRoot.querySelector("#container");
		this.$link = this.shadowRoot.querySelector("#link");
	}

	connectedCallback(){
	}

}

customElements.define('paper-dropoption', PaperDropOption);
