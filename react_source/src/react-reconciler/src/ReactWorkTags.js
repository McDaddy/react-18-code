//根Fiber的tag
//每种虚拟DOM都会对应自己的fiber tag类型
// host 就是原生的意思
export const FunctionComponent = 0;//函数组件
export const ClassComponent = 1; //类组件
export const HostRoot = 3; //容器根节点
export const HostComponent = 5; //原生节点 span div h1
export const HostText = 6; //纯文件节点
export const IndeterminateComponent = 2;
