import Template from '../../../../libs/template';
import html from './paper-list-item.html'
import css from './paper-list-item.css'
let templateObj = new Template(css,html);


export default class PaperListItem extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.collectDataAttributes();

		this.addEventListener('click',e => {
			if(this.disabled){
				e.preventDefault();
				e.stopPropagation();
			}else{
							console.log('click item..');

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
	static get observedAttributes() {
		return ['primaryTitle','secondaryTitle','iconLeft','iconRight','disabled'];
	}

	collectDataAttributes(){


	}

	initDOMRefs(){
		this.$container = this.shadowRoot.querySelector('.item');
		this.$primaryTitle = this.shadowRoot.querySelector('.primary-content');
		this.$secondaryTitle = this.shadowRoot.querySelector('.secondary-content');
		this.$iconLeft = this.shadowRoot.querySelector('.icon-left');
		this.$iconRight = this.shadowRoot.querySelector('.icon-right');
	}
	

	connectedCallback(){
		this.render();
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		this.render();
	}

	set primaryTitle(val){
			this.setAttribute('primary-title',val||'');
	}
	get primaryTitle(){
		return this.getAttribute('primary-title');
	}

	set secondaryTitle(val){
			this.setAttribute('secondary-title',val||'');
	}
	get secondaryTitle(){
		return this.getAttribute('secondary-title');
	}

	set iconLeft(val){
		this.setAttribute('icon-left',val||'');
	}
	get iconLeft(){
		return this.getAttribute('icon-left');
	}
	set iconRight(val){
		this.setAttribute('icon-right',val||'');
	}
	get iconRight(){
		return this.getAttribute('icon-right');
	}
	set disabled(val){
		if(val) this.setAttribute('disabled','');
		else this.removeAttribute('disabled');
	}
	get disabled(){
		return this.hasAttribute('disabled');
	}
	get iconRight(){
		return this.getAttribute('icon-right');
	}

	render(){
		this.$primaryTitle.innerHTML = this.primaryTitle;
		this.$secondaryTitle.innerHTML = this.secondaryTitle;
		this.$iconLeft.innerHTML = this.iconLeft;
		this.$iconRight.innerHTML = this.iconRight;
	}



}

customElements.define('paper-list-item', PaperListItem);
