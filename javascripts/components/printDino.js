import { makeDino } from './dinoCard.js';
import { feedDino } from './feedDino.js';
import { petDino } from './petDino.js';
import { deleteDino } from './deleteDino.js';
import { dinoForm } from './addDino.js';

const printDinoCards = (array) => {
  emptyDom();
  array.forEach((item, index) => {
    if (item.health >= 50) {
      $('#kennelCards').append(makeDino(item, index));
    } else if (item.health < 50 && item.health > 0) {
      $('#hospitalCards').append(makeDino(item, index));
    } else if (item.health === 0) {
      $('#graveyardCards').append(makeDino(item, index));
    }
    feedDino(index, item, array)
    petDino(index, item, array)
    deleteDino(array, index)
    dinoForm();
  });
};

const emptyDom = () => {
  $('#kennelCards').html('')
  $('#hospitalCards').html('')
  $('#graveyardCards').html('')
}

export { printDinoCards };
