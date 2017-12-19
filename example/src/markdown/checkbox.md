# checkbox 多选框

----

多选通常用在任务板、文件选择等场景中。


## 何时使用

用在一组可选项中进行多项选择时。

## 基本多选框

最简单的用法。
需要设置v-model绑定checked

:::demo
```html
<p>你平时无聊时喜欢干啥子?</p>
<cat-checkbox v-model="checked1" label="看电视">看电视</cat-checkbox>
<cat-checkbox v-model="checked2" label="打游戏">打游戏</cat-checkbox>
<cat-checkbox v-model="checked3" label="听歌">听歌</cat-checkbox>
```
:::

## 禁用状态
disabled
不可用状态

:::demo
```html
<cat-checkbox v-model="checked4" :disabled="disabled1" label="hello" @change="handleChange1">
  {{disabled1 ? '禁用' : '不禁用'}}
</cat-checkbox>
<cat-button size="small" type="danger" @click="disabled1 = !disabled1">切换禁用</cat-button>
<cat-button size="small" type="primary" @click="checked4 = !checked4">切换选中</cat-button>
<p>我是回调函数回来的checkbox value的值：{{checkedTest}}</p>
```
:::

## 多选组合

方便的从数组生成 Checkbox 组
disabled 以按钮组为主, 子项为辅， 如果整体是禁用， 那么子项也是被禁的

#### 第一种通过比较复杂的形式 可以控制选中 禁用等
:::demo
```html
<p>你喜欢吃什么？</p>
<cat-checkbox-group v-model="lists1" :options="options1"></cat-checkbox-group>
<p>当前选中: <span v-for="item in lists1"> {{item}} </span></p>
```
```js
<script>
export default {
  data () {
    return {
      lists1: [],
      options1: [
        {
          label: '冰淇淋',
          text: '冰淇淋',
          checked: true,
          disabled: true
        },
        {
          label: '周黑鸭',
          text: '周黑鸭',
          checked: true
        },
        {
          label: '巧克力',
          text: '巧克力',
          disabled: true
        },
        {
          label: '鸡排',
          text: '鸡排'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
```
:::


#### 第二张  简单的通过两个数组 实现全选
indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
:::demo
```html
<p>选择你想喝的饮料？</p>
<p><cat-checkbox v-model="checkedAll" :indeterminate="indeterminate" @change="handleChange2" label="checkAll">全选</cat-checkbox></p>
<cat-checkbox-group v-model="lists2" :options="options2" @change="handleChangeItem"></cat-checkbox-group>
<p>当前选中: <span v-for="item in lists2"> {{item}} </span></p>
```
```js
<script>
export default {
  data () {
    return {
      lists2: ['雪碧'],
      options2: ['加多宝', '雪碧', '可乐', '酸奶'],
      checkedAll: false,
      indeterminate: true
    },
    methods: {
      handleChange2 (val) {
        this.lists2 = this.checkedAll ? [].concat(this.options2) : []
        this.indeterminate = false
      },
      handleChangeItem (val) {
        this.checkedAll = (this.lists2.length === this.options2.length)
        this.indeterminate = val.length > 0 && val.length < this.options2.length
      }
    }
  },
  methods: {
  }
}
</script>
```
:::

## checkbox 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | checkbox的value | `string` , `number` , `boolean` | - | - |
| name | 原生属性 | `string` | - | - |
| disabled | 禁止点击 | Boolean | `true`, `false` | false |
|indeterminate | 设置 indeterminate 状态, 全选部分选中的样式 | Boolean | `true`, `false` | - |
| @change | 回调函数 | function | - | 返回选中的checbox的value|



## checkboxGroup 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| options | chackbox数据| Array | - | - |
| v-model| 默认选中的子项列表 | Array | - | - |
| disabled | 禁止点击 | Boolean | `true`, `false` | false |
| @change | 回调函数 | function | - | 返回选中的checbox的数组|

####  options说明
子项：label- 对应value, text - 对应显示文字， disabled, checked代表是否选中，同时也可以是一个简单的数组, [label1, label2]


<script>
  export default {
    data () {
      return {
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checkedTest: '',
        disabled1: false,
        lists1: [],
        options1: [
          {
            label: '冰淇淋',
            text: '冰淇淋',
            checked: true,
            disabled: true
          },
          {
            label: '周黑鸭',
            text: '周黑鸭',
            checked: true
          },
          {
            label: '巧克力',
            text: '巧克力',
            disabled: true
          },
          {
            label: '鸡排',
            text: '鸡排'
          }
        ],
        lists2: ['雪碧'],
        options2: ['加多宝', '雪碧', '可乐', '酸奶'],
        checkedAll: false,
        indeterminate: true
      }
    },
    methods: {
      handleChange1 (val) {
        this.checkedTest = val
      },
      handleChange2 (val) {
        this.lists2 = this.checkedAll ? [].concat(this.options2) : []
        this.indeterminate = false
      },
      handleChangeItem (val) {
        this.checkedAll = (this.lists2.length === this.options2.length)
        this.indeterminate = val.length > 0 && val.length < this.options2.length
      }
    }
  }
</script>

<style lang="scss" scoped>
 p {
   padding: 16px 0;
 }
</style>
