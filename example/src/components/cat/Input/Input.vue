<template>
  <div
     class="cat-input"
    :class="[
      disabled ? 'cat-input-disabled' : '',
      readonly ? 'cat-input-readonly' : '',
      size ? `cat-input-${size}` : '',
      icon ? 'cat-input-icon' : '',
      direction ? `cat-input-direction-${direction}` : '',
      status ? `cat-input-status-${status}` : ''
    ]"
  >
  <input
    v-if="type != 'textarea'"
    class="cat-input-item"
    v-bind="$props"
    :value="currentValue"
    @input="inputChange"
    @focus="inputFocus"
    @blur="inputBlur"
    @keyup.enter="inputEnter"
    />
    <textarea
      v-else
      class="cat-textarea-item"
      :value="currentValue"
      @input="inputChange"
      v-bind="$props"
      @focus="inputFocus"
      @blur="inputBlur">
    </textarea>
    <i
      class="cat-icon caticon"
      :class="`caticon-${icon}`"
      @click="IconClick"
      v-if="icon">
    </i>
  </div>
</template>

<script>
export default {
  name: 'catInput',
  data: function () {
    return {
      currentValue: this.value
    }
  },
  props: {
    value: [String, Number],
    placeholder: String,
    size: String,
    resize: String,
    readonly: Boolean,
    autofocus: Boolean,
    icon: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
    form: String,
    maxlength: [Number, String],
    minlength: [Number, String],
    max: {},
    min: {},
    direction: String,
    status: String,
    onIconClick: Function
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    inputChange (e) {
      let value = e.target.value
      this.$emit('input', value)
      this.$emit('change', value)
    },
    inputFocus (e) {
      this.$emit('focus', e)
    },
    inputBlur (e) {
      this.$emit('blur', e)
    },
    inputEnter (e) {
      this.$emit('enter', e)
    },
    IconClick (e) {
      if (this.onIconClick) {
        this.onIconClick(e)
      }
      this.$emit('click', e)
    },
    setCurrentValue (val) {
      if (val === this.currentValue) return
      this.currentValue = val
    }
  }
}
</script>

<style lang="scss">
  @import "../color.scss";
  .cat-input {
    position: relative;
    display: inline-block;
    input, textarea {
       position: relative;
       display: inline-block;
       padding: 4px 7px;
       width: 100%;
       height: 28px;
       font-size: 12px;
       line-height: 1.5;
       color: rgba(0,0,0,.65);
       background-color: $G20;
       background-image: none;
       border: 1px solid $G70;
       border-radius: 4px;
       transition: all .3s;
       box-sizing: border-box;

       &::-moz-placeholder {
         color: $G70;
         opacity: 1;
       }

       &:-ms-input-placeholder {
         color: $G70;
       }

       &::-webkit-input-placeholder {
         color: $G70;
       }

       &:hover, &:focus {
         border-color: $B50;
       }

       &:focus {
         outline: 0;
         box-shadow: 0 0 0 2px rgba(16,142,233,.2);
       }
     }

    textarea {
      max-width: 100%;
      height: auto;
      vertical-align: bottom;
    }

    i {
      position: absolute;
      top: 50%;
      right: 7px;
      font-size: 14px;
      line-height: 0;
      cursor: pointer;

      &:hover {
        color: $B50;
      }
    }
  }

  .cat-input-large input {
    padding: 6px 7px;
	  height: 32px;
  }

  .cat-input-small input {
    padding: 1px 7px;
	   height: 22px;
  }

  .cat-input-status-success {
    input {
      border-color: $GN50;

      &:focus, &:hover {
        border-color: $GN50;
        box-shadow: none;
      }
    }

    i {
      color: $GN50;
      &:hover {
        color: $GN50;
      }
    }
  }

  .cat-input-status-error {
    input {
      border-color: $R50;

      &:focus, &:hover {
        border-color: $R50;
        box-shadow: none;
      }
    }

    i {
      color: $R50;
      &:hover {
        color: $R50;
      }
    }
  }

  .cat-input-status-warning {
    input {
      border-color: $A50;

      &:focus, &:hover {
        border-color: $A50;
        box-shadow: none;
      }
    }

    i {
      color: $A50;
      &:hover {
        color: $A50;
      }
    }
  }

  .cat-input-status-info {
    input {
      border-color: $B50;

      &:focus, &:hover {
        border-color: $B50;
        box-shadow: none;
      }
    }

    i {
      color: $B50;
      &:hover {
        color: $B50;
      }
    }
  }


  .cat-input-disabled input, .cat-input-readonly input{
  	background-color: #f7f7f7;
  	opacity: 1;
  	cursor: not-allowed;
  	color: $G70;

    &:hover, &:focus {
      border-color: $G70;
    }

    &:focus {
    	outline: 0;
    	box-shadow: none;
    }
  }

  .cat-input-readonly input {
    cursor: auto;
  }

  .cat-input-icon input {
    padding-right: 25px;
  }

  .cat-input-direction-left {
    input {
     padding-left: 25px;
    }

    i {
      left: 7px;
    }
  }
</style>
