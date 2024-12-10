import { createContext, useReducer } from "react";

export const ItemList = createContext({
  itemList: [],
  addItem: () => {},
  deleteItem: () => {},
});

const itemListReducer = (currItemList, action) => {
  return currItemList;
};

const ItemListProvider = ({ children }) => {
  const [itemList, dispatchItemList] = useReducer(
    itemListReducer,
    DEFAULT_ITEM
  );
  console.log(itemList);
  const addItem = (itemName, description, question, itemImage, itemType) => {
    console.log(
      `${itemName} ${description} ${question} ${itemImage} ${itemType}`
    );
  };

  const deleteItem = () => {};
  return (
    <ItemList.Provider value={{ itemList, addItem, deleteItem }}>
      {children}
    </ItemList.Provider>
  );
};

const DEFAULT_ITEM = [
  {
    id: "01",
    image: "images/phone.webp",
    Item_name: "Redmi 5",
    Description: "If you lose an Android device or Wear OS watch, you can find",
    Question: "My redmi 5 back side 2 scketh",
    Types: "Lost",
  },
  {
    id: "02",
    image: "images/lost-2.svg",
    Item_name: "hello",
    Description: "If you lose an Android device or Wear OS watch, you can find",
    Question: "My redmi 5 back side 2 scketh",
    Types: "Found",
  },
];

export default ItemListProvider;
