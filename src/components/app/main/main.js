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
		}
		animatianimateFooter(element,...params){

			for (let i = 0, length = params.length; i < length; i++) {
				element.classList.add(params[i]);
			}
			element.addEventListener('animationend',()=>{
				for (let i = 0, length = params.length; i < length; i++) {
					element.classList.remove(params[i]);
				}

			});
		}
		addListerners(){
			this.$chips.addEventListener('changed-chip',(e)=>{
				console.log("changed-chip",e);
				if(e.detail.active){
					this.$footer.classList.remove('hidden');
					/*this.$footerLogo.classList.add('animated','zoomIn');
					setTimeout(()=>{
						this.$footerLogo.classList.remove('animated','zoomIn');
					},1000);*/
					animate(this.$footerLogo,'animated','zoomIn');

				}else{
					this.$footer.classList.add('hidden');
					/*this.$footerLogo.classList.add('animated','zoomOut');
					setTimeout(()=>{
						this.$footerLogo.classList.remove('animated','zoomOut');
					},1000);
					*/
					animate(this.$footerLogo,'animated','zoomOut');
				}
				this.footerTitle=e.detail.data.title;
				this.footerDescription=e.detail.data.description;
				
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
