const makeDinoCards = (array) => {
  array.forEach((item, index) => {
    $('#kennelCards').addClass('kennel-cards');
    $('#kennelCards').append(
      `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button class="btn btn-success" id="feed-${index}">Feed</button>
                    <button class="btn btn-success" id="pet-${index}">Pet</button>
                    <button class="btn btn-info" id="info-${index}">Info</button>
                    <button class="btn btn-danger" id="delete-${index}">Delete</button>
                </div>
            </div>
        `
    );
  });
};


export { makeDinoCards };
