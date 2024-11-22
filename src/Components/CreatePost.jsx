const CreatePost = () => {
  return (
    <>
      <center className="container">
        <div className="search_heading">
          <h1>Search Items</h1>
          <div className="input_container">
            <input type="text" placeholder="Enter Lost Items Name" />
            <input type="text" placeholder="Enter Description" />
            <input
              type="text"
              placeholder="Enter your Question based on the Item"
            />
            <input type="file" name="" id="" />
            <button type="button">Submit</button>
          </div>
        </div>
      </center>
    </>
  );
};

export default CreatePost;
