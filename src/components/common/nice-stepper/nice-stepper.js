import html from './nice-stepper.html'
import css from './nice-stepper.css'
import Template from '../../../libs/template';
import PaperIcon from '../paper-material/paper-icon/paper-icon';

let templateObj = new Template(css,html);

const LABEL = "Paso __CURRENT__ de __TOTAL__";

const SELECTED_COLOR = 'black';

const FINAL_BUTTON_LABEL = 'Finalizar';

export default class Stepper extends HTMLElement {

	constructor(){
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = templateObj.template;
		this.initDOMRefs();
		this.collectDataAttributes();
		this.stepsCount = (this.innerHTML.match(/<nice-step>/g) || []).length;
		this.content = this.innerHTML;
		if ( this.stepsCount < 0 ) {
			throw new Error('The stepper components needs steps');
		}
		this.currentStep = 1;
		this.addListeners();
	}

	initDOMRefs(){
		this.$stepperContainer = this.shadowRoot.querySelector("#stepper-container");
		this.$stepperLabelContainer = this.shadowRoot.querySelector("#step-label-container");
		this.$stepperStepContainer = this.shadowRoot.querySelector("#step-container");
		this.$stepsLabelTemplate = this.shadowRoot.querySelector("#steps-label-template");
		this.$label = this.shadowRoot.querySelector("#label");
		this.$stepButton = this.shadowRoot.querySelector("#btnStep");
	}

	addListeners(){
		this.$stepButton.addEventListener("click", this.nextStep.bind(this));
	}

	nextStep(e){
		this.currentStep += 1;

		let stepContents = this.shadowRoot.querySelectorAll("nice-step");
		stepContents.forEach((step, index) => {
			step.classList.toggle('hide');
		});

		let stepLabels = this.shadowRoot.querySelectorAll("paper-icon");
		stepLabels.forEach((stepLabel, index) => {
			if ( index + 1 != this.currentStep ) {
				stepLabel.setAttribute('data-color', '');
			} else{
				stepLabel.setAttribute('data-color', this.selectedColor);
			}
		});

		if ( this.currentStep == this.stepsCount ) {
			this.$stepButton.innerText = FINAL_BUTTON_LABEL;
			this.$stepButton.setAttribute('disabled', 'disabled')
		}

		let event = new CustomEvent('stepper_changed', { detail: {'state':1} });
		window.dispatchEvent(event);
	}

	getStepContent( index ) {
		if ( index && isNaN(index) ){
			throw new Error( 'Index should be a valid integer number');
		} else {
			if ( index < this.stepsCount ){
				return this.shadowRoot.querySelector(
					"nice-step[data-index='" + index + "']"
				);
			}
			return null;
		}
	}

	collectDataAttributes(){
		this.label = LABEL;
		this.selectedColor = SELECTED_COLOR;

		if ( this.attributes['data-label'] ) {
			 this.label = this.attributes['data-label'].nodeValue;
		}

		if ( this.attributes['data-selected-color'] ) {
			 this.selectedColor = this.attributes['data-selected-color'].nodeValue;
		}
	}

	connectedCallback(){
		//SET UP TEMPLATE
		let arr = new Array(this.stepsCount).fill(0);
		templateObj.render
		this.$stepperLabelContainer.innerHTML = Template.render(
			this.$stepsLabelTemplate.innerHTML,
			arr
		);

		//SET LABEL
		this.label = this.label.replace('__CURRENT__', this.currentStep);
		this.label = this.label.replace('__TOTAL__', this.stepsCount);
		this.$label.innerHTML = this.label;

		//SET CURRENT STEP LABEL
		let current = this.shadowRoot.querySelector("paper-icon[data-index='1']");
		current.setAttribute('data-color', this.selectedColor);

		//SET CURRENT STEP CONTENT
		this.$stepperStepContainer.innerHTML = this.content;
		let stepContents = this.shadowRoot.querySelectorAll("nice-step");
		stepContents.forEach((step, index) => {
			step.setAttribute('data-index', index +1 );
			if ( index + 1 != this.currentStep ) {
				step.classList.toggle('hide');
			}
		});

	}
}

customElements.define('nice-stepper', Stepper);
