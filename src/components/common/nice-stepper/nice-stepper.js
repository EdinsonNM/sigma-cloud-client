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

		//COUNT THE NUMBERS OF STEPS INSIDE THE STEPPER
		this.stepsCount = (this.innerHTML.match(/<nice-step>/g) || []).length;

		//SAVE THE CONTENT BEFORE BUILD THE TEMPLATE
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


	/**
	 * nextStep - Move on to the next step
	 *
	 * @param  {Object} e Event Object
	 */
	nextStep(e){
		let previousStep = this.currentStep;
		if ( previousStep + 1 <= this.stepsCount ) {
			this.currentStep += 1;
			this.setStep(this.currentStep);
			this.$stepButton.innerText = FINAL_BUTTON_LABEL;
			let result = {
				detail: {
					'currentStep': this.currentStep,
					'previouStep': previousStep
				}
			};
			let event = new CustomEvent('stepper_changed', result);
			window.dispatchEvent(event);
		} else {
			this.$stepButton.setAttribute('disabled', 'disabled');
		}
	}



	/**
	 * collectDataAttributes - Collect all the "data-" attributes
	 *
	 * @return {type}  description
	 */
	collectDataAttributes(){
		this.label_template = LABEL;
		this.selectedColor = SELECTED_COLOR;

		if ( this.attributes['data-label'] ) {
			 this.label_template = this.attributes['data-label'].nodeValue;
		}

		if ( this.attributes['data-selected-color'] ) {
			 this.selectedColor = this.attributes['data-selected-color'].nodeValue;
		}
	}


	/**
	 * setStep - Set step in the UI
	 *
	 * @param  {type} stepIndex Step Index
	 */
	setStep(stepIndex){
		if ( !stepIndex && isNaN(stepIndex)) {
			throw new Error('Invalid step index')
		}

		if ( stepIndex <= this.stepsCount ) {
			this.setLabel(stepIndex);

			if ( stepIndex > 1 ) {
				let lastStep = this.shadowRoot.querySelector(
					"nice-step[data-index='" + (stepIndex - 1) + "']"
				);

				lastStep.classList.add('hide');
			}

			let newStep = this.shadowRoot.querySelector(
				"nice-step[data-index='" + stepIndex + "']"
			);

			newStep.classList.remove('hide');
		}
	}


	/**
	 * setLabel - Set label for stepper component base on label template
	 *
	 * @param  {integer} stepIndex Step Index
	 */
	setLabel(stepIndex){
		let label = this.label_template.replace('__CURRENT__', stepIndex);
		label = label.replace('__TOTAL__', this.stepsCount);
		this.$label.innerHTML = label;

		let stepLabels = this.shadowRoot.querySelectorAll("paper-icon");
		stepLabels.forEach((stepLabel, index) => {
			if ( index + 1 != stepIndex ) {
				stepLabel.setAttribute('data-color', '');
			} else{
				stepLabel.setAttribute('data-color', this.selectedColor);
			}
		});
	}

	connectedCallback(){
		//SET UP TEMPLATE
		let arr = new Array(this.stepsCount).fill(0);
		templateObj.render
		this.$stepperLabelContainer.innerHTML = Template.render(
			this.$stepsLabelTemplate.innerHTML,
			arr
		);

		//SET HTML FROM TEMPLATE
		this.$stepperStepContainer.innerHTML = this.content;

		//SET INITIAL DATA TO NICE-STEPS
		let stepContents = this.shadowRoot.querySelectorAll("nice-step");
		stepContents.forEach((step, index) => {
			step.setAttribute('data-index', index +1 );
			if ( index + 1 != this.currentStep ) {
				step.classList.toggle('hide');
			}
		});

		//SET STEP
		this.setStep(this.currentStep);
	}
}

customElements.define('nice-stepper', Stepper);
