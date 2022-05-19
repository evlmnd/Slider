import { Slide, SliderOptions } from './models';

export class Slider {
  options: SliderOptions;
  rootElement: HTMLElement;
  targetSlideNumber: number = 1;

  constructor(options: SliderOptions) {
    this.options = options;
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
      slideElement.style.background = slide.color;
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
