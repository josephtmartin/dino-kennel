const makeDino = (item, index) => {
  return `<div class="card m-2" style="width: 18rem;">
    <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <div class="progress">
            <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <button class="btn btn-success m-2" id="feed-${index}">Feed</button>
        <button class="btn btn-success m-2" id="pet-${index}">Pet</button>
        <button class="btn btn-warning m-2" id="adventure-${index}">Adventure</button>
        <button class="btn btn-info m-2" id="info-${index}">Info</button>
        <button class="btn btn-danger m-2" id="delete-${index}">Delete</button>
    </div>
</div>`;
};

export { makeDino };
