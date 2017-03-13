import AppCarouselChips from '../app-carousel-chips/app-carousel-chips';
import Template from '../../../libs/template';
import html from './module-pad.html';
import css from './module-pad.css';
let templateObj = new Template(css,html);
export default class ModulePad extends HTMLElement{
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


const nameWebComponent="module-pad";
const component=ModulePad;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
