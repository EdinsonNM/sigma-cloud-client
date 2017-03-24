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
		this.$resultsContainer = this.shadowRoot.querySelector('#results-container');
	}

	addResults(results){
		results.forEach( item => {
			let peperListItem = document.createElement('paper-list-item');
			peperListItem.setAttribute('primary-title', item.vNombre);
			peperListItem.setAttribute('secondary-title', `<b>UC:</b> ${item.uc}`);
			peperListItem.setAttribute('icon-left', 'menu');
			let paperLine = document.createElement('paper-line');
			this.$resultsContainer.appendChild(peperListItem);
			this.$resultsContainer.appendChild(paperLine);
		});
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
