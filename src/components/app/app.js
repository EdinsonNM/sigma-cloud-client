import PaperButtton from '../common/paper-material/paper-button/paper-button';
import Login from './login/login';
import Main from './main/main';
import template from "./app.html";

export default class App extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;

    }

}
customElements.define('main-app',App);
customElements.whenDefined('main-app').then(() => {
	console.log('registered main-app');
});