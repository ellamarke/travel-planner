const initialLists = [
  {
    listName: "Things to do in Tokyo",
    items: [
      { text: "Harajuku", isComplete: false, id: 1 },
      { text: "Tokyo Tower", isComplete: true, id: 2 },
      { text: "Nogi Shrine", isComplete: false, id: 3 },
      { text: "Eat at Yanaka Ginza", isComplete: false, id: 4 },
      { text: "Walk around Shibuya", isComplete: true, id: 5 },
      { text: "Nezu Museum", isComplete: false, id: 6 },
    ],
  },
  {
    listName: "Weekend Away Packing List",
    items: [
      { text: "Passport", isComplete: true, id: 1 },
      { text: "Boarding Pass", isComplete: true, id: 2 },
      { text: "Sunglasses", isComplete: false, id: 3 },
      { text: "Underwear", isComplete: false, id: 4 },
      { text: "Two pairs of trousers", isComplete: false, id: 5 },
      { text: "Three tops", isComplete: false, id: 6 },
      { text: "Day bag", isComplete: false, id: 7 },
      { text: "Suncream", isComplete: false, id: 8 },
      { text: "Guidebook", isComplete: false, id: 9 },
      { text: "Phone charger", isComplete: false, id: 10 },
      { text: "Toiletries", isComplete: false, id: 11 },
      { text: "Pyjamas", isComplete: false, id: 12 },
    ],
  },
];

export default initialLists;

export const newList = {
  listName: "New List",
  items: [
    {
      text: "Skirts",
      isComplete: false,
      id: Math.floor(Math.random() * 10000),
    },
  ], // creating t
};
