import { createContext, useReducer } from "react";

export const ItemList = createContext({
  itemList: [],
  addItem: () => {},
  deleteItem: () => {},
});

const itemListReducer = (currItemList, action) => {
  let newItemList = currItemList;
  if (action.type === "ADD_POST") {
    newItemList = [action.payload, ...currItemList];
  }
  return newItemList;
};

const ItemListProvider = ({ children }) => {
  const [itemList, dispatchItemList] = useReducer(
    itemListReducer,
    DEFAULT_ITEM
  );
  const addItem = (itemName, description, question, itemType, itemImage) => {
    dispatchItemList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        Item_name: itemName,
        Description: description,
        Question: question,
        Types: itemType,
        image: itemImage,
      },
    });
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
    image: "images/phone.webp",
    Item_name: "hello",
    Description: "If you lose an Android device or Wear OS watch, you can find",
    Question: "My redmi 5 back side 2 scketh",
    Types: "Found",
  },
  {
    id: "03",
    image: "images/phone.webp",
    Item_name: "hello",
    Description: "If you lose an Android device or Wear OS watch, you can find",
    Question: "My redmi 5 back side 2 scketh",
    Types: "Found",
  },
  {
    id: "04",
    image: "images/phone.webp",
    Item_name: "hello",
    Description: "If you lose an Android device or Wear OS watch, you can find",
    Question: "My redmi 5 back side 2 scketh",
    Types: "Found",
  },
];

export default ItemListProvider;
