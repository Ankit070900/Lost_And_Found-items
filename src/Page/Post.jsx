const Post = ({ item }) => {
  return (
    <div className="my_card">
      <div className="card cards" style={{ width: "25rem" }}>
        <img src={item.image} className="card-img-top image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Item name: {item.Item_name}</h5>
          <span className="card-text">
            <h6> Description:</h6> {item.Description}
          </span>
          <span className="card-text">
            <h6>Question: </h6>
            {item.Question}
          </span>
          <h5>Type: {item.Types}</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
