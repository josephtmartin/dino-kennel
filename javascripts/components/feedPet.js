import { printDinoCards } from './printDino.js'

const feedPetDino = (index, item, array) => {
    $(`#feed-${index}`).click( () => {
        item.health += 10;
        printDinoCards(array);
    })
        
    $(`#pet-${index}`).click ( () => {
        item.health += 5;
        printDinoCards(array);
    })
        
}

export { feedPetDino }