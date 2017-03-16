import Options from '../module-options/module-options';import Template from '../../../libs/template';
import html from './module-inv.html';
import css from './module-inv.css';
let templateObj = new Template(css,html);
export default class ModuleInv extends HTMLElement{
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


const nameWebComponent="module-inv";
const component=ModuleInv;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
