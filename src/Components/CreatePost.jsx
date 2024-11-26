import { useDispatch } from "react-redux";

const CreatePost = () => {
  return (
    <center className="container">
      <div className="search_heading">
        <h1>Search Items</h1>
        <div className="input_container">
          <input type="text" placeholder="Enter Lost Items Name" required />
          <input type="text" placeholder="Enter Description" required />
          <input
            type="text"
            required
            placeholder="Enter your Question based on the Item"
          />
          <label htmlFor="item" className="choose" required>
            Choose a type :
            <select name="item" className="choose_item" required>
              <option value="Select">Select</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </label>
          <input type="file" name="" id="" required />
          <button type="button" className="btn btn-success btn_submit">
            Success
          </button>
        </div>
      </div>
    </center>
  );
};

export default CreatePost;
