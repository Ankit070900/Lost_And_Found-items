import { useContext } from "react";
import { ItemList } from "../Store/Post-list-Store";
import Post from "./Post";

const MyList = () => {
  const { itemList } = useContext(ItemList);
  return (
    <>
      {itemList.map((item) => (
        <Post key={item.id} items={item} />
      ))}
    </>
  );
};

export default MyList;
