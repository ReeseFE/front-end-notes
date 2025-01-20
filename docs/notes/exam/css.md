---
title: CSS
createTime: 2025/01/20 11:24:06
permalink: /exam/css/
---
### 盒模型
盒模型把页面元素从内到外分四层：内容(content)、内边距(padding)、边框(border)和外边距(margin)。有两种计算方式：**标准盒模型是宽度只包含内容区；IE盒模型的宽度包含内容、内边距和边框**。现在一般用**box-sizing: border-box**来使用IE盒模型，这样更好控制布局。

### BFC
BFC (Block Formatting Context) 是一个独立的渲染区域，简单理解就是一个"结界"，内部元素不会影响外部元素。触发BFC的常见方式：
-   **overflow: hidden**
-   **display: flex/inline-block**
-   **position: absolute/fixed**
-   float: left/right

主要用途：
1. 清除浮动（解决高度塌陷）
2. **防止margin重叠**
3. 阻止元素被浮动元素覆盖

### position 定位
-   static：默认值，正常文档流
-   relative：相对定位，相对自己原来位置移动，不脱离文档流
-   absolute：绝对定位，**相对最近的非static定位父元素**，脱离文档流
-   fixed：固定定位，**相对浏览器窗口**，脱离文档流
-   sticky：粘性定位，相对于最近的滚动祖先（overflow 不为 visible 的元素）定位，正常滚动时在文档流中（类似relative），达到阈值后固定在视口上（类似fixed）


使用`top/right/bottom/left`来设置具体位置。

### 居中对齐
#### 水平居中

-   行内元素：**text-align: center**
-   块级元素：**margin: 0 auto**
-   flex布局：**justify-content: center**
-   绝对定位：子元素设left: 50%（这时候是子元素的左边在中心），再用transform: translateX(-50%)往回拉自身一半

#### 垂直居中

-   单行文本：**line-height = height**
-   flex布局：**align-items: center**
-   绝对定位：子元素设top: 50%（这时候是子元素的顶部在中心），再用transform: translateY(-50%)往回拉自身一半

现在基本都用flex，简单好用！

### 响应式布局
1. 媒体查询 + rem：
**通过媒体查询设置不同屏幕下html的font-size，页面所有尺寸用rem单位，它会自动根据html的字号计算**。

### margin 负值的作用
margin负值的效果：

-   margin-top 为负：元素自身向上移动
-   margin-bottom 为负：下方元素会向上移动
-   margin-left 为负：元素自身向左移动
-   margin-right 为负：右侧元素向左移动

常用场景：
-   制作重叠效果
-   解决边距重叠问题
-   两列布局时去除边距

### line-height 继承

CSS中的`line-height`继承有三种写法，挺有意思的：

-   line-height: 20px;：
    **具体数值，子元素直接继承20px**
-   line-height: 150%：
    **百分比，先计算，子元素继承计算后的具体值**； 比如父元素font-size是16px，子元素就继承24px
-   line-height: 1.5：
    **纯数字（比例），子元素直接继承比例**

实际开发中更推荐用纯数字，这样子元素可以根据自己的字体大小自动计算，更灵活。