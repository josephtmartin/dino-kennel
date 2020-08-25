import { makeDino } from './dinoCard.js';

const printDinoCards = (array) => {
  array.forEach((item, index) => {
    if (item.health >= 50) {
      $('#kennelCards').append(makeDino(item, index));
    } else if (item.health < 50 && item.health > 0) {
      $('#hospitalCards').append(makeDino(item, index));
    } else if (item.health === 0) {
      $('#graveyardCards').append(makeDino(item, index));
    }
  });
};

export { printDinoCards };
