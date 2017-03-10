import Template from '../../../../libs/template';
import html from './paper-icon.html'
import css from './paper-icon.css'
import _ from 'underscore';
let templateObj = new Template(css,html);

/**
 * PaperIcon class
 * Icon web component base on material desing icons
 * @attributes:
 * 		data-class : Aditional defined class to the icon element (tiny, small, medium, large)
 * 		data-size	: Icon's Size (12px, 12rem .. etc) overwrite data-class
 * 		data-color : Icon's color ( red, #FFF... etc)
 */
export default class PaperIcon extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.collectDataAttributes();
	}

	collectDataAttributes(){
		this.iconClass = null;
		this.iconSize	= null;
		this.iconColor	= null;

		if ( this.attributes['data-class'] ) {
			 this.iconClass = this.attributes['data-class'].nodeValue
		}

		if ( this.attributes['data-size'] ) {
			 this.iconSize = this.attributes['data-size'].nodeValue
		}

		if ( this.attributes['data-color'] ) {
			 this.iconColor = this.attributes['data-color'].nodeValue
		}

	}

	initDOMRefs(){
		this.$icon = this.shadowRoot.querySelector('#icon');
	}
	

	connectedCallback(){
		//SET CLASS
		if ( this.iconClass ) {
			this.$icon.className += " " + this.iconClass;
		}

		//SET SIZE
		if ( this.iconSize ) {
			this.$icon.style['font-size'] = this.iconSize;
		}

		//SET COLOR
		if ( this.iconColor ) {
			this.$icon.style['color'] = this.iconColor;
		}
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		if (attr == 'data-color') {
			this.$icon.style['color'] = newValue;
		}
	}

	static get observedAttributes() {
		return ['data-color'];
	}

}

customElements.define('paper-icon', PaperIcon);
