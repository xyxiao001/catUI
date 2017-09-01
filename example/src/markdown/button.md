# Button 按钮

----

按钮用于开始一个即时操作。

## 何时使用

响应用户点击行为，触发相应的业务逻辑


### 基础按钮
:::demo
```html
<cat-button type="default">默认按钮</cat-button>
<cat-button type="primary">常规按钮</cat-button>
<cat-button type="danger">风险按钮</cat-button>
<cat-button type="info">信息按钮</cat-button>
<cat-button type="success">成功按钮</cat-button>
<cat-button type="dashed">虚线按钮</cat-button>
<cat-button type="text">文字按钮</cat-button>
```
:::

### 不可点击按钮
注: disabled 优先级高于按钮类型
:::demo
```html
<cat-button type="default" disabled>默认按钮</cat-button>
<cat-button type="primary" disabled>常规按钮</cat-button>
<cat-button type="text" disabled>文字按钮</cat-button>
```
:::

<style lang="scss" scoped>
  .cat-btn {
    margin-right: 8px;
  }
</style>
