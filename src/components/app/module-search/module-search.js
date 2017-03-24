import '../../common/paper-material/paper-list';
import Template from '../../../libs/template';
import html from './module-search.html';
import css from './module-search.css';
let templateObj = new Template(css,html);

export default class ModuleSearch extends HTMLElement{

	constructor(){
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.innerHTML = templateObj.template;
			this.initDOMRefs();
			this.addListerners();
	}

	initDOMRefs(){

	}

	addListerners(){

	}

	connectedCallback(){

	}

	render(){

	}

}


const nameWebComponent="module-search";
const component=ModuleSearch;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
