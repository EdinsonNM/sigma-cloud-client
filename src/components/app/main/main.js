import {lory} from 'lory.js';
 
import Template from '../../../libs/template';
import html from './main.html';
import css from './main.css';
let templateObj = new Template(css,html);
export default class AppMain extends HTMLElement{
		constructor(){
				super();
				let shadowRoot = this.attachShadow({mode: 'open'});
				shadowRoot.innerHTML = templateObj.template;
				this.data ={
						modules:[
							{
								name:'Padron'
							},
							{
								name:'Inventario'
							},
							{
								name:'PCR'
							},
							{
								name:'PDA'
							}
						]
				}
				this.initDOMRefs();

				

		}
		initDOMRefs(){
			this.$chipsContainer = this.shadowRoot.querySelector("#chip-container");
			this.$chipsTemplate = this.shadowRoot.querySelector(this.$chipsContainer.getAttribute('ref'));
		}

		connectedCallback(){
			let self=this;
			this.$chipsContainer.innerHTML = Template.render(this.$chipsTemplate.innerHTML,this.data.modules);
			document.addEventListener('DOMContentLoaded', function () {
				var multiSlides = self.shadowRoot.querySelector('.js_multislides');
			lory(multiSlides, {
				infinite: 4,
				slidesToScroll: 4
			});
			});
			

		}

}


const nameWebComponent="app-main";
const component=AppMain;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
