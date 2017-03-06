import Template from '../../../libs/template';
import html from './index.html';
import css from './main.css';
import NiceLink from '../../common/nice-link';
import NiceSteper from '../../common/nice-stepper/nice-stepper';
import _ from 'underscore';
let templateObj = new Template(css,html);

export default class AppProfile extends HTMLElement{

		constructor(){
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			var preTemplate = _.template(templateObj.template);
			var _links = [
				{
					id: 1,
					name: 'test'
				},
				{
					id: 2,
					name: 'test2'
				}
			]
			shadowRoot.innerHTML =  preTemplate({data: _links});
		}

}
const nameWebComponent="app-profile";

const component=AppProfile;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
