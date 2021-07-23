import { Index } from "flexsearch";
import data from "./data";

const index = new Index();
for (var i = 0; i < data.length; i++) {
  index.add(i, data[i]);
}

console.log("b2 loaded");

self.onmessage = (event) => {
  console.log("searching 2");
  index.search(event.data, 25);
};
