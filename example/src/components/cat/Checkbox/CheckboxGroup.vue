<template>
  <div class="cat-checkbox-group">
    <cat-checkbox
      v-if="item.label"
      v-for="item in options"
      :key="item.value"
      :disabled="disabled ? disabled : item.disabled"
      :label="item.label"
      :name="item.name || item.label"
      :checked="item.checked"
      @change="itemChange"
    >
      {{item.text || item}}
    </cat-checkbox>

    <cat-checkbox
      v-if="!item.label"
      v-for="item in options"
      :key="item.value"
      :disabled="disabled ? disabled : item.disabled"
      :label="item"
      :name="item"
      :checked="lists.includes(item)"
      @change="itemChange"
    >
      {{item}}
    </cat-checkbox>
  </div>
</template>

<script>
import Checkbox from './Checkbox'

export default {
  name: 'catCheckboxGroup',
  data () {
    return {
      lists: this.defaultChecked
    }
  },
  model: {
    prop: 'defaultChecked',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'checkbox'
    },
    defaultChecked: Array,
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Array]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  components: {
    catCheckbox: Checkbox
  },
  methods: {
    itemChange (val, label) {
      let arr = this.lists
      if (val === label) {
        arr.push(label)
      } else {
        arr = arr.filter((v, i) => v !== label)
      }
      this.lists = arr
      this.$emit('change', arr)
    }
  }
}
</script>

<style lang="scss">
  .cat-checkbox-group {
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    line-height: unset;
  }
</style>
