import {lory} from 'lory.js';
import Template from '../../../libs/template';
import html from './app-carousel-chips.html';
import css from './app-carousel-chips.css';
let templateObj = new Template(css,html);
import CustomEvent from 'custom-event';
import Modules from '../../../libs/modules';

export default class AppCarouselChips extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML = templateObj.template;
        this.initDOMRefs();
        this.addListeners();
        this.modules = Modules;
    }
    initDOMRefs(){
        
    }
    addListeners(){
        let paperChips=this._shadowRoot.querySelectorAll("paper-chip");
        paperChips.forEach(function(chip) {
            chip.addEventListener('click',(e)=>{
                let active= e.currentTarget.active
                paperChips.forEach(function(chip) {
                    chip.active=false;
                });
                e.currentTarget.active=!active;
                let name = e.currentTarget.id;
                this.dispatchEvent(new CustomEvent('changed-chip',{
                    detail:{
                        name: name,
                        active:e.currentTarget.active,
                        data:this.modules[name]
                    }
                }));
            });
        }, this);
       
        
    }

    connectedCallback(){
        
        console.log('loaded carousel chips');
        var multiSlides = this.shadowRoot.querySelector('.js_multislides');
        lory(multiSlides, {
            rewind:true,
            enableMouseEvents:true,
            //infinite: 4,
            slidesToScroll: 1
        });

    }
    

}


const nameWebComponent="app-carousel-chips";
const component=AppCarouselChips;

customElements.define(nameWebComponent,component);
customElements.whenDefined(nameWebComponent).then(() => {
	console.log(`registered ${nameWebComponent}`);
});
