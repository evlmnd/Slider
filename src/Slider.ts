import { SliderOptions } from './models';

export class Slider {
  options: SliderOptions;

  constructor(options: SliderOptions) {
    this.options = options;
  }

  start(): void {
    this.setUpRootElement();
  }

  setUpRootElement(): void {
    const rootElement: HTMLElement = document.querySelector(this.options.root) as HTMLElement;
    rootElement.classList.add('slider')
    rootElement.style.width = `${this.options.width}px`;
    rootElement.style.height = `${this.options.height}px`;
  }

}
