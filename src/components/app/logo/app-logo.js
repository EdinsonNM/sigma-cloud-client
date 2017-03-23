import Template from '../../../libs/template';
import html from './app-logo.html'
import css from './app-logo.css'
import _ from 'underscore';
let templateObj = new Template(css,html);


export default class AppLogo extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;

	}

	

}

customElements.define('app-logo', AppLogo);
