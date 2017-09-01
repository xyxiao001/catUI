<template>
  <section class="slider-menu">
    <ul class="cat-menu">
      <li class="cat-menu-item" v-for="item in lists">
        <a v-if="item.name === ''">{{ item.text }} <span v-if="item.tips">{{ item.tips }}</span></a>
        <router-link v-else class="cat-item-link" :to="{ name: item.name}">{{ item.text }} <span v-if="item.tips">{{ item.tips }}</span></router-link>
        <ul class="cat-menu">
          <li class="cat-menu-item" v-for="i in item.childs">
            <a v-if="i.name === ''">{{ i.text }} <span v-if="i.tips">{{ i.tips }}</span></a>
            <router-link v-else class="cat-item-link" :to="{ name: i.name}">{{ i.text }} <span  v-if="i.tips">{{ i.tips }}</span></router-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./cat/color.scss";
  .cat-menu {
    outline: none;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background: #fff;
    line-height: 46px;
    transition: background .3s cubic-bezier(.645,.045,.355,1),width .15s cubic-bezier(.645,.045,.355,1);
  }

  .cat-menu-item {
    position: relative;
    padding-left: 24px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;

    a {
      display: block;
      color: $G100;

      span {
        font-size: 12px;
        margin-left: 6px;
        font-weight: 400;
        opacity: .67;
      }

      &::before {
        position: absolute;
        background-color: transparent;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        content: "";
      }

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        border-right: 3px solid $B50;
        transform: scaleY(0);
        opacity: 0;
        transition: opacity .15s cubic-bezier(.215,.61,.355,1),-webkit-transform .15s cubic-bezier(.215,.61,.355,1);
        transition: transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1);
        z-index: 100;
      }

      &.router-activity {
        color: $B50;
      }

      &.router-activity::before {
        background-color: $B10;
        opacity: 0.2;
      }

      &.router-activity::after {
        transform: scaleY(1);
        opacity: 1;
      }
    }

    .cat-item-link {
      &:hover {
        cursor: pointer;
        color: $B50;
      }
    }

    .cat-menu-item {
      font-size: 90%;
    }
  }
</style>
