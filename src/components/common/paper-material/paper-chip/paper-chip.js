import Template from '../../../../libs/template';
import html from './paper-chip.html';
import css from './paper-chip.css';
let templateObj = new Template(css,html);
export default class PaperChip extends HTMLElement {
	
	constructor(){
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.addListeners();
	}

	initDOMRefs(){
			this.$label = this._shadowRoot.querySelector('.md-chip-text');
			this.$chip = this._shadowRoot.querySelector('.md-chip');
			this.$circle = this._shadowRoot.querySelector('.md-chip-text');
			this.$icon = this._shadowRoot.querySelector('#icon');
	}

	addListeners(){

	}

	connectedCallback() {
		this.label = this.getAttribute('label');
		this.icon = this.getAttribute('icon');
	}

	set label(val){
		if(val){
			this.setAttribute('label',val);
			this.$label.innerHTML = val;
		}else{
			this.removeAttribute('label');
		}
	}

	get label(){
		return this.getAttribute('label');
	}

	set icon(val){
		if(val){
			this.setAttribute('icon',val);
			this.$icon.innerHTML = val;
		}
	}
	get icon(){
		return this.getAttribute('icon')
	}
}

try{
	customElements.define('paper-chip', PaperChip, {extends:'input'});
}catch(e){
	console.log("paper-chip was registered");
}
