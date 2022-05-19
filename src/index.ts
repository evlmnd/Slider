/**
 * Задача:
 * Реализовать слайдер при помощи CSS(SCSS) и Javascript
 * Слайдер принимает несколько параметров при инициализации и возвращает инстанс
 * При достижении последнего слайда слайдер завершает свою работу
 *
 * Пример готового результата:
 * {@link https://www.loom.com/share/0e58938fa84941ef971a505ce3cdd1a0}
 *
 * Основные критерии:
 * * Реализовать класс/функцию Slider, которая будет инициализировать слайдер
 * * Класс/функция будет принимать несколько параметров, описанных ниже
 * * Анимация слайдера максимально простая - swipe
 * * При достижении последнего слайда слайдер завершает свою работу -
 *   последний слайд продолжает отображаться
 * * Никаких пользовательских событий не должно быть, слайдер должен быть полностью автоматическим
 *
 * Дополнительные критерии(приветствуется):
 * * Слайдер должен быть максимально покрыт юнит-тестами при помощи [jest]{@link https://jestjs.io}
 * * Ошибки внутри слайдера должны корректно обрабатываться и выбрасываться(throw) с корректными вордингами
 * * Рекомендуется придерживаться ООП и соответсвовать SOLID/DRY
 * * Код должен быть легкочитаемым и понятным, Соответствие принципам [Clean Code]{@link https://github.com/ryanmcdermott/clean-code-javascript}
 * * По возможности постараться использовать Typescript
 *
 * Рекомендации:
 * * Рекомендуется выбрасывать ошибки при отсутствии обязательных параметров(@required)
 * * Рекомендуется поддержать необязательные параметры при помощи параметров по умолчанию
 *
 * Запрещается:
 * * Использовать фреймворки
 * * Использовать библиотеки для работы с DOM(jquery-like)
 * * Использовать сторонние слайдеры, нужно реализовать самостоятельно
 *
 * * Выполнение и сдача:
 * * Задача должна быть выполнена за 48 часов с момента получения
 * * Решение может быть представлено в виде ссылки на codesandbox(fork) или репозиторий в GH/GL
 * * Если решение представлено в виде репозитория, то в README.MD должны быть указания по запуску
 */
import { Slider } from './Slider';
import { SliderOptions } from './models';

import './styles.scss';
import imageThisIsJS from './assets/images/this-is-javascript.jpeg';
import imageCat from './assets/images/cat.jpg';

const options: SliderOptions = {
  delay: 2500,
  root: '#slider',
  width: 750,
  height: 400,
  slides: [
    {color: '#c62828', text: 'RED'},
    {color: '#1d1718', text: '', imageSrc: imageThisIsJS},
    {color: '#ad1457', text: 'PINK'},
    {color: '#1d1718', text: 'hey', imageSrc: imageCat},
    {color: '#6a1b9a', text: 'PURPLE'},
    {color: '#4527a0', text: 'DEEP_PURPLE'},
    {color: '#283593', text: 'INDIGO'},
    {color: '#1565c0', text: 'BLUE'},
    {color: '#0277bd', text: 'LIGHT_BLUE'},
    {color: '#00838f', text: 'CYAN'},
    {color: '#00695c', text: 'TEAL'},
    {color: '#2e7d32', text: 'GREEN'},
    {color: '#558b2f', text: 'LIGHT_GREEN'},
    {color: '#827717', text: 'LIME'},
    {color: '#ef6c00', text: 'ORANGE'},
    {color: '#d84315', text: 'DEEP_ORANGE'},
    {color: '#4e342e', text: 'BROWN'}
  ]
};

const slider = new Slider(options);
slider.start();

