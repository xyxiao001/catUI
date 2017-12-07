# radio 单选框

----

单选框通常用于一组选项中，只能单独选择一项的情况。


## 何时使用

用于在多个备选项中选中单个状态。

和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本单选框

最简单的用法。
需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String或者Number。

:::demo
```html
<cat-radio v-model="radio" label="1">单选1</cat-radio>
<cat-radio v-model="radio" label="2">单选2</cat-radio>


<p>你喜欢吃啥</p>
<cat-radio v-model="radio2" label="1">黄焖鸡</cat-radio>
<cat-radio v-model="radio2" label="2">沙县小吃</cat-radio>
```
:::

## 禁用状态

不可用状态

:::demo
```html
<cat-radio v-model="radio3" :label="1" :disabled="disabled3">禁用</cat-radio>
<cat-radio v-model="radio3" :label="2" :disabled="disabled3">禁用</cat-radio>
<cat-button size="small" type="danger" @click="disabled3 = !disabled3">切换禁用</cat-button>
```
:::

## 单选组合

适用于在多个互斥的选项中选择的场景

@change为单选组合值发生改变的时触发的回调函数, 返回值data为Radio label属性的值

:::demo
```html
<cat-radio-group :options="radioGruops1" v-model="radioGruop1" :disabled="disabledGroup1" @change="radioGroup1"></cat-radio-group>
<p>当前选择: {{ radioGruop1 }}</p>
<cat-button size="small" type="danger" @click="disabledGroup1 = !disabledGroup1">切换禁用</cat-button>

```
```js
<script>
export default {
  data () {
    return {
      disabledGroup: false,
      radioGruop1: '',
      radioGruops1: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ]
    }
  },
  methods: {
    radioGroup1 (data) {
      console.log('单选按钮组的回调函数, 当前值为' + data)
    }
  }
}
</script>
```
:::

## 单选按钮组合

按钮样式的单选组合。

@change为单选组合值发生改变的时触发的回调函数, 返回值data为Radio label属性的值

size 为按钮大小  small normal large 默认为normal

disabled 和 size 都以按钮组为主, 子项为辅， 如果整体是禁用， 那么子项也是被禁的
:::demo
```html
<cat-radio-group :options="radioGruops2" v-model="radioGruop2" :disabled="disabledGroup2" @change="radioGroup2" type="button" size="samll"></cat-radio-group>
<cat-radio-group :options="radioGruops2" v-model="radioGruop2" :disabled="disabledGroup2"  type="button" size="normal"></cat-radio-group>
<cat-radio-group :options="radioGruops2" v-model="radioGruop2" :disabled="disabledGroup2" type="button" size="large"></cat-radio-group>
<p>当前选择: {{ radioGruop2 }}</p>
<cat-button size="small" type="danger" @click="disabledGroup2 = !disabledGroup2">切换禁用</cat-button>
```
```js
<script>
export default {
  data () {
    return {
      disabledGroup2: false,
      radioGruop2: 'Apple',
      radioGruops2: [
        { label: '上海', text: '上海' },
        { label: '北京', text: '北京' },
        { label: '深圳', text: '深圳' },
        { label: '默认被禁', text: '默认被禁', disabled: true },
        { label: '杭州', text: '杭州' }
      ]
    }
  },
  methods: {
    radioGroup2 (data) {
      console.log('单选按钮组的回调函数, 当前值为' + data)
    }
  }
}
</script>

```
:::

## Radio 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | Radio的value | `string` , `number` , `boolean` | - | - |
| name | 原生属性 | `string` | - | - |
| disabled | 禁止点击 | Boolean | `true`, `false` | false |

## RadioButton 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | Radio的value | `string` , `number` , `boolean` | - | - |
| name | 原生属性 | `string` | - | - |
| disabled | 禁止点击 | Boolean | `true`, `false` | false |
| size | 按钮大小 | string | `small`, `normal` , `large` | normal |


## RadioGroup 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| options | radio数据 子项：label- 对应value, text - 对应显示文字， size, disabled | Array | - | - |
| disabled | 禁止点击 | Boolean | `true`, `false` | false |
| size | 按钮大小， 仅是单选按钮时生效 | string | `small`, `normal` , `large` | normal |
| type | 单选类型 | string | ``, `button` | - | -|
| @change | 回调函数 | function | - | 返回当前选择的radio的value|



<script>
export default {
  data () {
    return {
      radio: '',
      radio2: '',
      radio3: 1,
      radio4: '',
      disabled3: true,
      disabledGroup1: false,
      radioGruop1: '',
      radioGruops1: [
        { label: 'Apple', text: 'Apple' },
        { label: 'Pear', text: 'Pear' },
        { label: 'Orange', text: 'Orange' }
      ],
      disabledGroup2: false,
      radioGruop2: 'Apple',
      radioGruops2: [
        { label: '上海', text: '上海' },
        { label: '北京', text: '北京' },
        { label: '深圳', text: '深圳' },
        { label: '默认被禁', text: '默认被禁', disabled: true },
        { label: '杭州', text: '杭州' }
      ]
    }
  },
  methods: {
    radioGroup1 (data) {
      console.log('单选组的回调函数, 当前值为' + data)
    },
    radioGroup2 (data) {
      console.log('单选按钮组的回调函数, 当前值为' + data)
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    padding: 10px 0;
    line-height: 35px;
  }

  .cat-radio-group {
    display: block;
    margin-bottom : 16px;
  }
</style>
