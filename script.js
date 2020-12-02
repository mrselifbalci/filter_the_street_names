/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/

let streets = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Lane",
  "Addle Lane",
  "Alban Highwalk",
];

const getLanes = (arr, str) => {
  let filtered = arr.filter(
    (a) =>
      a.includes(str) ||
      a.includes(
        str.toLowerCase() ||
          a.includes(str.substr(0).toUpperCase + str.substr(1))
      )
  );
  return filtered;
};
console.log(getLanes(streets, "Lane"));
