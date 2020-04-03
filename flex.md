- [容器](#%e5%ae%b9%e5%99%a8)
	- [flex-direction 主轴方向](#flex-direction-%e4%b8%bb%e8%bd%b4%e6%96%b9%e5%90%91)
	- [flex-wrap 如何换行](#flex-wrap-%e5%a6%82%e4%bd%95%e6%8d%a2%e8%a1%8c)
	- [flex-flow 属性flex-direction和flex-wrap的简写形式，默认值为row nowrap](#flex-flow-%e5%b1%9e%e6%80%a7flex-direction%e5%92%8cflex-wrap%e7%9a%84%e7%ae%80%e5%86%99%e5%bd%a2%e5%bc%8f%e9%bb%98%e8%ae%a4%e5%80%bc%e4%b8%barow-nowrap)
	- [justify-content 项目在主轴上的对齐方式](#justify-content-%e9%a1%b9%e7%9b%ae%e5%9c%a8%e4%b8%bb%e8%bd%b4%e4%b8%8a%e7%9a%84%e5%af%b9%e9%bd%90%e6%96%b9%e5%bc%8f)
	- [align-items 项目在交叉轴上的对齐方式](#align-items-%e9%a1%b9%e7%9b%ae%e5%9c%a8%e4%ba%a4%e5%8f%89%e8%bd%b4%e4%b8%8a%e7%9a%84%e5%af%b9%e9%bd%90%e6%96%b9%e5%bc%8f)
	- [align-content 定义了多根轴线的对齐方式。如果项目只有一根轴线（不换行？），该属性不起作用。](#align-content-%e5%ae%9a%e4%b9%89%e4%ba%86%e5%a4%9a%e6%a0%b9%e8%bd%b4%e7%ba%bf%e7%9a%84%e5%af%b9%e9%bd%90%e6%96%b9%e5%bc%8f%e5%a6%82%e6%9e%9c%e9%a1%b9%e7%9b%ae%e5%8f%aa%e6%9c%89%e4%b8%80%e6%a0%b9%e8%bd%b4%e7%ba%bf%e4%b8%8d%e6%8d%a2%e8%a1%8c%e8%af%a5%e5%b1%9e%e6%80%a7%e4%b8%8d%e8%b5%b7%e4%bd%9c%e7%94%a8)
- [项目](#%e9%a1%b9%e7%9b%ae)
	- [order <integer>项目的排列顺序。数值越小，排列越靠前，默认为0。](#order-integer%e9%a1%b9%e7%9b%ae%e7%9a%84%e6%8e%92%e5%88%97%e9%a1%ba%e5%ba%8f%e6%95%b0%e5%80%bc%e8%b6%8a%e5%b0%8f%e6%8e%92%e5%88%97%e8%b6%8a%e9%9d%a0%e5%89%8d%e9%bb%98%e8%ae%a4%e4%b8%ba0)
	- [flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。](#flex-grow-%e5%ae%9a%e4%b9%89%e9%a1%b9%e7%9b%ae%e7%9a%84%e6%94%be%e5%a4%a7%e6%af%94%e4%be%8b%e9%bb%98%e8%ae%a4%e4%b8%ba0%e5%8d%b3%e5%a6%82%e6%9e%9c%e5%ad%98%e5%9c%a8%e5%89%a9%e4%bd%99%e7%a9%ba%e9%97%b4%e4%b9%9f%e4%b8%8d%e6%94%be%e5%a4%a7)
	- [flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。](#flex-shrink-%e5%ae%9a%e4%b9%89%e4%ba%86%e9%a1%b9%e7%9b%ae%e7%9a%84%e7%bc%a9%e5%b0%8f%e6%af%94%e4%be%8b%e9%bb%98%e8%ae%a4%e4%b8%ba1%e5%8d%b3%e5%a6%82%e6%9e%9c%e7%a9%ba%e9%97%b4%e4%b8%8d%e8%b6%b3%e8%af%a5%e9%a1%b9%e7%9b%ae%e5%b0%86%e7%bc%a9%e5%b0%8f)
	- [flex-basis 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。](#flex-basis-%e5%ae%9a%e4%b9%89%e4%ba%86%e5%9c%a8%e5%88%86%e9%85%8d%e5%a4%9a%e4%bd%99%e7%a9%ba%e9%97%b4%e4%b9%8b%e5%89%8d%e9%a1%b9%e7%9b%ae%e5%8d%a0%e6%8d%ae%e7%9a%84%e4%b8%bb%e8%bd%b4%e7%a9%ba%e9%97%b4main-size%e6%b5%8f%e8%a7%88%e5%99%a8%e6%a0%b9%e6%8d%ae%e8%bf%99%e4%b8%aa%e5%b1%9e%e6%80%a7%e8%ae%a1%e7%ae%97%e4%b8%bb%e8%bd%b4%e6%98%af%e5%90%a6%e6%9c%89%e5%a4%9a%e4%bd%99%e7%a9%ba%e9%97%b4%e5%ae%83%e7%9a%84%e9%bb%98%e8%ae%a4%e5%80%bc%e4%b8%baauto%e5%8d%b3%e9%a1%b9%e7%9b%ae%e7%9a%84%e6%9c%ac%e6%9d%a5%e5%a4%a7%e5%b0%8f)
	- [flex 属性flex-grow、 flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。](#flex-%e5%b1%9e%e6%80%a7flex-grow-flex-shrink-%e5%92%8c-flex-basis%e7%9a%84%e7%ae%80%e5%86%99%e9%bb%98%e8%ae%a4%e5%80%bc%e4%b8%ba0-1-auto%e5%90%8e%e4%b8%a4%e4%b8%aa%e5%b1%9e%e6%80%a7%e5%8f%af%e9%80%89)
	- [align-self 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。](#align-self-%e5%85%81%e8%ae%b8%e5%8d%95%e4%b8%aa%e9%a1%b9%e7%9b%ae%e6%9c%89%e4%b8%8e%e5%85%b6%e4%bb%96%e9%a1%b9%e7%9b%ae%e4%b8%8d%e4%b8%80%e6%a0%b7%e7%9a%84%e5%af%b9%e9%bd%90%e6%96%b9%e5%bc%8f%e5%8f%af%e8%a6%86%e7%9b%96align-items%e5%b1%9e%e6%80%a7%e9%bb%98%e8%ae%a4%e5%80%bc%e4%b8%baauto%e8%a1%a8%e7%a4%ba%e7%bb%a7%e6%89%bf%e7%88%b6%e5%85%83%e7%b4%a0%e7%9a%84align-items%e5%b1%9e%e6%80%a7%e5%a6%82%e6%9e%9c%e6%b2%a1%e6%9c%89%e7%88%b6%e5%85%83%e7%b4%a0%e5%88%99%e7%ad%89%e5%90%8c%e4%ba%8estretch)
# 容器

## flex-direction 主轴方向
- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

## flex-wrap 如何换行
- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

## flex-flow 属性flex-direction和flex-wrap的简写形式，默认值为row nowrap
 ``` 
 flex-flow: <flex-direction> || <flex-wrap>;
 ```

## justify-content 项目在主轴上的对齐方式
> 具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

## align-items 项目在交叉轴上的对齐方式
> 具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。
- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

## align-content 定义了多根轴线的对齐方式。如果项目只有一根轴线（不换行？），该属性不起作用。
- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

# 项目

## order <integer>项目的排列顺序。数值越小，排列越靠前，默认为0。
```
.item {
  order: <integer>;
}
```

## flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```
.item {
  flex-grow: <number>; /* default 0 */
}
```
> 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

## flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```
.item {
  flex-shrink: <number>; /* default 1 负值对该属性无效。*/
}
```
> 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

## flex-basis 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
```
.item {
  flex-basis: <length> | auto; /* default auto */
}

// 可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
```

## flex 属性flex-grow、 flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
// 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
```
> 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

## align-self 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
// 该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
```

笔记参考：[阮一峰]

[阮一峰]: http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html "阮一峰"