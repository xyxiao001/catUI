<template>
  <div class="wrapper">
    <header class="page-header collapse">
      <Navbar></Navbar>
    </header>
    <section class="container">
      <div class="cat-slider">
        <Slider :lists="lists"></Slider>
      </div>
      <div class="main-doc">
        <router-view></router-view>
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
              name: '',
              text: '介绍'
            },
            {
              name: '',
              text: '安装'
            },
            {
              name: '',
              text: '快速上手'
            }
          ]
        },
        {
          name: '',
          text: '更新日志'
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

<style lang="scss" scoped>
  .cat-slider {
    width: 300px;
  }

  .main-doc {
    padding: 0 40px 120px;
    margin-left: -1px;
    min-height: 500px;
    overflow: hidden;
    border-left: 1px solid #e9e9e9;
  }
</style>
