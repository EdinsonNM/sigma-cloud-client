import Template from '../../../../libs/template';
import html from './paper-dropoption.html'
import css from './paper-dropoption.css'
let templateObj = new Template(css,html);


export default class PaperDropOption extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.addListeners();
	}

	addListeners(){
		this.$link.addEventListener('click', this.clickedOption.bind(this));
	}

	clickedOption(event){
		event.preventDefault();
		document.dispatchEvent(new CustomEvent('dropOptionChanged',{
			detail: {
				label: this.innerText
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
