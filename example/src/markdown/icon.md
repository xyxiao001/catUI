# Icon 图标

----

语义化的矢量图形, 使用的是ant design 的图标

### 图标实例
注: 根据 type 属性来确定图标类型
:::demo
```html
<cat-icon type="search"></cat-icon>
<cat-icon type="like"></cat-icon>
<cat-icon type="dislike"></cat-icon>
<cat-icon type="copy"></cat-icon>
```
:::

### 图标功能展示
注: 添加spin 来实现图标旋转动画
:::demo
```html
<cat-icon type="loading" spin></cat-icon>
<cat-icon type="loading-3-quarters" spin></cat-icon>
```
:::

# 图标列表

### 方向性图标

<icon-list type="direction"></icon-list>

### 提示建议性图标

<icon-list type="suggestion"></icon-list>

### 网站通用图标

<icon-list type="other"></icon-list>

### 品牌和标识

<icon-list type="logo"></icon-list>

## Icon 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 图标的类型 | String | - | - |
| spin | 图标是否旋转 | Boolean | true, false | false |

<style lang="scss" scoped>
  .cat-icon {
    padding: 0 10px;
  }
</style>
