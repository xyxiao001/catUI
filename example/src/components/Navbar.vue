<template>
  <nav class="nav">
    <div class="nav-left">
      <a href="/" class="logo">
        <img src="http://ovhjj0en3.bkt.clouddn.com/logo1.png" alt="" />
        <span>goodboy</span>
      </a>
    </div>
    <div class="nav-right">
      <ul class="navbar">
        <li>
          <router-link :to="{ path: '/'}" exact>首页</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Introduce'}" exact>指南</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Component'}" exact>组件</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Resource'}" exact>资源</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/color.scss";
  .nav {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
    color: #383838;

    .nav-left {
      .logo {
        display: flex;
        position: relative;
        height: 80px;
        line-height: 80px;

        img {
          display: inline-block;
          padding-top: 15px;
          height: 40px;
        }

        span {
          display: inline-block;
          margin-left: 10px;
          color: $B50;
          font-weight: bold;
          font-size: 16px;
          line-height: 90px;
        }
      }
    }

    .nav-right {
      .navbar {
        display: inline-block;
        margin: 0;
        padding: 0;
        height: 80px;
        font-size: 14px;
        line-height: 80px;
        list-style-type: none;

        li {
          position: relative;
          display: inline-block;
          cursor: pointer;
          transition: color .3s;

          a {
            display: block;
            padding: 0 24px;
            color: $G100;
            transition: color .3s;

            &:hover {
              color: $B50;
            }

            &.router-activity {
              color: $B50;

              &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                height: 2px;
                width: 100%;
                background-color: $B50;
              }
            }
          }
        }
      }
    }
  }
</style>
