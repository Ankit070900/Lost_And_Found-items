import { useContext } from "react";
import { ItemList } from "../Store/Post-list-Store";
import Post from "./Post";

const MyList = () => {
  const { itemList } = useContext(ItemList);
  return (
    <div className="flex">
      {itemList.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MyList;
