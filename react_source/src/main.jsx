import { createRoot } from "react-dom/client";
let element = (
  <h1 onClick={() => console.log('click')}>
    hello<span style={{ color: "red" }}>world</span>
  </h1>
);
// console.log(element);
const root = createRoot(document.getElementById("root"));
root.render(element);

// let element = (
//   <h1>
//     hello1<span style={{ color: "red" }}>world</span>
//   </h1>
// );
// console.log(element);