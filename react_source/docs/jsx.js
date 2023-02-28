const babel = require('@babel/core');
const sourceCode = `
<h1>
  hello<span style={{ color: 'red' }}>world</span>
</h1>
`;

process.env.NODE_ENV = 'development';
const result = babel.transform(sourceCode, {
  plugins: [
    ["@babel/plugin-transform-react-jsx-development", { runtime: 'automatic' }]
  ]
});
console.log(result.code);
// var _jsxFileName = "";
// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
// /*#__PURE__*/_jsxDEV("h1", {
//   children: ["hello", /*#__PURE__*/_jsxDEV("span", {
//     style: {
//       color: 'red'
//     },
//     children: "world"
//   }, void 0, false, {
//     fileName: _jsxFileName,
//     lineNumber: 3,
//     columnNumber: 8
//   }, this)]
// }, void 0, true, {
//   fileName: _jsxFileName,
//   lineNumber: 2,
//   columnNumber: 1
// }, this);