# inputNumber 数字输入框

----

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

### 基础数字输入框
注: 仅允许输入标准的数字值，可定义范围和每次改变量
:::demo
```html
<p>默认输入框</p>
<cat-input-Number v-model="value1"></cat-input-number>
<p>{{value1}}</p>

<p>最小值为5, 最大值为10</p>
<cat-input-Number v-model="value2" :max="10" :min="5"></cat-input-number>
<p>{{value2}}</p>

<p>step = 5</p>
<cat-input-Number v-model="value5" :step="5"></cat-input-number>
<p>{{value5}}</p>
```
:::

### 小数输入框
注: 改变step的值， 来实现小数
:::demo
```html
<p>step = 0.5</p>
<cat-input-Number v-model="value3" :step="0.5"></cat-input-number>
<p>{{value3}}</p>

<p>step = 0.8, max = 8, min = 0</p>
<cat-input-Number v-model="value4" :step="0.8" :max="8" :min="0"></cat-input-number>
<p>{{value4}}</p>

```
:::

### 三种大小
注: 高度分别为 large  36px、 normal 32px 和 small 28px, 默认为normal
:::demo
```html
<cat-input-Number v-model="value6" size="small"></cat-input-number>
<cat-input-Number v-model="value6"></cat-input-number>
<cat-input-Number v-model="value6" size="large"></cat-input-number>

```
:::

### 不可用状态
注: 设置属性 disabled 禁用输入框
:::demo
```html
<cat-input-Number v-model="value7" :disabled="dis"></cat-input-number>
<cat-button @click="dis = !dis" type="primary">改变disabled</cat-button>
```
:::

## InputNumber 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 输入框的值，可通过 `v-model` 绑定 | Number | - | - |
| size | 输入框尺寸 | String | `small`, `normal`, `large` | normal |
| step | 每次递增或递减的数目 | Number | - | 1 |
| min | 最小值 | Number | - | -Infinity |
| max | 最大值 | Number | - | Infinity |
| disabled | 是否禁用输入框 | Boolean | - | false |
| readonly | 是否设置成只读 | Boolean | - | false |
| autofocus | 是否自动聚焦到输入框 | Boolean | - | false |

## InputNumber 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| focus | 获得焦点时触发 | event |
| blur | 失去焦点时触发 | event |
| change | 绑定的值有变化时触发 | 输入框的值 |



<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 0,
      value3: 0.5,
      value4: 1.6,
      value5: 5,
      value6: 0,
      value7: 10,
      dis: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .cat-input-number {
    width: 200px!important;
  }

  p {
    line-height: 35px;
  }
</style>
