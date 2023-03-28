/*eslint-disable*/
export default function groceriesList(){
  const map = new Map();
  const groceries = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(groceries)) {
    map.set(key, groceries[key]);
  }
  return map;
}
