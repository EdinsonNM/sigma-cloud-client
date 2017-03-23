import AppCarouselChips from '../app-carousel-chips/app-carousel-chips';
import Template from '../../../libs/template';
import html from './main.html';
import css from './main.css';
let templateObj = new Template(css,html);

import '../module-pad/module-pad';
import '../module-inv/module-inv';
import '../module-pcr/module-pcr';
import Predio from '../../../models/predio';
import Modules from '../../../libs/modules';
import Modal from '../modal/app-modal';
export default class AppMain extends HTMLElement{
		constructor(){
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.innerHTML = templateObj.template;
			this.initDOMRefs();
			this.addListerners();
			this.state={
				showFooter:false,
				showFooterAll:false,
			};
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
			this.$chips.addEventListener('changed-chip',e=>{
				this.module = e.detail;
				this.state.showFooter = e.detail.active;
				this.render();
			});
			this.$footerLogo.addEventListener('click',e=>{
				this.state.showFooterAll = !this.state.showFooterAll;
				this.render();
			});
			document.querySelector('body').addEventListener('module-options-changed',(e)=>{
				this.module = e.detail;
				this.state.showFooter = true;
				this.state.showFooterAll = true;
				this.render();
				//this.$chips.selectedIndex = this.module.data.index;
			});
			this.$inputSearch.addEventListener('keyup',this.searchPredio.bind(this));

			window.addEventListener("hashchange", this.ChangeSubView.bind(this), false);
		}

		ChangeSubView(){
				var path = document.location.hash.split('/');
				if(path.length===3){
					var name = path.pop();
					if(Modules.hasOwnProperty(name)){
						this.moduleInit = name;
					}else{
						//this.$chips.unSelectAll();
						if(this.module){
							this.$chips.selectedIndex = this.module.data.index;
						}
					}
					this.render();
				}else{
					if(path.length===2){
						this.render();
					}
				}

				
		}


		render(){
			if(this.state.showFooter){
				this.$footer.classList.remove('hidden');
				animate(this.$footerLogo,'animated','zoomIn');
				this.$footerImg.setAttribute("src",this.module.data.logo);
				this.$footerTitle.innerHTML=this.module.data.title;
				this.$footerDescription.innerHTML=this.module.data.description;

			}else{
				this.$footer.classList.add('hidden');
				animate(this.$footerLogo,'animated','zoomOut');
			}

			if(this.state.showFooterAll){
				
				this.$footer.classList.add('showAll');
				this.$chips.style.visibility='hidden';
				this.$inputContainer.style.visibility='hidden';
				this.$subviewContent.innerHTML='';
				let moduleApp = document.createElement(this.module.data.module);
				this.$subviewContent.appendChild(moduleApp);
				this.$subviewContent.classList.remove('hidden');
				document.location.hash = `/main/${this.module.name}`;

			}else{
				this.$footer.classList.remove('showAll');
				this.$chips.style.visibility='visible';
				this.$inputContainer.style.visibility='visible';
				this.$subviewContent.classList.add('hidden');
				document.location.hash = `/main/app`;
	
			}
			
		}

		searchPredio(e){
			let self = this;
			var key = e.keyCode;
			if (key === 13) {
				let predioService = new Predio();
				predioService.getAll({filter:e.currentTarget.value},(err,data)=>{
					console.log(err,data);
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

		static get observedAttributes() {
            return ['selectedIndex'];
        }
		attributeChangedCallback() {
            this.render();
        }
		connectedCallback(){
			this.ChangeSubView();
		}

		set moduleInit(val){
			if(Modules.hasOwnProperty(val)){
				this.setAttribute('moduleInit',val);
				this.state.showFooter=true;
				this.state.showFooterAll=true;		
				this.module = {name:val,data:Modules[val],active:true};
			}else{
				this.setAttribute('moduleInit','app');
				if(this.module){
					this.state.showFooter=true;
					this.state.showFooterAll=false;		
				
				}

			}
		}
		get moduleInit(){
			this.getAttribute('moduleInit');
		}

	
	


}


const nameWebComponent="app-main";
const component=AppMain;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
