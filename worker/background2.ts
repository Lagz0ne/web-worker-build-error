import { Index } from "flexsearch";
import data from "./data";

const index = new Index();
for (var i = 0; i < data.length; i++) {
  index.add(i, data[i]);
}

self.onmessage = (event) => {
  index.search(event.data, 25);
};
