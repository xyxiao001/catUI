<template>
  <div class="wrapper">
    <header class="page-header collapse">
      <Navbar></Navbar>
    </header>
    <section class="container">
      <div class="cat-slider">
        <Slider :lists="lists"></Slider>
      </div>
      <div class="at-markdown">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
export default {
  data: function () {
    return {
      lists: [
        {
          name: '',
          text: '开发指南',
          childs: [
            {
              name: 'Introduce',
              text: '介绍'
            },
            {
              name: 'Install',
              text: '安装'
            },
            {
              name: 'QuickStart',
              text: '快速上手'
            }
          ]
        },
        {
          name: 'UpdateLog',
          text: '更新日志'
        },
        {
          name: '',
          text: '组件',
          childs: [
            {
              name: 'Button',
              text: 'Button',
              tips: '按钮'
            }
          ]
        }
      ]
    }
  },
  components: {
    Navbar,
    Slider
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  @import "../components/cat/color.scss";
  .cat-slider {
    width: 300px;
  }

  .at-markdown {
    padding: 0 40px 120px;
    margin-left: -1px;
    width: 100%;
    min-height: 500px;
    overflow: hidden;
    border-left: 1px solid #e9e9e9;
  }

  a:hover {
    color: $B50;
    transition: color .3s ease;
  }
</style>
