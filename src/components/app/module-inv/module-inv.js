import Options from '../module-options/module-options';import Template from '../../../libs/template';
import html from './module-inv.html';
import css from './module-inv.css';
let templateObj = new Template(css,html);

import './components/inv-canales';
import './components/inv-drenes';
export default class ModuleInv extends HTMLElement{
		constructor(){
				super();
				let shadowRoot = this.attachShadow({mode: 'open'});
				shadowRoot.innerHTML = templateObj.template;
				this.initDOMRefs();	
				this.addListerners();		

		}
		initDOMRefs(){
			this.$items = this.shadowRoot.querySelectorAll('paper-list-item');
			this.$modal = this.shadowRoot.querySelector('app-modal');
		}
		
		addListerners(){
			this.$items.forEach((item)=>{
				item.addEventListener('click',(e)=>{

					this.$modal.open=true;
					this.$modal.title =item.primaryTitle;
					setTimeout(()=>{
						this.$modal.loadComponent(item.getAttribute('cmp'));
						//document.location.hash += '/'+item.getAttribute('cmp');
					},1000);
					
				});
			});
			window.addEventListener("hashchange", this.ChangeSubView.bind(this), false);
	
		}

		ChangeSubView(){
				var path = document.location.hash.split('/');
				if(path.length===3){
					this.$modal.open = false;
				}
		
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
