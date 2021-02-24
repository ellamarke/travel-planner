const initialLists = [
  {
    listName: "Master Packing List",
    items: [
      { text: "Shirts", isComplete: false, id: 1 },
      { text: "Trousers", isComplete: false, id: 2 },
      { text: "Passport", isComplete: false, id: 3 },
    ],
  },
  {
    listName: "Weekend Away Packing List",
    items: [
      { text: "Skirts", isComplete: false, id: 1 },
      { text: "Glasses", isComplete: true, id: 2 },
      { text: "Tickets", isComplete: false, id: 3 },
    ],
  },
];

export default initialLists;

export const newList = {
  listName: "New List",
  items: [{ text: "Skirts", isComplete: false, id: 1 }], // how to deal with IDs
};
