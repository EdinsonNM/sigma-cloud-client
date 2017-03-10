import html from './nice-map.html'
import css from './nice-map.css'
import Template from '../../../libs/template';

let templateObj = new Template(css,html);

export default class Map extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this._URL = 'https://maps.googleapis.com/maps/api/js?callback=%%callback%%';
		this._version = '3.exp';
		this.initDOMRefs();
		this.collectDataAttributes();
		this.addListeners();
	}

	initDOMRefs(){
		this.$mapContainer = this.shadowRoot.querySelector("#map-container");
		this.$loaderContainer = this.shadowRoot.querySelector("#loader-container");
	}

	addListeners(){
	}


	/**
	 * collectDataAttributes - Collect all the "data-" attributes
	 *
	 * @return {type}	description
	 */
	collectDataAttributes(){
		if ( !this.attributes['api-key'] ) {
			throw new Error('api-key is required as attribute');
		} else {
			this.apikey = this.attributes['api-key'].nodeValue;
		}

		if ( this.attributes['client-id'] ) {
			this.clientId = this.attributes['client-id'].nodeValue;
		}

		if ( this.attributes['language'] ) {
			this.language = this.attributes['language'].nodeValue;
		}

		if ( this.attributes['signed_in'] ) {
			this.signed_in = this.attributes['signed_in'].nodeValue;
		}


	}

	computeUrl(mapsUrl, version, apiKey, clientId, language, signedIn) {
		var url = mapsUrl + '&v=' + version;
		// Always load all Maps API libraries.
		url += '&libraries=drawing,geometry,places,visualization';
		if (apiKey && !clientId) {
			url += '&key=' + apiKey;
		}
		if (clientId) {
			url += '&client=' + clientId;
		}
		// Log a warning if the user is not using an API Key or Client ID.
		if (!apiKey && !clientId) {
			var warning = 'No Google Maps API Key or Client ID specified. ' +
					'See https://developers.google.com/maps/documentation/javascript/get-api-key ' +
					'for instructions to get started with a key or client id.';
			console.warn(warning);
		}
		if (language) {
			url += '&language=' + language;
		}
		if (signedIn) {
			url += '&signed_in=' + signedIn;
		}
		return url;
	}

	connectedCallback(){
		var self = this;
		var url = this.computeUrl(
			this._URL,
			this._version,
			this.apikey,
			this.clientId,
			this.language,
			this.signed_in,
		);
		this.$loaderContainer.setAttribute('url', url);

		var container = this.shadowRoot.querySelector('#map-container');
		setTimeout(function(){
			var map = new google.maps.Map(
				container,
				{
			 		center: {lat: -34.397, lng: 150.644},
			 		zoom: 8
				}
			);
		}, 1000);
	}
}

customElements.define('nice-map', Map);
