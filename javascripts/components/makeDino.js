const makeDinoCards = (array) => {
  array.forEach((item) => {
    $('#kennelCards').addClass('kennel-cards');
    $('#kennelCards').append(
      `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${item.health}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button class="btn btn-success">Feed</button>
                    <button class="btn btn-success">Pet</button>
                    <button class="btn btn-info">Info</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        `
    );
  });
};

export { makeDinoCards };
