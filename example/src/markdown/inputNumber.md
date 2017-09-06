# inputNumber 数字输入框

----

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

### 基础数字输入框
注:
:::demo
```html
<cat-input-Number v-model="value1"></cat-input-number>
<p>{{value1}}</p>
```
:::


<script>
export default {
  data () {
    return {
      value1: 0
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
