import { Slide } from './slide.model';


export interface SliderOptions {
  delay?: number;
  root: string;
  width?: number;
  height?: number;
  slides: Slide[];
}
