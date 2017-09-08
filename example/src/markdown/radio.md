# radio 单选框

----

单选框通常用于一组选项中，只能单独选择一项的情况。


## 何时使用

用于在多个备选项中选中单个状态。

和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本单选框

最简单的用法。

:::demo
```html
<cat-radio v-model="radio" label="1">选项一</cat-radio>
```
:::


<script>
export default {
  data () {
    return {
      radio: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .cat-radio {
    margin: 10px 10px 0 0;
  }

  p {
    line-height: 35px;
  }
</style>
