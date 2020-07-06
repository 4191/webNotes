
# Hooks
## 》为啥会有hooks？
1. 组件的最佳写法应该是函数，而不是类。
   - 组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。
2. 函数组件有重大限制，必须是纯函数，不能包含状态，也不支持生命周期方法，因此无法取代类。
   - __React Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件。__
   - __组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。__
3. 组件类的缺点:
    - 代码很"重"
  	- 大型组件很难拆分和重构，也很难测试。
  	- 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
  	- 组件类引入了复杂的编程模式，比如 render props 和高阶组件。

### 》约定：
	所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。

## React 默认提供的四个最常用的钩子
### 1. useState():状态钩子
 ```
   const [state, setState] = useReducer(initialState);
   ```
> useState()这个函数接受状态的初始值，作为参数，上例的初始值为按钮的文字。该函数返回一个数组，数组的第一个成员是一个变量（上例是buttonText），指向状态的当前值。第二个成员是一个函数，用来更新状态，约定是set前缀加上状态的变量名（上例是setButtonText）。
### 2. useContext()：共享状态钩子
```
const AppContext = React.createContext({});

<AppContext.Provider value={{
  username: 'superawesome'
}}>
  <div className="App">
    <Navbar/>
    <Messages/>
  </div>
</AppContext.Provider>

const Navbar = () => {
  const { username } = useContext(AppContext);  // 获取共享state：username
  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  );
}

const Messages = () => {
  const { username } = useContext(AppContext) // 获取共享state：username

  return (
    <div className="messages">
      <h1>Messages</h1>
      <p>1 message for {username}</p>
      <p className="message">useContext is awesome!</p>
    </div>
  )
}
```

### 3. useReducer()：action 钩子
```
const [state, dispatch] = useReducer(reducer, initialState);
```
> 上面是useReducer()的基本用法，它接受 Reducer 函数和状态的初始值作为参数，返回一个数组。数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数。

> Hooks 可以提供共享状态和 Reducer 函数，所以它在这些方面可以取代 Redux。但是，它没法提供中间件（middleware）和时间旅行（time travel），如果你需要这两个功能，还是要用 Redux。

### 4. useEffect()：副作用钩子
>用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在componentDidMount里面的代码，现在可以放在useEffect()。

```
useEffect(()  =>  {
  // Async Action
}, [dependencies])
// useEffect()接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。
```

## 创建自己的 Hooks
```
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const usePerson = personId => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);
  return [loading, person];
};

const Person = ({ personId }) => {
  const [loading, person] = usePerson(personId);

  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  );
};

function App() {
  const [show, setShow] = useState("1");

  return (
    <div className="App">
      <Person personId={show} />
      <div>
        Show:
        <button onClick={() => setShow("1")}>Luke</button>
        <button onClick={() => setShow("2")}>C-3PO</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```