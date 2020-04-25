# Redux
## 设计思想：
1. Web 应用是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象里面。
   
## 基本概念及API
### 1 Store
> 存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。

### 2 State
> Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
当前时刻的 State，可以通过store.getState()拿到。
>Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。

### 3 Action
>State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。

>Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置，

### 4 Action Creator
>View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。 一个简单例子如下：
```
const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
```

### 5 store.dispatch()
>store.dispatch()是 View 发出 Action 的唯一方法。
```
import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});

// 配合Action Creator，可以改写如下：
store.dispatch(addTodo('Learn Redux'));
```

### 6 Reducer
>Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
```
const reducer = function (state, action) {
  // ...
  return new_state;
};
```
### 7 纯函数 ：同样的输入，必定得到同样的输出。
- 不得改写参数
- 不能调用系统 I/O 的API
- 不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

### 8 store.subscribe()
>Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。

>显然，只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。