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
 * 		data-size  : Icon's Size (12px, 12rem .. etc) overwrite data-class
 * 		data-color : Icon's color ( red, #FFF... etc)
 */
export default class PaperIcon extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
	}

	initDOMRefs(){
		this.$iconContainer = this.shadowRoot.querySelector("#icon-container");
		this.$iconTemplate = this.shadowRoot.querySelector(this.$iconContainer.getAttribute('ref'));
	}

	connectedCallback(){
		let iconName = this.innerHTML;
		let iconSizeClass = null;
		let iconStyle = "";

		if ( this.attributes['data-class'] ) {
			 iconSizeClass = this.attributes['data-class'].nodeValue
		}

		if ( this.attributes['data-size'] ) {
			iconStyle += (
				" font-size:" + this.attributes['data-size'].nodeValue + " !important;"
			);
			if ( iconSizeClass && iconSizeClass.length) {
				iconSizeClass = null;
			}
		}

		if ( this.attributes['data-color'] ) {
			iconStyle += " color:" + this.attributes['data-color'].nodeValue;
		}

		let data = {
			iconSizeClass: iconSizeClass,
			iconName: iconName,
			iconStyle: iconStyle
		}
		this.$iconContainer.innerHTML = Template.render(
			this.$iconTemplate.innerHTML,
			data
		);
	}
}

customElements.define('paper-icon', PaperIcon);
