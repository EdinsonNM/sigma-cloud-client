import html from './paper-button.html'
import css from './paper-button.css'
let template = createTemplate(html,css);
export default class PaperButton extends HTMLElement {
	constructor(){
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.innerHTML = template;
		
		this.addListeners();
		this.initDOMRefs()
	}
	initDOMRefs(){
		this.$container = this.shadowRoot.querySelector("#paper-button");
	}
	
	addListeners(){
		this.addEventListener('keydown',e=>{
			if(e.keyCode===32|| e.keyCode===13){
				this.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
			}
		});
		this.addEventListener('click',e => {
			if(this.disabled){
				e.preventDefault();
				e.stopPropagation();
			}else{
				this.drawRipple(e.offsetX, e.offsetY);
			}
		});
	}
	drawRipple(x, y) {
		let div = document.createElement('div');
		div.classList.add('ripple');
		this.$container.appendChild(div);
		div.style.top = `${y - div.clientHeight/2}px`;
		div.style.left = `${x - div.clientWidth/2}px`;
		div.style.backgroundColor = getComputedStyle(this).color;
		div.classList.add('run');
		div.addEventListener('transitionend', e => div.remove());
	}
	connectedCallback() {
		 this.color = this.getAttribute('color');
		 this.fullwidth= this.getAttribute('fullwidth');
		 this.bgcolor= this.getAttribute('bgcolor');
	}
	disconnectedCallback() {}
	attributeChangedCallback(attrName, oldVal, newVal) {}
	set raised(val) {
		if (val) 	this.setAttribute('raised', '');
 		else 	this.removeAttribute('raised');
	}
	get raised() {
		return this.hasAttribute('raised');
	}
	get disabled() {
		return this.hasAttribute('disabled');
	}
	set disabled(val) {
		 if (val)	this.setAttribute('disabled', '');
		 else this.removeAttribute('disabled');
 	}
	set color(val){
		 this.style.color = val;
		 this.setAttribute('color',val);
	 }
	 get color(){
		 return this.getAttribute('color');
	 }

	set fullwidth(val){
		 if (val){
			this.setAttribute('fullwidth', '');
			this.style.width="100%";
		 } else{
			this.removeAttribute('fullwidth');
		 }	
 		
	 }
	 get fullwidth(){
		 return this.hasAttribute('fullwidth');
	 }

	 set bgcolor(val) {
		if (val){
			this.setAttribute('bgcolor', val);
			this.style.backgroundColor=val;
		}
 		else 	
		 this.removeAttribute('bgcolor');
	}
	get bgcolor() {
		return this.hasAttribute('bgcolor');
	}

}

customElements.define('paper-button',PaperButton,{extends:'button'});
