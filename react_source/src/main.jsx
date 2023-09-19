import * as React from "react";
import { createRoot } from "react-dom/client";

// function counter(state, action) {
//   if (action.type === "add") return state + action.payload;
//   return state;
// }

let counter = 0;
let timer;
let bCounter = 0;
let cCounter = 0;

function FunctionComponent() {
  const [data, setData] = React.useState(0);
  // console.log('data: ', data);
  const divRef = React.useRef();
  React.useEffect(() => {
    setData(data + 1);
    divRef.current.click();
  }, []);
  // const [numbers, setNumbers] = React.useState(new Array(100).fill('A'));
  // console.log('numbers: ', numbers);
  // const divRef = React.useRef();
  // const updateB = (numbers) => new Array(100).fill(numbers[0] + 'B')
  // updateB.id = 'updateB' + (bCounter++);
  // const updateC = (numbers) => new Array(100).fill(numbers[0] + 'C')
  // updateC.id = 'updateC' + (cCounter++);
  // React.useEffect(() => {
  //   timer = setInterval(() => {
  //     divRef.current.click();//1
  //     if (counter++ === 0) {
  //       setNumbers(updateB)//16
  //     }
  //     divRef.current.click();//1
  //     if (counter++ > 100) {
  //       clearInterval(timer);
  //     }
  //   });
  // }, []);
  // return (
  //   <div ref={divRef} onClick={() => {
  //     setNumbers(updateC)
  //   }}>
  //     {numbers.map((number, index) => <span key={index}>{number}</span>)}
  //   </div>
  // )
  return (
    <div ref={divRef} onClick={() => setData(data - 1)}>
      {data}
    </div>
  );
}
let element = <FunctionComponent />;

const root = createRoot(document.getElementById("root"));
root.render(element);

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
