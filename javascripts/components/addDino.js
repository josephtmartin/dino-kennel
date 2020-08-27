import { printDinoCards } from './printDino.js';
import { getDinos } from '../../main.js';

const dinoForm = () => {
  $('#newDinoButton').click(() => {
    $('#addDino').html(`
            <form class="m-3">
                <div class="row">
                    <div class="col">
                        <label for="inputName">Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder="Bobby">
                    </div>
                    <div class="col">
                        <label for="inputType">Type</label>
                        <input type="text" class="form-control" id="inputType" placeholder="T-Rex">
                    </div>
                    <div class="form-group">
                        <label for="inputAge">Age</label>
                        <input type="text" class="form-control" id="inputAge" placeholder="200">
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col">
                        <label for="inputOwner">Owner</label>
                        <input type="text" class="form-control" id="inputOwner" placeholder="John Smith">
                    </div>
                    <div class="col">
                        <label for="inputImg">Image URL</label>
                        <input type="url" class="form-control" id="inputImg" placeholder="https://">
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button id="submitNewDino" class="btn btn-primary" type="button">Submit</button>
                </div>
            </form>
        `);
    submitDinoForm();
  });
};

const submitDinoForm = () => {
  $('#submitNewDino').click(() => {
    let newDino = {
      name: $('#inputName').val(),
      type: $('#inputType').val(),
      age: $('#inputAge').val(),
      owner: $('#inputOwner').val(),
      adventures: [],
      health: 100,
      imageUrl: $('#inputImg').val(),
    };
    getDinos().push(newDino);
    printDinoCards(getDinos())
    emptyForm();
  });
};

const emptyForm = () => {
    $('#addDino').html(`
        <div id="addDino" class="add-dino">
            <button type="button" class="btn btn-secondary btn-lg btn-block" id="newDinoButton">Add New Dino</button>
        </div>
    `)
    dinoForm();
}

export { dinoForm };
