<template>
  <section class="slider-menu">
    <ul class="cat-menu">
      <li class="cat-menu-item" v-for="item in lists">
        <a v-if="item.name === ''">{{ item.text }}</a>
        <router-link v-else class="cat-item-link" :to="{ name: item.name}">{{ item.text }}</router-link>
        <ul class="cat-menu">
          <li class="cat-menu-item" v-for="i in item.childs">
            <a v-if="i.name === ''">{{ i.text }}</a>
            <router-link v-else class="cat-item-link" :to="{ name: i.name}">{{ i.text }}</router-link>
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
  @import "../assets/color.scss";
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
    padding-left: 24px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;

    a {
      display: block;
      color: $G100;
    }

    .cat-item-link {
      &:hover {
        cursor: pointer;
        color: $B50;
      }
    }

    .cat-menu-item {
      font-size: 80%;
    }
  }
</style>
