import html from './loader.html'
import css from './loader.css'
import Template from '../../../libs/template';

let templateObj = new Template(css, html);


const LoaderMap = {
	apiMap: {}, // { hash -> Loader }
	/**
	 * @param {Function} notifyCallback loaded callback fn(result)
	 * @param {string} jsonpCallbackName name of jsonpcallback. If API does not provide it, leave empty. Optional.
	 */
	require: function(url, notifyCallback, jsonpCallbackName) {
		// make hashable string form url
		var name = this.nameFromUrl(url);
		// create a loader as needed
		if (!this.apiMap[name])
			this.apiMap[name] = new _Loader(name, url, jsonpCallbackName);
		// ask for notification
		this.apiMap[name].requestNotify(notifyCallback);
	},

	nameFromUrl: function(url) {
		return url.replace(/[\:\/\%\?\&\.\=\-\,]/g, '_') + '_api';
	}
};


var _Loader = function(name, url, callbackName) {
	this.notifiers = [];

	if (!callbackName) {
		if (url.indexOf(this.callbackMacro) >= 0) {
			callbackName = name + '_loaded';
			url = url.replace(this.callbackMacro, callbackName);
		} else {
			this.error = new Error('Loader a %%callback%% parameter is required in libraryUrl');
			return;
		}
	}

	this.callbackName = callbackName;
	window[this.callbackName] = this.success.bind(this);
	console.log('===>', url);
	this.addScript(url);
};

_Loader.prototype = {
	callbackMacro: '%%callback%%',
	loaded: false,

	addScript: function(src) {
		console.log('===>', src);
		var script = document.createElement('script');
		script.src = src;
		script.onerror = this.handleError.bind(this);
		var s = document.querySelector('script') || document.body;
		s.parentNode.insertBefore(script, s);
		this.script = script;
	},

	removeScript: function() {
		if (this.script.parentNode) {
			this.script.parentNode.removeChild(this.script);
		}
		this.script = null;
	},

	handleError: function(ev) {
		this.error = new Error("Library failed to load");
		this.notifyAll();
		this.cleanup();
	},

	success: function() {
		this.loaded = true;
		this.result = Array.prototype.slice.call(arguments);
		this.notifyAll();
		this.cleanup();
	},

	cleanup: function() {
		delete window[this.callbackName];
	},

	notifyAll: function() {
		this.notifiers.forEach( function(notifyCallback) {
			notifyCallback(this.error, this.result);
		}.bind(this));
		this.notifiers = [];
	},

	requestNotify: function(notifyCallback) {
		if (this.loaded || this.error) {
			notifyCallback( this.error, this.result);
		} else {
			this.notifiers.push(notifyCallback);
		}
	}
}

export default class Loader extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.addListeners();
		this.collectDataAttributes();
	}

	initDOMRefs(){
		this.$mapContainer = this.shadowRoot.querySelector("#map-container");
	}

	addListeners(){
	}

	collectDataAttributes(){
		if ( this.attributes['url'] ) {
			this._url = this.attributes['url'].nodeValue;
		}
	}

	_libraryLoadCallback(err, result) {
		 if (err) {
			//  this._setLibraryErrorMessage(err.message);
			console.error(err);
		 }
		 else {
			 console.log(result);
			//  this._setLibraryErrorMessage(null);
			//  this._setLibraryLoaded(true);
			//  if (this.notifyEvent)
			// 	 this.fire(this.notifyEvent, result);
		 }
	 }

	_loadLibrary() {
		if ( this._url ) {
			LoaderMap.require(
				this._url,
				this._libraryLoadCallback.bind(this)
			);
		}
	}

	connectedCallback(){
		this._loadLibrary();
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		if (attr == 'url') {
			if ( newValue ) {
				console.log(newValue);
				this._url = newValue;
				this._loadLibrary(newValue);
			}
		}
	}

	static get observedAttributes() {
		return ['url'];
	}
}

customElements.define('nice-loader', Loader);
