const Post = ({ item }) => {
  console.log(item);
  return (
    <div className="my_card">
      <div className="card cards">
        <img src={item.image} className=" image " alt="..." width={"210px"} />
      </div>
      <div className="card-body body">
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
  );
};

export default Post;
