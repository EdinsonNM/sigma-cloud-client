import html from './nice-map.html'
import css from './nice-map.css'
import Template from '../../../libs/template';

let templateObj = new Template(css,html);

export default class Map extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.collectDataAttributes();
		this.addListeners();
	}

	initDOMRefs(){
		this.$mapContainer = this.shadowRoot.querySelector("#map-container");
	}

	addListeners(){
	}


	/**
	 * collectDataAttributes - Collect all the "data-" attributes
	 *
	 * @return {type}	description
	 */
	collectDataAttributes(){
	}

	connectedCallback(){
		var self = this;
		var container = this.shadowRoot.querySelector('#map-container');
		//google.maps.event.addDomListener(window, "load", function(){
			var map = new google.maps.Map(
				container,
				{
			 		center: {lat: -34.397, lng: 150.644},
			 		zoom: 8
				}
			);
		//});
	}
}

customElements.define('nice-map', Map);
