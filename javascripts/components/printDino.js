import { makeDino } from './dinoCard.js';
import { feedPetDino } from './feedPet.js'

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
    feedPetDino(index, item, array);
  });
};

const emptyDom = () => {
  $('#kennelCards').html('')
  $('#hospitalCards').html('')
  $('#graveyardCards').html('')
}

export { printDinoCards };
