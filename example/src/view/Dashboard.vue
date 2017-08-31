<template>
  <div class="wrapper">
    <header class="page-header">
      <Navbar></Navbar>
    </header>
    <section class="container">
      <div class="logo">
        <img src="http://ovhjj0en3.bkt.clouddn.com/logo1.png" alt="" />
      </div>
      <h1>基于Clarity Design 开发的vue组件库</h1>
      <div class="show-btn">
        <div class="btn btn-start">
          <router-link :to="{name: 'Component'}" >开始使用</router-link>
        </div>
        <div class="btn btn-github">
          <a href="https://github.com/xyxiao001/catUI" target="_blank">Github</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  data: function () {
    return {
    }
  },
  components: {
    Navbar
  }
}
</script>


<style lang="scss" scoped>
  @import "../assets/color.scss";
  .container {
    display: block;
    padding-top: 20vh;
    text-align: center;
    margin: 0 auto;

    h1 {
      font-size: 36px;
      color: $B30;
      letter-spacing: 2px;
      margin-top: 50px;
      font-weight: bold;
      line-height: 1.8;
    }
  }

  .page-header {
    position: fixed;
  }

  .logo img {
    display: block;
    margin: auto;
  }

  .show-btn {
    margin-top: 100px;

    .btn {
      display: inline-block;
      width: 190px;
      height: 56px;
      margin: 0 35px;
      font-size: 18px;
      line-height: 56px;
      border-radius: 28px;
      transition: all .3s;
      cursor: pointer;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 28px;
      background: transparent;
      text-decoration: none;
      outline: none;
      cursor: pointer;
      transition: all .3s ease;
    }

    .btn-start {
      background-image: linear-gradient(90deg, $B10 0%, $B50 100%);
      a {
        color: $G20;
        box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);

        &:hover {
          box-shadow: 0 4px 12px 0 rgba(51,105,231,0.4);
        }
      }
    }

    .btn-github {
      border: 1px solid $B50;

      a {
        color: $B50;
      }
    }
  }
</style>
