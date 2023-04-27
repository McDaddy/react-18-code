import * as React from 'react';
import { createRoot } from "react-dom/client";

function counter(state, action) {
  if (action.type === 'add') return state + action.payload;
  return state;
}

function FunctionComponent() {
  const [number, setNumber] = React.useReducer(counter, 0);
  return (
    <button
      onClick={() => {
        setNumber({ type: "add", payload: 1 });
        setNumber({ type: "add", payload: 2 });
        setNumber({ type: "add", payload: 3 });
      }}
    >
      {number}
    </button>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<FunctionComponent />);

// let element = (
//   <h1>
//     hello1<span style={{ color: "red" }}>world</span>
//   </h1>
// );
// console.log(element);

// let element = (
//   <h1
//     onClick={() => console.log(`父冒泡`)}
//     onClickCapture={(event) => {
//       console.log(`ParentCapture`)
//       // event.stopPropagation();
//     }}
//   >
//     <span
//       onClick={() => console.log(`子冒泡`)}
//       onClickCapture={() => console.log(`子捕获`)}
//     >
//       world
//     </span>
//   </h1>
// );
