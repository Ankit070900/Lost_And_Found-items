import { createContext, useReducer } from "react";

const ItemList = createContext({
  itemList: [],
  addItem: () => {},
  deleteItem: () => {},
});

const ItemListProvider = ({ children }) => {
  const [itemList, dispatchItemList] = useReducer();

  const addItem = () => {};

  const deleteItem = () => {};
  return (
    <ItemList.ItemListProvider value={(itemList, addItem, deleteItem)}>
      {children}
    </ItemList.ItemListProvider>
  );
};

export default ItemListProvider;
