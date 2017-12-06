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
        <transition name="fade" mode="out-in" @after-leave="afterLeave">
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
              name: '',
              text: '基础组件',
              childs: [
                {
                  name: 'Button',
                  text: 'Button',
                  tips: '按钮'
                },
                {
                  name: 'Icon',
                  text: 'Icon',
                  tips: '图标'
                }
              ]
            },
            {
              name: '',
              text: '表单组件',
              childs: [
                {
                  name: 'Input',
                  text: 'Input',
                  tips: '输入框'
                },
                {
                  name: 'InputNumber',
                  text: 'InputNumber',
                  tips: '数字输入框'
                },
                {
                  name: 'Radio',
                  text: 'Radio',
                  tips: '单选框'
                }
              ]
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
  methods: {
    afterLeave () {
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    document.title = '组件'
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

  @media screen and (max-width: 600px) {
    .container {
      flex-wrap: wrap;
      margin: 0;
    }

    .cat-slider {
      width: 100%;
    }
  }
</style>
