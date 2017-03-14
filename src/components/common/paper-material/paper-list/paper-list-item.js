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
	}
	static get observedAttributes() {
		return ['primaryTitle','secondaryTitle','iconLeft','iconRight'];
	}

	collectDataAttributes(){


	}

	initDOMRefs(){
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

	render(){
		this.$primaryTitle.innerHTML = this.primaryTitle;
		this.$secondaryTitle.innerHTML = this.secondaryTitle;
		this.$iconLeft.innerHTML = this.iconLeft;
		this.$iconRight.innerHTML = this.iconRight;
	}



}

customElements.define('paper-list-item', PaperListItem);
