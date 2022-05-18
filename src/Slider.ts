import { SliderOptions } from './models';

export class Slider {
  options: SliderOptions;
  rootElement: HTMLElement;

  constructor(options: SliderOptions) {
    this.options = options;
  }

  start(): void {
    this.setUpRootElement();
    this.createSlides();
  }

  setUpRootElement(): void {
    this.rootElement = document.querySelector(this.options.root) as HTMLElement;
    this.rootElement.classList.add('slider');
    this.rootElement.style.width = `${this.options.width}px`;
    this.rootElement.style.height = `${this.options.height}px`;
  }

  createSlides(): void {
    this.options.slides.forEach(slide => {
      const slideElement: HTMLElement = document.createElement('div');
      slideElement.classList.add('slider__slide');
      slideElement.style.background = slide.color;
      this.rootElement.append(slideElement);
    })
  }


}
