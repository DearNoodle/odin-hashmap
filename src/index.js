import HashMap from "./HashMap";

console.log("Testing HashMap Module");

const hashMap = new HashMap();

// Setting values
hashMap.set("apple", 1);
hashMap.set("banana", 2);
hashMap.set("orange", 3);
hashMap.set("grape", 4);
hashMap.set("mango", 5);

// Testing the hash function
console.log(hashMap.hash("grape"));

// Checking if a key exists
console.log(hashMap.has("banana")); // true

// Getting the value of a key
console.log(hashMap.get("banana")); // 2

// Removing a key
hashMap.remove("banana");
console.log(hashMap.has("banana")); // false

// Checking the size of the HashMap
console.log(hashMap.length()); // 2

// Clearing the HashMap
hashMap.clear();
console.log(hashMap.length()); // 0

// Adding values back to test keys, values, and entries methods
hashMap.set("apple", hashMap.hash("apple"));
hashMap.set("aapple", hashMap.hash("aapple"));
hashMap.set("aaapple", hashMap.hash("aaapple"));
hashMap.set("banana", hashMap.hash("banana"));
hashMap.set("bbanana", hashMap.hash("bbanana"));
hashMap.set("bbbanana", hashMap.hash("bbbanana"));
hashMap.set("orange", hashMap.hash("orange"));
hashMap.set("oorange", hashMap.hash("oorange"));
hashMap.set("ooorange", hashMap.hash("ooorange"));
hashMap.set("mango", hashMap.hash("mango"));
hashMap.set("mmango", hashMap.hash("mmango"));
hashMap.set("mmmango", hashMap.hash("mmmango"));
hashMap.set("grape", hashMap.hash("grape"));
hashMap.set("ggrape", hashMap.hash("ggrape"));
hashMap.set("gggrape", hashMap.hash("gggrape"));

// Testing keys method
console.log(hashMap.keys()); // ['apple', 'banana', 'orange'...]

// Testing values method
console.log(hashMap.values()); // [3, 10, 13...]

// Testing entries method
console.log(hashMap.entries()); // [['apple', 1], ['banana', 2], ['orange', 3]...]

console.log("HashMap Module Testing Complete");
