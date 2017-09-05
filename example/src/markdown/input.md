# input 输入框

----

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

需要用户输入内容时

### 基础输入框
注: type, maxlength, minlength placeholder, 还有其他input 自带的属性可以直接写, 宽度默认为上层容器的100%, 展示例子里面做了限制为200px
:::demo
```html
<cat-input v-model="value1" placeholder="普通文字输入框" type="text"></cat-input>
<p>{{ value1 }}</p>

<cat-input v-model="value2" placeholder="密码输入框" type="password" ></cat-input>

<cat-input v-model="value3" placeholder="disabled" type="text" disabled></cat-input>

<cat-input v-model="value3" placeholder="readonly" type="text" readonly></cat-input>

<cat-input v-model="value4" placeholder="限制最多输入5个" type="text" maxlength="5"></cat-input>
<p>{{ value4 }}</p>
```
:::

### 三种大小
注: 高度分别为 large  32px、 normal 28px 和 small 22px, 默认为normal
:::demo
```html
<cat-input v-model="value5" placeholder="小" size="small"></cat-input>
<cat-input v-model="value5" placeholder="中"></cat-input>
<cat-input v-model="value5" placeholder="大" size="large"></cat-input>
```
:::

### 带有图标的输入框
注: icon的type 可以参照icon组件, onIconClick为图标事件触发函数, 默认图标是在右边, 可通过direction来控制方向
:::demo
```html
<cat-input v-model="value6" placeholder="搜索框"  icon="search"></cat-input>

<cat-input v-model="value7" placeholder="我有按钮清除哦"  :icon="icon7" :on-icon-click="clear7"></cat-input>

<cat-input v-model="value8" placeholder="搜索框" icon="search" direction="left"></cat-input>
```
:::

### 多行文本输入框
注: 用于多行输入
:::demo
```html
<cat-input v-model="value9" placeholder="" type="textarea"></cat-input>
```
:::

### 带有状态的输入框
注: 添加属性 status, 表示不同含义的输入框，只是颜色上的变化，不影响逻辑。提供四种状态：success，error，warning，info
:::demo
```html
<cat-input v-model="value10" placeholder="成功"  status="success" icon="smile-o"></cat-input>

<cat-input v-model="value10" placeholder="错误"  status="error" icon="meh-o"></cat-input>

<cat-input v-model="value10" placeholder="警告"  status="warning" icon="meh-o"></cat-input>

<cat-input v-model="value10" placeholder="信息"  status="info" icon="meh-o"></cat-input>
```
:::

## Input 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 输入框类型，原生属性 | String | - | - |
| name | 原生属性 | String | - | - |
| icon | 插入图标类型 | String | - | - |
| direction| 插入图标位置 | String | left, right | right |
| on-icon-click |	点击 Input 内的图标的钩子函数 |	function |	—	—
| value | 绑定的值 | String / Number | - | - |
| placeholder | 占位文本（原生属性） | String | - | - |
| disabled | 是否禁用（原生属性） | Boolean | - | false |
| readonly | 是否只读（原生属性） | Boolean | - | false |
| maxlength | 最大长度（原生属性） | Number | - | - |
| minlength | 最小长度（原生属性） | Number | - | - |
| max | 最大值（原生属性） | Number | - | - |
| min | 最小值（原生属性） | Number | - | - |
| autofocus | 是否自动获取焦点（原生属性） | Boolean | - | false |
| size | 输入框尺寸 | String | `small`, `normal`, `large` | normal |
| status | 输入框类型 | String | success, error, warning, info | - |

## Input 事件
注: 通过@focus 传入事件即可调用

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| focus | 获得焦点时触发 | event |
| blur | 失去焦点时触发 | event |
| change | 在 Input 值改变时触发 |	event |
| enter | 在 Input 按下enter触发 |	event |


<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '我有按钮清除哦',
      icon7: 'close',
      value8: '',
      value9: '',
      value10: ''
    }
  },
  watch: {
    value7 () {
      this.icon7 = this.value7 ? 'close' : ''
    }
  },
  methods: {
    clear7 () {
      this.value7 = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .cat-input {
    display: block;
    width: 200px;
    margin: 10px 0;
  }

  p {
    line-height: 35px;
  }
</style>
