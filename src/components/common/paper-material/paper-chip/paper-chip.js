import html from './paper-chip.html'
import css from './paper-chip.css'
let template = createTemplate2(html,css);
export default class PaperChip extends HTMLElement {
	
	constructor(){
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.innerHTML = template;
		this.initDOMRefs();
		this.addListeners();
	}

	initDOMRefs(){
			this.$label = this._shadowRoot.querySelector('.md-chip-text');
	}

	addListeners(){

	}

	connectedCallback() {
		this.label = this.getAttribute('label');
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
}

try{
	customElements.define('paper-chip', PaperChip, {extends:'input'});
}catch(e){
	console.log("paper-chip was registered");
}
