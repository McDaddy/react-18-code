// import { createRoot } from "react-dom/client";
import babel from "@babel/core";
// let element = (
//   <h1>
//     hello<span style={{ color: "red" }}>world</span>
//   </h1>
// );
// console.log(element);
const sourceCode = `
<h1>
hello<span style={{ color: "red" }}>world</span>
</h1>
`;
// console.log(12313);
const result = babel.transform(sourceCode, {
  plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
});
console.log("result: ", result.code);
// const root = createRoot(document.getElementById("root"));
// console.log(root);
