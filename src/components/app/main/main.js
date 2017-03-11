import AppCarouselChips from '../app-carousel-chips/app-carousel-chips';
import Template from '../../../libs/template';
import html from './main.html';
import css from './main.css';
let templateObj = new Template(css,html);
export default class AppMain extends HTMLElement{
		constructor(){
				super();
				let shadowRoot = this.attachShadow({mode: 'open'});
				shadowRoot.innerHTML = templateObj.template;
				this.initDOMRefs();	
				this.addListerners();		

		}
		initDOMRefs(){
			this.$chips = this.shadowRoot.querySelector('app-carousel-chips');
			this.$footer = this.shadowRoot.querySelector('.footer-container');
			this.$footerTitle = this.shadowRoot.querySelector('.footer-title');
			this.$footerDescription = this.shadowRoot.querySelector('.footer-description');
		}
		addListerners(){
			this.$chips.addEventListener('changed-chip',(e)=>{
				console.log("chnaged-chip",e);
				this.footerTitle=e.detail.data.title;
				this.footerDescription=e.detail.data.description;
				this.render()
			});
		}


		connectedCallback(){

		}
		render(){
			this.$footerTitle.innerHTML=this.footerTitle;
			this.$footerDescription.innerHTML=this.footerDescription;
		}

}


const nameWebComponent="app-main";
const component=AppMain;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
