import Template from '../../../../libs/template';
import html from './paper-input.html'
import css from './paper-input.css'
let templateObj = new Template(css,html);
export default class PaperInput extends HTMLElement {
	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
        this.addListeners();
        
	}
    initDOMRefs(){
        this.$container= this.shadowRoot.querySelector('.group');
        this.$input=this.shadowRoot.querySelector('input');
        this.$label=this.shadowRoot.querySelector('label');
        this.$hrBlue=this.shadowRoot.querySelector('.blue');
        this.$hinText=this.shadowRoot.querySelector('.hinText');
    }
    addListeners(){
        this.$input.addEventListener("input",(e)=>{
            this.value=e.currentTarget.value;
        });
        this.$input.addEventListener("focus",(e)=>{
            this.$label.classList.add('floating');
            this.$label.classList.add('focus');
            this.$hrBlue.classList.add('focus');
            if(this.$input.value==''){
                this.$hinText.classList.add('focus');
            }
            
        });
         this.$input.addEventListener("blur",(e)=>{
            if(this.$input.value==''){
                this.$label.classList.remove('floating');
            }
            this.$label.classList.remove('focus');
            this.$hrBlue.classList.remove('focus');
            this.$hinText.classList.remove('focus');

        });
        this.$input.addEventListener("keyup",(e)=>{
             if(this.$input.value!==''){
                 this.$hinText.classList.remove('focus');
             }else{
                this.$hinText.classList.add('focus');
             }
        });
       
    }
    connectedCallback() {
		 this.floatingLabel = this.getAttribute('floating-label');
	}
    static get observedAttributes() {
		return ['hinText','floating-label','type','value','color'];
	}
    attributeChangedCallback(attr, oldValue, newValue) {
		this.render();
	}
    render(){
        this.$hinText.innerHTML = this.hinText;
        this.$input.type=this.type;
        this.$input.value = this.value;
        this.$input.style.color = this.color;
        this.$label.innerHTML= this.floatingLabel;

    }
    set color(val) {
        this.setAttribute('color', val);
	}
	get color() {
		return this.getAttribute('color');
	}
    set floatingLabel(val) {
		 this.setAttribute('floating-label', val||'');
	}
	get floatingLabel() {
		return this.getAttribute('floating-label');
	}

    set hinText(val){
        this.setAttribute('hinText',val);
    }
    get hinText(){
        return this.getAttribute('hinText');
    }

    set value(val) {
		if (val){
            this.setAttribute('value', val);
            
        }else
            this.removeAttribute('value');
	}
	get value() {
		return this.getAttribute('value');
	}
    set type(val) {
		this.setAttribute('type', val||'text');
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
