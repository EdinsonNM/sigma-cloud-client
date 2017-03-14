import AppCarouselChips from '../app-carousel-chips/app-carousel-chips';
import '../../common/paper-material/paper-list';
import Template from '../../../libs/template';
import html from './module-pcr.html';
import css from './module-pcr.css';
let templateObj = new Template(css,html);
export default class ModulePcr extends HTMLElement{
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


const nameWebComponent="module-pcr";
const component=ModulePcr;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
