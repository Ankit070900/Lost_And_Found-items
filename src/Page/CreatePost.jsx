import { useContext, useRef, useState } from "react";
import { ItemList } from "../Store/Post-list-Store";

const CreatePost = () => {
  const [image, setImage] = useState("");
  const handleImage = (e) => {
    // console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const { addItem } = useContext(ItemList);
  const itemNameElement = useRef();
  const descriptionElement = useRef();
  const questionElement = useRef();
  const itemTypeElement = useRef();
  const itemImageElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemName = itemNameElement.current.value;
    const description = descriptionElement.current.value;
    const question = questionElement.current.value;
    const itemType = itemTypeElement.current.value;
    const itemImage = itemImageElement.current.value;

    itemNameElement.current.value = "";
    descriptionElement.current.value = "";
    questionElement.current.value = "";
    itemTypeElement.current.value = "";
    itemImageElement.current.value = "";

    addItem(itemName, description, question, itemType, itemImage);
  };

  const handleApi = () => {
    const formData = new FormData();
    formData.append("iItemImage", itemImage);
    axios.post(url, formData).then((res) => {
      console.log(res);
    });
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
          <label htmlFor="item" className="choose" required>
            Choose a type :
            <select
              name="item"
              ref={itemTypeElement}
              className="choose_item"
              required
            >
              <option value="Select">Select</option>
              <option ref={itemTypeElement} value="Lost">
                Lost
              </option>
              <option ref={itemTypeElement} value="Found">
                Found
              </option>
            </select>
          </label>
          <input
            ref={itemImageElement}
            type="file"
            name=""
            id=""
            required
            onClick={handleImage}
          />

          <button
            type="submit"
            onClick={handleApi}
            className="btn btn-success btn_submit"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
