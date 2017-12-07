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
<cat-checkbox v-model="checked1">看电视</cat-checkbox>
<cat-checkbox v-model="checked2">打游戏</cat-checkbox>
<cat-checkbox v-model="checked3">听歌</cat-checkbox>
```
:::

## 禁用状态
disabled
不可用状态

:::demo
```html
<cat-checkbox v-model="checked4" :checked="checked4" :disabled="disabled1">禁用</cat-checkbox>
<cat-button size="small" type="danger" @click="disabled1 = !disabled1">切换禁用</cat-button>
<cat-button size="small" type="primary" @click="checked4 = !checked4">切换选中</cat-button>
```
:::

## 多选组合

方便的从数组生成 Checkbox 组
disabled 以按钮组为主, 子项为辅， 如果整体是禁用， 那么子项也是被禁的
:::demo
```html

```
```js
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
```
:::


<script>
  export default {
    data () {
      return {
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: true,
        disabled1: true
      }
    }
  }
</script>

<style lang="scss" scoped>
 p {
   padding-bottom : 16px;
 }
</style>
