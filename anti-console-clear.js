console.oldClear = console.clear;
console.clear = function() {
  console.log("Console clearing is not allowed.");
};