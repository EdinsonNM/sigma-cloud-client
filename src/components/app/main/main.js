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
			this.$footerLogo = this.shadowRoot.querySelector('.footer-logo');
			this.$footerDescription = this.shadowRoot.querySelector('.footer-description');
			this.$footerImg = this.shadowRoot.querySelector('#footer-img');
		}
		
		addListerners(){
			this.$chips.addEventListener('changed-chip',(e)=>{
				console.log("changed-chip",e);
				if(e.detail.active){
					this.$footer.classList.remove('hidden');
				
					animate(this.$footerLogo,'animated','zoomIn');

				}else{
					this.$footer.classList.add('hidden');
					
					animate(this.$footerLogo,'animated','zoomOut');
				}
				this.footerTitle=e.detail.data.title;
				this.footerDescription=e.detail.data.description;
				this.$footerImg.setAttribute("src",e.detail.data.logo);
				this.render();
			});

			this.$footerLogo.addEventListener('click',()=>{
				alert("Hola Sebas..el rey de los videojuegos XD");
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
