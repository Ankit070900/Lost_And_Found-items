const MyList = () => {
  const items = {
    image: "images/phone.webp",
    Item_name: "Redmi 5",
    Description: "If you lose an Android device or Wear OS watch, you can find",
    Question: "My redmi 5 back side 2 scketh",
    Types: "Lost",
  };
  return (
    <div className="my_card">
      <div className="card cards" style={{ width: "25rem" }}>
        <img src={items.image} className="card-img-top image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Item name: {items.Item_name}</h5>
          <span className="card-text">
            <h6> Description:</h6> {items.Description}
          </span>
          <span className="card-text">
            <h6>Question: </h6>
            {items.Question}
          </span>
          <h5>Type: {items.Types}</h5>
        </div>
      </div>
    </div>
  );
};

export default MyList;
