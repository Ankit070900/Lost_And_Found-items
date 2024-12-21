const Post = ({ item }) => {
  console.log(item);
  return (
    <div className="my_card">
      <div className="card cards">
        <img
          src={item.image}
          className=" image "
          alt="..."
          width={"210px"}
          height={"330px"}
        />
      </div>
      <div className="card-body body">
        <h5 className="card-title">
          1. Item name:
          <br /> {item.Item_name}
        </h5>
        <span className="card-text">
          <h6> 2. Description:</h6> ►{item.Description}
        </span>
        <span className="card-text">
          <h6>3. Question: </h6>►{item.Question}
        </span>
        <span>
          <h5>
            4. Type:
            <br />
          </h5>
          ►{item.Types}
        </span>
      </div>
    </div>
  );
};

export default Post;
