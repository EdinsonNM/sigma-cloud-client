import html from './nice-map.html'
import css from './nice-map.css'
import Template from '../../../libs/template';

let templateObj = new Template(css,html);

const URL = 'https://maps.googleapis.com/maps/api/js?callback=%%callback%%';

const VERSION = '3.exp';

const DEFAULT_CENTER_MAP = {
	lat:	-12.046374,
	lng: -77.042793
};

const DEFAULT_ZOOM = 10;

/**
 * Map class
 * Map web component base on google maps API
 * @attributes:
 * 		my-location : Flag that indicate that the map will be center at the current position
 * 		disable-default-ui	: Disable google maps default UI
 * 		center : Default location base on latitude and longitude, if the my-location flag is set, this attribute will be ignored
 * @methods:
 * 		setZoom: Set zoom property
 *		setCurrentLocation: Set location property
 * 		addMarker: Add a new marked(object with lat and lng properties as parameter)
 */
export default class Map extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.map = null;
		this.initDOMRefs();
		this.collectDataAttributes();
		this.addListeners();
		// console.log(this.$mapContainer);
		this.flag = false
		// this.id = Math.random();
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

		if ( 'my-location' in this.attributes) {
			this.my_location = true;
		}

		if ( 'disable-default-ui' in this.attributes) {
			this.disableDefaultUI = true;
		}

		if ( this.attributes['center'] &&	this.attributes['center'].nodeValue) {
			let center = this.attributes['center'].nodeValue;
			let coordinates = center.split(",");
			if (	coordinates.length == 2 ) {
				this.lng = parseFloat(coordinates[0]);
				this.lat = parseFloat(coordinates[1]);
			} else {
				throw new Error('Invalid center property');
			}
		}

	}

	addMarker(location){
		let marker = new google.maps.Marker({
			position: location,
			map: this.map,
		});
		// this.mapsMarkers.push(marker);
	}


	/**
	 * setZoom - Set map zoom property
	 *
	 * @param	{integer} zoom Zoom as Integer
	 */
	setZoom(zoom){
		if ( zoom && !isNan(zoom)) {
			this.map.setZoom(zoom)
		} else {
			throw new Error('Invalid zoom');
		}
	}


	/**
	 * setLocation - Set location base on lat and lng properties
	 *
	 * @param	{type} lat description
	 * @param	{type} lng description
	 * @return {type}		 description
	 */
	setLocation(lat, lng) {
		if ( lat && !isNaN(lat) && lng && !isNaN(lng)){
			let pos = {
				lat: lat,
				lng: lng
			};
			this.map.setCenter(pos);
		}
	}

	/**
	 * setCurrentLocation - Set the current position base on the location
	 */
	setCurrentLocation(){
		const self = this;
		if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					self.setLocation(position.coords.latitude, position.coords.longitude)
				}, function() {
					self.setLocation(DEFAULT_CENTER_MAP.lat , DEFAULT_CENTER_MAP.lng)
				});
		} else {
			// TODO HANDLE ERROR WHEN BROWSER DOESN'T SUPPORT GEOLOCATION
		}
	}


	/**
	 * buildMapObjectConfig - Build the default config object for google maps
	 *
	 * @return {type}	description
	 */
	buildMapObjectConfig() {
		let obj = {
			center: DEFAULT_CENTER_MAP,
			zoom: DEFAULT_ZOOM,
			disableDefaultUI: false
		}

		if( this.lat && !isNaN(this.lat) && this.lng && !isNaN(this.lng) ) {
			let lat = this.lat;
			let lng = this.lng;
			obj.center = {
				lat:	lat,
				lng: lng
			}
		}

		if ( this.zoom && !isNaN(this.zoom)){
			let zoom = this.zoom;
			obj.zoom= zoom;
		}

		if ( this.disableDefaultUI ) {
			obj.disableDefaultUI = true;
		}
		return obj;
	}


	/**
	 * computeUrl - Build the URL with all the arguments
	 *
	 * @param	{string} mapsUrl
	 * @param	{string} version
	 * @param	{string} apiKey
	 * @param	{string} clientId
	 * @param	{string} language
	 * @param	{string} signedIn
	 * @return {string}
	 */
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

	buildMap(){
		const self = this;
		let container = this.shadowRoot.querySelector('#map-container');
		let mapConfig = this.buildMapObjectConfig();
		this.map = new google.maps.Map(
			container,
			mapConfig
		);

		if ( this.my_location ) {
			this.setCurrentLocation();
		}

		this.flag = true;

		document.dispatchEvent(new CustomEvent('mapReady',{}));
	}

	connectedCallback(){
		const self = this;
		let container = this.shadowRoot.querySelector('#map-container');
		let url = this.computeUrl(
			URL,
			VERSION,
			this.apikey,
			this.clientId,
			this.language,
			this.signed_in,
		);
		this.$loaderContainer.setAttribute('url', url);

		var buildmapFn = function(){
			if(typeof google !== "undefined"){
				self.buildMap();
				google.maps.event.trigger(self.map,'resize');
			}else{
				setTimeout(buildmapFn,500)
			}

		};
		buildmapFn();
	}
}

customElements.define('nice-map', Map);
