import { printDinoCards } from './printDino.js';

const feedDino = (index, item, array) => {
  $(`#feed${index}`).click(() => {
    item.health += 10;
    printDinoCards(array);
  });
};

export { feedDino };
