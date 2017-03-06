import html from './paper-icon.html'
import css from './paper-icon.css'
import _ from 'underscore';
let template = createTemplate(html,css);



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
		this._shadowRoot = this.attachShadow({mode: 'open'});
		let preTemplate = _.template(template);
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
			data: {
				iconSizeClass: iconSizeClass,
				iconName: iconName,
				iconStyle: iconStyle
			}
		}
		this._shadowRoot.innerHTML =  preTemplate(data);
	}

	initDOMRefs(){
		this.icon = this.shadowRoot.querySelector(".material-icons")[0];
	}
}

customElements.define('paper-icon', PaperIcon);
