import { ErrorMessageObject, NonRequiredOptionField, Slide, SliderOptions } from './models';

const defaultSliderOptions: Partial<SliderOptions> = { // types. extend interface?
  delay: 2500,
  width: 750,
  height: 400,
};

export class Slider {
  readonly requiredOptionErrorMessages: ErrorMessageObject = {
    root: 'Root element id property was not provided.',
    slides: 'Slide objects were not provided.'
  };

  options: SliderOptions;
  rootElement: HTMLElement;
  targetSlideNumber: number;

  constructor(options: SliderOptions) {
    this.options = options;
    this.targetSlideNumber = 1;
    this.checkRequiredOptions();
    this.setUpDefaultNonRequiredOptions();
  }

  checkRequiredOptions(): void {
    Object.keys(this.requiredOptionErrorMessages).forEach((optionKey: string) => {
      if (!(optionKey in this.options)) {
        throw new Error(this.requiredOptionErrorMessages[optionKey]);
      }
    })
  }

  setUpDefaultNonRequiredOptions(): void {
    Object.keys(defaultSliderOptions).forEach((option: NonRequiredOptionField) => {
      if (!(option in this.options)) {
        this.options[option] = defaultSliderOptions[option];
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
    const interval = setInterval(() => {
      if (this.targetSlideNumber < this.options.slides.length) {
        this.switchSlide(this.targetSlideNumber);
      } else {
        clearInterval(interval);
      }
    }, this.options.delay);
  }

  switchSlide(targetSlideNumber: number): void {
    this.rootElement.scrollTo({left: targetSlideNumber * this.options.width, behavior: 'smooth'});
    this.targetSlideNumber++;
  }


}
