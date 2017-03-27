import '../../common/paper-material/paper-list';
import Template from '../../../libs/template';
import html from './module-search.html';
import css from './module-search.css';
import './components/result-viewer/result-viewer';

let templateObj = new Template(css,html);

export default class ModuleSearch extends HTMLElement{

	constructor(){
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.innerHTML = templateObj.template;
			this.initDOMRefs();
			this.addListerners();
			this.items = [];
	}


	initDOMRefs(){
		this.$resultsContainer = this.shadowRoot.querySelector('#results-container');
		this.$modal = this.shadowRoot.querySelector('app-modal');
		this.$items = this.shadowRoot.querySelectorAll('paper-list-item');
	}

	addResults(results){
		this.items = results;
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

	ChangeSubView(){
		const path = document.location.hash.split('/');
		if(path.length===3){
			this.$modal.open = false;
		}
	}

	addListerners(){
		this.$items.forEach((item, index)=>{
			item.addEventListener('click',(e)=>{

				this.$modal.open=true;
				this.$modal.title =item.primaryTitle;
				setTimeout(()=>{
					this.$modal.loadComponent('result-viewer');
					document.location.hash += '/' + 'result-viewer/' + this.items[index].uc;
				},1000);
			});
		});
		window.addEventListener("hashchange", this.ChangeSubView.bind(this), false);
	}

	connectedCallback(){
		this.initDOMRefs();
		this.addListerners();
	}

}


const nameWebComponent="module-search";
const component=ModuleSearch;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
