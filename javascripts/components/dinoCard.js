const makeDino = (item, index) => {
  return `<div class="card m-2" style="width: 18rem;">
    <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <div class="progress">
            <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <button class="btn btn-success m-2" id="feed${index}">Feed</button>
        <button class="btn btn-success m-2" id="pet${index}">Pet</button>
        <button class="btn btn-warning m-2" id="adventure${index}">Adventure</button>
        <button class="btn btn-info m-2" id="info${index}" data-toggle="modal" data-target="#modal${index}">Info</button>
        <button class="btn btn-danger m-2" id="delete${index}">Delete</button>
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
            <div class="modal-body">
                <img src="${item.imageUrl}">
                <h2>${item.name}</h2>
                <h4>${item.type}</h4>
                <h4>${item.age}</h4>
                <h4>${item.owner}</h4>
            <div class="progress">
                <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Type</th>
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

export { makeDino };
