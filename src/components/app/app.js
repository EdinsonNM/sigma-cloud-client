import PaperButtton from '../common/paper-material/paper-button/paper-button';
import Login from './login/login';
import Main from './main/main';
import template from "./app.html";

export default class App extends HTMLElement{
	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
<<<<<<< af3a26877170f2cef54053a7cf69bb5b47bc5c9f

    }

=======
		button = new PaperButton()
		button.set("raised");
	}
>>>>>>> Fix name, add source-map to weback config
}

customElements.define('main-app',App);
customElements.whenDefined('main-app').then(() => {
	console.log('registered main-app');
});
