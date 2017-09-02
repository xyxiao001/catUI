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
<cat-button shape="circle">圆</cat-button>
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
| icon | 按钮的图标类名，填入图标的 `classname` | String | 见文档 `Icon 图标` | - |
| loading | 设置按钮的载入状态 | Boolean | `true`, `false` | false |
| shape | 设置图标按钮形状 | String | `circle` | '' |
| click | 点击事件, 由父组件传入触发 | Function | - | - |


<style lang="scss" scoped>
  .cat-btn {
    margin: 0 8px 8px 0;
  }
</style>
