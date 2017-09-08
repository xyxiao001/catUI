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


<script>
export default {
  data () {
    return {
      radio: '',
      radio2: '',
      radio3: 1,
      radio4: '',
      disabled3: true
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    padding: 10px 0;
    line-height: 35px;
  }
</style>
