export interface Slide {
  color: string;
  text: string;
  imageSrc?: string;
}

export interface SliderOptions {
  delay?: number;
  root: string;
  width?: number;
  height?: number;
  slides: Slide[];
}

export type NonRequiredOptionField = 'delay' | 'width' | 'height';
