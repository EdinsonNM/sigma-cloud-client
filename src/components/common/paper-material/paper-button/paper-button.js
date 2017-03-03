import template from './paper-button.html'
export default class PaperButton extends HTMLElement {
	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this.addListeners();
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
		this.shadowRoot.querySelector("#paper-button").appendChild(div);
		div.style.top = `${y - div.clientHeight/2}px`;
		div.style.left = `${x - div.clientWidth/2}px`;
		div.style.backgroundColor = getComputedStyle(this).color;
		div.classList.add('run');
		div.addEventListener('transitionend', e => div.remove());
	}
	connectedCallback() {
		 this.color = this.getAttribute('color');
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

}

customElements.define('paper-button',PaperButton,{extends:'button'});
