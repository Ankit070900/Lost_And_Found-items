import { useContext } from "react";
import { ItemList } from "../Store/Post list Store";
import Post from "./Post";

const MyList = () => {
  const { itemList } = useContext(ItemList);

  return (
    <>
      {itemList.map((items) => (
        <Post key={items.id} items={items} />
      ))}
    </>
  );
};

export default MyList;
