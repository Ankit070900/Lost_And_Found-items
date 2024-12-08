import { useContext, useRef } from "react";
import { ItemList } from "../Store/Post list Store";

const CreatePost = () => {
  const { addItem } = useContext(ItemList);
  const itemNameElement = useRef();
  const descriptionElement = useRef();
  const questionElement = useRef();
  const itemTypeElement = useRef();
  const itemImageElement = useRef();

  const handleSubmit = (event) => {
    event.preventefault();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="search_heading">
        <h1>Search Items</h1>
        <div className="input_container">
          <input
            ref={itemNameElement}
            type="text"
            placeholder="Enter Lost Items Name"
            required
          />
          <input
            ref={descriptionElement}
            type="text"
            placeholder="Enter Description"
            required
          />
          <input
            ref={questionElement}
            type="text"
            required
            placeholder="Enter your Question based on the Item"
          />
          <label
            htmlFor="item"
            ref={itemTypeElement}
            className="choose"
            required
          >
            Choose a type :
            <select name="item" className="choose_item" required>
              <option value="Select">Select</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </label>
          <input ref={itemImageElement} type="file" name="" id="" required />
          <button type="submit" className="btn btn-success btn_submit">
            Success
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
