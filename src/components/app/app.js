import {appRouter} from '../common/app-router/app-router';
import PaperMaterial from '../common/paper-material';
import Splash from './splash/splash';
import Login from './login/login';
import Main from './main/main';
import Profile from './profile';
import template from "./app.html";

export default class App extends HTMLElement{
	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;

	}

}

customElements.define('my-app',App);
customElements.whenDefined('my-app').then(() => {
	console.log('registered my-app');
});
