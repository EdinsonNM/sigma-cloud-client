import html from './paper-input.html'
import css from './paper-input.css'
let template = createTemplate(html,css);
export default class PaperInput extends HTMLElement {
	constructor(){
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.innerHTML = template;
		this.initDOMRefs();
        this.addListeners();
        
	}
    initDOMRefs(){
        this.$container= this._shadowRoot.querySelector('.group');
        this.$input=this._shadowRoot.querySelector('input');
        this.$label=this._shadowRoot.querySelector('label');
    }
    addListeners(){
        this.$input.addEventListener("input",(e)=>{
            this.value=e.currentTarget.value
        })
       
    }
    connectedCallback() {
		 this.color = this.getAttribute('color');
         this.floatingLabel = this.getAttribute('floating-label');
         this.value=this.getAttribute('value');
         this.type=this.getAttribute('type');
	}
    set color(val) {
		if (val){
            this.setAttribute('color', val);
            this.$input.style.color = val;
            
        }else
            this.removeAttribute('color');
	}
	get color() {
		return this.hasAttribute('color');
	}
    set floatingLabel(val) {
		if (val){
            this.setAttribute('floating-label', val);
            this.$label.innerHTML= val;
            
        }else
            this.removeAttribute('floating-label');
	}
	get floatingLabel() {
		return this.hasAttribute('color');
	}

    set value(val) {
		if (val){
            this.setAttribute('value', val);
            this.$input.value = val;
            
        }else
            this.removeAttribute('value');
	}
	get value() {
		return this.getAttribute('value');
	}
    set type(val) {
		if (val){
            this.setAttribute('type', val);
            this.$input.type=val;
            
        }else
            this.removeAttribute('type');
	}
	get type() {
		return this.getAttribute('type');
	}
	

}
try{
customElements.define('paper-input',PaperInput,{extends:'input'});
}catch(e){
    console.log("paper-input was registered");
}
