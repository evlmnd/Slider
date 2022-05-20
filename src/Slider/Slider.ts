import { Slide, SliderOptions } from '../models';
import { Validator } from '../helpers/Validator';


export class Slider {
  readonly defaultSliderOptions: Partial<SliderOptions> = {
    delay: 2500,
    width: 600,
    height: 300,
  };
  readonly requiredOptionFieldNames: Array<keyof SliderOptions> = ['root', 'slides'];

  private validator: Validator;

  options: SliderOptions;
  rootElement: HTMLElement;
  targetSlideNumber: number;

  constructor(options: SliderOptions) {
    this.options = options;
    this.validator = new Validator();
    this.targetSlideNumber = 1;
    this.checkRequiredOptions();
    this.setUpDefaultMissingOptions();
  }

  checkRequiredOptions(): void {
    this.validator.validateObjectForRequiredFields(this.requiredOptionFieldNames, this.options);
  }

  setUpDefaultMissingOptions(): void {
    Object.keys(this.defaultSliderOptions).forEach((option: keyof SliderOptions) => {
      if (!(option in this.options)) {
        this.options[option as string] = this.defaultSliderOptions[option];
      }
    })
  }

  start(): void {
    this.setUpRootElement();
    this.createSlides();
    this.showSlides();
  }

  setUpRootElement(): void {
    this.rootElement = document.querySelector(this.options.root) as HTMLElement;
    this.rootElement.classList.add('slider');
    this.rootElement.style.width = `${this.options.width}px`;
    this.rootElement.style.height = `${this.options.height}px`;
  }

  createSlides(): void {
    this.options.slides.forEach((slide: Slide) => {
      const slideElement: HTMLElement = document.createElement('div');
      slideElement.classList.add('slider__slide');
      slideElement.innerText = slide.text;
      slideElement.style.backgroundColor = slide.color;
      slide.imageSrc && (slideElement.style.backgroundImage = `url('${slide.imageSrc}')`);
      this.rootElement.append(slideElement);
    })
  }

  showSlides(): void {
    const slideShow = setInterval(() => {
      if (this.targetSlideNumber < this.options.slides.length) {
        this.switchSlide(this.targetSlideNumber);
      } else {
        clearInterval(slideShow);
      }
    }, this.options.delay);
  }

  switchSlide(targetSlideNumber: number): void {
    const actualSliderWidth = this.rootElement.offsetWidth; // for adaptivity
    // todo: create cross-browser custom smooth scroll since safari doesn't support {behavior: 'smooth'} option
    this.rootElement.scrollTo({left: targetSlideNumber * actualSliderWidth, behavior: 'smooth'});
    this.targetSlideNumber++;
  }
}
