export default class PaperInput extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define('paper-input-container',PaperButton,{extends:'div'});