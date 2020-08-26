import { printDinoCards } from './printDino.js'

const deleteDino = (array, index) => {
    $(`#delete-${index}`).click( () => {
        array.splice(index, 1)
        printDinoCards(array)
    })
}
export { deleteDino }