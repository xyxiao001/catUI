# Button 按钮

----

按钮用于开始一个即时操作。

## 何时使用

响应用户点击行为，触发相应的业务逻辑


### 基础按钮
注: 根据 type 属性来确定按钮类型
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

### 图标按钮
注: 按钮和图标可以一起使用, shape控制按钮是否为圆型
:::demo
```html
<cat-button shape="circle" icon="search"></cat-button>
<cat-button icon="search"></cat-button>
<cat-button type="primary" icon="search">搜索</cat-button>
<cat-button icon="step-backward"></cat-button>
<cat-button type="primary" icon="reload">点击重新加载</cat-button>

```
:::

### 按钮加载状态
注: 按钮加载状态loading 会阻止默认点击事件， 同时移除默认图标， 展示loading图标
:::demo
```html
<cat-button shape="circle" loading></cat-button>
<cat-button type="primary" loading>加载中</cat-button>

```
:::

### 按钮组合
注: 可以将多个按钮放进 cat-button-group 中形成一个组合按钮
:::demo
```html
<cat-button-gruop>
  <cat-button type="default">左</cat-button>
  <cat-button type="default">中</cat-button>
  <cat-button type="default">右</cat-button>
</cat-button-gruop>

<cat-button-gruop>
  <cat-button type="default" icon="left">上一页</cat-button>
  <cat-button type="default" icon="right">下一页</cat-button>
</cat-button-gruop>

```
:::

### 不可点击按钮
注: disabled 优先级高于按钮类型, 同时不会触发点击事件
:::demo
```html
<cat-button type="default" disabled>默认按钮</cat-button>
<cat-button type="primary" disabled>常规按钮</cat-button>
<cat-button type="text" disabled>文字按钮</cat-button>
```
:::

### 按钮尺寸
注: 按钮有大、中、小三种尺寸。默认为普通大小。 large 设置为大按钮， small设置为小按钮
:::demo
```html
<cat-button size="small">小的</cat-button>
<cat-button>普通</cat-button>
<cat-button size="large">大的</cat-button>

```
:::


## Button 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 按钮的类型 | String | `default`, `primary`, `danger`, `info`, `success`, `dashed`, `text` | - |
| size | 按钮的大小 | String | `large`, `small` | - |
| disabled | 禁止点击 | Boolean | `true`, `false` | false |
| icon | 按钮的图标类名，填入图标的type属性 | String | 见文档 `Icon 图标` | - |
| loading | 设置按钮的载入状态 | Boolean | `true`, `false` | false |
| shape | 设置图标按钮形状 | String | `circle` | '' |
| click | 点击事件, 由父组件传入触发 | Function | - | - |
| html-type |	设置 button 原生的 type 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) |	String | button,submit,reset |button |


<style lang="scss" scoped>
  .cat-btn {
    margin: 0 8px 8px 0;
  }

  .cat-btn-group {
    margin-right: 10px;

    .cat-btn {
      margin: 0;
    }
  }
</style>
