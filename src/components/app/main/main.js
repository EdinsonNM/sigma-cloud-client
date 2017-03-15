import AppCarouselChips from '../app-carousel-chips/app-carousel-chips';
import Template from '../../../libs/template';
import html from './main.html';
import css from './main.css';
let templateObj = new Template(css,html);

import '../module-pad/module-pad';
import '../module-inv/module-inv';
import '../module-pcr/module-pcr';
import Predio from '../../../models/predio';
export default class AppMain extends HTMLElement{
		constructor(){
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.innerHTML = templateObj.template;
			this.initDOMRefs();
			this.addListerners();
			this.showSubView=false;
		}

		initDOMRefs(){
			this.$chips = this.shadowRoot.querySelector('app-carousel-chips');
			this.$footer = this.shadowRoot.querySelector('.footer-container');
			this.$footerTitle = this.shadowRoot.querySelector('.footer-title');
			this.$footerLogo = this.shadowRoot.querySelector('.footer-logo');
			this.$footerDescription = this.shadowRoot.querySelector('.footer-description');
			this.$footerImg = this.shadowRoot.querySelector('#footer-img');
			this.$inputContainer = this.shadowRoot.querySelector('.input-container');
			this.$subviewContent = this.shadowRoot.querySelector('.subview-content');
			this.$map = this.shadowRoot.querySelector('#main-map');
			this.$inputSearch = this.shadowRoot.querySelector('#txtSearch');
		}

		addListerners(){
			this.$chips.addEventListener('changed-chip',this.showFooter.bind(this));
			this.$footerLogo.addEventListener('click',this.showSubView.bind(this));
			this.$inputSearch.addEventListener('keyup',this.searchPredio.bind(this));
		}

		searchPredio(e){
			let self = this;
			var key = e.keyCode;
			if (key === 13) {
				let predioService = new Predio();
				predioService.getAll({filter:e.currentTarget.value},(err,data)=>{
					console.log(err,data);
					debugger;
					//document.addEventListener("mapReady", function(e) {
						console.log('add dinamic markers...')
						data.forEach((item)=>{

							self.$map.addMarker({
								lat:parseFloat(item.latitude),
								lng:parseFloat(item.longitude)
							});
						});
					//});
				});
			}
		}

		showFooter(e){
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
			this.moduleName=e.detail.data.module;
			this.render();
		}
		showMainElements(val){
			if(!val){
				this.$chips.style.visibility='hidden';
				this.$inputContainer.style.visibility='hidden';
			}else{
				this.$chips.style.visibility='visible';
				this.$inputContainer.style.visibility='visible';
			}
		}

		showSubView(){
			//document.location.hash="/main/padron"
			this.showSubView=!this.showSubView;
			if(this.showSubView){
				this.$footer.classList.add('showAll');
				this.showMainElements(false);
				this.$subviewContent.classList.remove('hidden');
				animate(this.$footerLogo,'animated','rubberBand');
				let module = document.createElement(this.moduleName);
				this.$subviewContent.innerHTML='';
				this.$subviewContent.appendChild(module);
			}else{
				this.$footer.classList.remove('showAll');
				this.showMainElements(true);
				animate(this.$footerLogo,'animated','rubberBand');
				this.$subviewContent.classList.add('hidden');
			}

		}
		connectedCallback(){
			const self = this;
			document.addEventListener("mapReady", function(e) {
				self.$map.addMarker(
					{
						lat: -12.1417 ,
						lng: -77.0167
					}
				);

				self.$map.addMarker(
					{
						lat: -12.117880,
						lng: -77.033043,
					}
				)
			});
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
