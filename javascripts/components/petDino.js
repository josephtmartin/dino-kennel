import { printDinoCards } from './printDino.js';

const petDino = (index, item, array) => {
    $(`#pet${index}`).click(() => {
      item.health += 5;
      printDinoCards(array);
    });
  };

export { petDino }