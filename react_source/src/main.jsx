import { createRoot } from "react-dom/client";
let element = (
  <h1
    onClick={() => console.log(`父冒泡`)}
    onClickCapture={(event) => {
      console.log(`ParentCapture`)
      // event.stopPropagation();
    }}
  >
    <span
      onClick={() => console.log(`子冒泡`)}
      onClickCapture={() => console.log(`子捕获`)}
    >
      world
    </span>
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
