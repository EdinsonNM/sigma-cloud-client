import Template from '../../../libs/template';
import html from './app-modal.html'
import css from './app-modal.css'
import _ from 'underscore';
let templateObj = new Template(css,html);


export default class AppModal extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.addListeners();
	}

	initDOMRefs(){
		this.$modalContainer = this.shadowRoot.querySelector('.modal');
		//this.$modalAnimation = this.shadowRoot.querySelector('.modal-effect');
		this.$close = this.shadowRoot.querySelector('paper-button');
		this.$title = this.shadowRoot.querySelector('.title');
		this.$content = this.shadowRoot.querySelector('.content');
	}
	addListeners(){
		this.$close.addEventListener('click',()=>{
			this.open = false;
		})
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		this.render();
	}

	static get observedAttributes() {
		return ['open','title'];
	}

	set open(val){
		if(val)
			this.setAttribute('open',val);
		else
			this.removeAttribute('open');
	}
	get open(){
		return this.hasAttribute('open');
	}
	set title(val){
		this.setAttribute('title',val);
	}
	get title(){
		return this.getAttribute('title');
	}

	render(){
		if(this.open){
			this.$modalContainer.classList.add('visible');
			//this.$modalAnimation.classList.add('ripple');
			let divAnimation = document.createElement('div');
			divAnimation.className='modal-effect';
			this.$modalContainer.append(divAnimation);
			divAnimation.classList.add('ripple');
			setTimeout(()=>{
				divAnimation.remove();
			},2000)
		}else{
			this.$modalContainer.classList.remove('visible');
		}
		this.$title.innerHTML = this.title;
	}

	loadComponent(component){
		let cmp = document.createElement(component);
		this.$content.innerHTML='';
		this.$content.append(cmp);
	}
	

	

}

customElements.define('app-modal', AppModal);
