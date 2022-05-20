import { Slider } from './Slider';


jest.mock('../helpers/Validator');

describe('Slider should:', () => {

  let options;
  let slider;
  document.body.innerHTML = '<div id="slider"></div>';

  beforeEach(() => {
    options = {
      delay: 1000,
      root: '#slider',
      width: 750,
      height: 400,
      slides: [
        {color: '#c62828', text: 'RED'},
        {color: '#287cc6', text: 'BLUE'}
      ]
    };

    slider = new Slider(options);
  });

  test('be created successfully', () => {
    slider.start();
    const slideElement = document.querySelector('.slider__slide');
    expect(slider).toBeTruthy();
    expect(slideElement).toBeTruthy();

  });

  test('set default properties if they are not provided', () => {
    options = {
      root: '#slider',
      slides: [
        {color: '#c62828', text: 'RED'},
        {color: '#287cc6', text: 'BLUE'}
      ]
    }
    slider = new Slider(options);
    slider.setUpDefaultMissingOptions();
    expect(slider.options.delay).toBe(slider.defaultSliderOptions.delay);
    expect(slider.options.height).toBe(slider.defaultSliderOptions.height);
    expect(slider.options.width).toBe(slider.defaultSliderOptions.width);
  });

  test('throw error if root property is not provided', () => {
    options = {
      delay: 1000,
      width: 750,
      height: 400,
      slides: [
        {color: '#c62828', text: 'RED'},
        {color: '#287cc6', text: 'BLUE'}
      ]
    };
    try {
      // @ts-ignore
      slider = new Slider(options)
    } catch(error) {
      expect(slider.checkRequiredOptions).toThrowError(error);
    }
  });

  test('throw error if slides are not provided', () => {
    options = {
      delay: 1000,
      root: '#slider',
      width: 750,
      height: 400,
    };
    try {
      // @ts-ignore
      slider = new Slider(options)
    } catch(error) {
      expect(slider.checkRequiredOptions).toThrowError(error);
    }
  });

  // todo: research jest + clearInterval and finish test:
  // test('stop when runs out of slides', () => {})
})
