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
	static get observedAttributes() {
		return ['active'];
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
		this.activeColor=this.getAttribute('activeColor')||'purple';
		this.defaultColor = this.getAttribute('defaultColor')||'white';
		this.$chip.classList.add(this.defaultColor);
		this.active=this.hasAttribute('active');
		this.render();
	}
	render(){
		if(this.active)
			this.$chip.classList.add(this.activeColor);
		else
			this.$chip.classList.remove(this.activeColor);
	}

	attributeChangedCallback() {
		this.render();
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

	set defaultColor(val){
		if(val){
			this.setAttribute('defaultColor',val);
		}
	}
	get defaultColor(){
		return this.getAttribute('defaultColor');
	}
	set activeColor(val){
		if(val){
			this.setAttribute('activeColor',val);
			
		}
	}
	get activeColor(){
		return this.getAttribute('activeColor');
	}

	set active(val){
		if(val){
			this.setAttribute('active','');
		}else{
			this.removeAttribute('active');
		}
		
	}
	get active(){
		return this.hasAttribute('active');
	}

}

try{
	customElements.define('paper-chip', PaperChip, {extends:'input'});
}catch(e){
	console.log("paper-chip was registered");
}
