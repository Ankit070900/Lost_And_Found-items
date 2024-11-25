const MyList = () => {
  const items = {
    image: "imagesphone.webp",
  };
  return (
    <div className="my_card">
      <div class="card cards" style={{ width: "25rem" }}>
        <img src="images\phone.webp" class="card-img-top image" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      <div class="card cards" style={{ width: "25rem" }}>
        <img src="images\phone.webp" class="card-img-top image" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      <div class="card cards" style={{ width: "25rem" }}>
        <img src="images\phone.webp" class="card-img-top image" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default MyList;
