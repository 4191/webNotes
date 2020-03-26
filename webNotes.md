- [性能优化：](#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96)
  - [总结：](#%E6%80%BB%E7%BB%93)
  - [1. 尽量少去改变作用域链](#1-%E5%B0%BD%E9%87%8F%E5%B0%91%E5%8E%BB%E6%94%B9%E5%8F%98%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE)
  - [2. 减少页面的重排(Reflows)和重绘(Repaints)](#2-%E5%87%8F%E5%B0%91%E9%A1%B5%E9%9D%A2%E7%9A%84%E9%87%8D%E6%8E%92reflows%E5%92%8C%E9%87%8D%E7%BB%98repaints)
  - [3. DOM 操作的优化](#3-dom-%E6%93%8D%E4%BD%9C%E7%9A%84%E4%BC%98%E5%8C%96)
  - [4. eval 以及类 eval 问题](#4-eval-%E4%BB%A5%E5%8F%8A%E7%B1%BB-eval-%E9%97%AE%E9%A2%98)
  - [5. 更快速的数据访问](#5-%E6%9B%B4%E5%BF%AB%E9%80%9F%E7%9A%84%E6%95%B0%E6%8D%AE%E8%AE%BF%E9%97%AE)
  - [6. 事件委托减少循环绑定的事件](#6-%E4%BA%8B%E4%BB%B6%E5%A7%94%E6%89%98%E5%87%8F%E5%B0%91%E5%BE%AA%E7%8E%AF%E7%BB%91%E5%AE%9A%E7%9A%84%E4%BA%8B%E4%BB%B6)
  - [7. 算法和流程控制的优化](#7-%E7%AE%97%E6%B3%95%E5%92%8C%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E7%9A%84%E4%BC%98%E5%8C%96)
  - [8. [网站性能优化之度量篇]](#8-%E7%BD%91%E7%AB%99%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%B9%8B%E5%BA%A6%E9%87%8F%E7%AF%87)
  - [9. 垃圾收集](#9-%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86)

# 性能优化：

## 总结：

- 少用闭包，用的话记得清除缓存
- 不要使用 with 语句，with 语句时干啥的？（保持作用域链？）

## 1. 尽量少去改变作用域链

> 不使用 with 和 try catch

## 2. 减少页面的重排(Reflows)和重绘(Repaints)

- Dom 先隐藏，操作后再显示 2 次重排 (临时的 display:none);
- document.createDocumentFragment() 创建文档片段处理，操作后追加到页面 1 次重排;
- var newDOM = oldDOM.cloneNode(true)创建 Dom 副本，修改副本后 oldDOM.parentNode.replaceChild (newDOM,oldDOM)覆盖原 DOM 2 次重排
- 如果是动画元素的话，最好使用绝对定位以让它不在文档流中，这样的话改变它的位置不会引起页面其它元素重排
- [天生就慢的 DOM 如何优化？]

## 3. DOM 操作的优化

> 先循环再操作 Dom，减少 dom 操作。

```
function innerLi_s(){
   var content ="";
   var i = 0;
   for(;i<20;i++){
     content += "A"; //这里只对js的变量循环了20次
   };
   document.getElementById("Num").innerHTML += content; // 先循环再操作Dom，减少dom操作。
 };
```

## 4. eval 以及类 eval 问题

- setTimtout("alert(1)",1000);
- setInterver("alert(1)",1000);
- (new Function("alert(1)"))();

## 5. 更快速的数据访问

> 减少层级调用，将 window,document,自定义全局变量等，引入至局部变量中再用

## 6. 事件委托减少循环绑定的事件

> onclick，onmouseover，onmouseout 等事件尽量放到父元素上，减少事件绑定

## 7. 算法和流程控制的优化

- 循环(1 亿长度数组处理)
  > for(length 提前) > for 倒序 > for(11ms) > for of(320ms) > forEach(400ms) > for in(2930ms)
- 条件语句

  > if 小于 3 个

  > switch 大于等于 3 个

---

## 8. [网站性能优化之度量篇]

---

## 9. 垃圾收集

```
let globalPerson = createPerson("test")

//...用完后手动解除
globalPerson = null
```

[天生就慢的 dom 如何优化？]: https://segmentfault.com/a/1190000008267184
[网站性能优化之度量篇]: https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651235892&idx=1&sn=0b2a88e97c7dd6f38edc2168898135a9&chksm=bd497fb08a3ef6a65893bf8d41d822a8e6e9ee2993cbe211f9301b3062c3bfcc120984d1d29f&scene=90&xtrack=1&sessionid=1583623894&subscene=93&clicktime=1583623912&ascene=56&devicetype=iOS13.3.1&version=17000b23&nettype=WIFI&abtest_cookie=AQABAAgAAQCdhh4AAAA%3D&lang=zh_CN&fontScale=100&exportkey=Ad%2B97WuqsQmu9z878vOP6dM%3D&pass_ticket=pKvzzkZI6YSK5I86Q%2BN70W96kYK0oOQYj5JQ1jqg6hHPLs8B7FV1e76VjRBV%2FIl%2B&wx_header=1
