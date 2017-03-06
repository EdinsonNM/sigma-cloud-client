import html from './index.html';
import css from './main.css';
import NiceLink from '../../common/nice-link';
import _ from 'underscore';
let template = createTemplate(html,css);

export default class AppProfile extends HTMLElement{

		constructor(){
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			var preTemplate = _.template(template);
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
