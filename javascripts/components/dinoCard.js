const makeDino = (item, index) => {
  return `<div class="card m-2" style="width: 18rem;">
    <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="mb-0">Health Bar:</p>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated ${color(item)}" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="button-container">
            <button class="btn btn-outline-success m-1" id="feed${index}">Feed</button>
            <button class="btn btn-outline-success m-1" id="pet${index}">Pet</button>
            <button class="btn btn-outline-warning m-1" id="adventure${index}">Adventure</button>
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-info m-1" id="info${index}" data-toggle="modal" data-target="#modal${index}">Info</button>
                <button class="btn btn-outline-danger m-1" id="delete${index}">Delete</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal${index}">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Dino Profile</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body d-flex">
                <img class="modal-image" style="width: 50%" src="${item.imageUrl}">
                <div class="info m-5">
                    <h2>${item.name}</h2>
                    <h5>Type: ${item.type}</h5>
                    <h5>Age: ${item.age}</h5>
                    <h5>Owner: ${item.owner}</h5>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated ${color(item)}" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Adventure</th>
                    </tr>
                    </thead>
                    <tbody id="adventureInfo${index}"></tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>


`;
};

const color = (item) => {
  if (item.health >= 50) {
    return 'green';
  } else if (item.health < 50 && item.health > 20) {
    return 'yellow';
  } else {
    return 'red';
  }
};



export { makeDino };
