import {lory} from 'lory.js';
import Template from '../../../libs/template';
import html from './app-carousel-chips.html';
import css from './app-carousel-chips.css';
let templateObj = new Template(css,html);
import CustomEvent from 'custom-event';
export default class AppCarouselChips extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML = templateObj.template;
        this.initDOMRefs();
        this.addListeners();
        this.modules = {
            inv:{
                title:'Inventario de Riego',
                description:'Realiza consultas y operaciones sobre el inventario de canales, drenes, tramos, estructuras,etc.',
                logo:'./images/modules/module_inv.png',
                module:'module-inv'
            },
            pad:{
                title:'Padron de Usuarios y Predios Agrícolas',
                description:'Realiza consultas y operaciones sobre los usuarios y predios agrícolas denrto del ambito de la junta de usuarios',
                logo:'./images/modules/module_pad.png',
                module:'module-pad'
            },
            pcr:{
                title:'Plan de Cultivo y Riego',
                description:'Realiza consultas sobre la campaña agrícola, cultivos y declaraciones de intensión de siembra',
                logo:'./images/modules/module_pcr.png'
            },
            pda:{
                title:'Plan de Distribución del Agua',
                description:'Consulta el plan de distribución de agua por periodo',
                logo:'./images/modules/module_pda.png'
            },
            tar:{
                title:'Administración de la tarifa',
                description:'Consulta deudas atrasadas, deudas extraordinarias y pagos realizados por los usuarios',
                logo:'./images/modules/module_tar.png'
            },
            hid:{
                title:'Hidrometria',
                description:'Realiza el registro de las mediciones de...',
                logo:'./images/modules/module_hid.png'
            }

        }
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
