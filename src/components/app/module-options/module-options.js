import '../../common/paper-material/paper-list';
import Template from '../../../libs/template';
import html from './module-options.html';
import css from './module-options.css';
let templateObj = new Template(css,html);
import CustomEvent from 'custom-event';
import Modules from '../../../libs/modules';
export default class ModuleOptions extends HTMLElement{
		constructor(){
				super();
				let shadowRoot = this.attachShadow({mode: 'open'});
				shadowRoot.innerHTML = templateObj.template;
				this.initDOMRefs();	
				this.addListerners();	

                this.modules = Modules;
            	

		}
		initDOMRefs(){
            this.$buttons = this.shadowRoot.querySelectorAll('paper-button');
		}
		
		addListerners(){
			this.$buttons.forEach((item,index)=>{
                item.addEventListener('click',e=>{
                    this.selectedIndex=index;
                    this.render();
                    let name = e.currentTarget.id;
                    document.querySelector('body').dispatchEvent(new CustomEvent('module-options-changed',{
                        detail:{
                            name: name,
                            active:true,
                            data:this.modules[name]
                        }
                    }));
                });
            });
		}

        render(){
            if(parseInt(this.selectedIndex)>=0){
                this.$buttons.forEach((item)=>{
                    item.classList.remove('active');
                });
                this.$buttons[this.selectedIndex].classList.add('active');

            }
        }

        static get observedAttributes() {
            return ['selectedIndex'];
        }

        set selectedIndex(val){
            this.setAttribute('selectedIndex',val);

        }

        get selectedIndex(){
            return this.getAttribute('selectedIndex');
        }



		connectedCallback(){
           this.render();
		}
		attributeChangedCallback() {
            this.render();
        }

}


const nameWebComponent="module-options";
const component=ModuleOptions;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
