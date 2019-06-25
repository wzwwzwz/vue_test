<!-- 结构 -->
<template>
  <div id="app">
    <!-- <ul>
      使用路由跳转链接，router-link标签，to属性相当于herf(就是指定的路径path的值)。
           默认是a标签，使用tag属性修改成自定义标签。
           v-bind绑定数据动态改变链接(缩写":")
      <li><router-link tag="li" :to="homelink" class="nav_hover">Home</router-link></li>
      路由跳转：使用name的值绑定
      <li><router-link :to="{name: 'HelloWorld'}">HelloWorld</router-link></li>
      <li><router-link :to="{name: 'Element_test'}">Element</router-link></li>
         </ul> -->
    <!-- 菜单栏 -->
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link tag="li" :to="homelink" class="nav_hover">Home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link tag="li" :to="{name: 'HelloWorld'}">HelloWorld</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link tag="li" :to="{name: 'Element_test'}">Element</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link tag="li" :to="{name: 'Survey'}">Survey</router-link>
      </el-menu-item>
    </el-menu>
    <!--在模板里使用路由渲染组件到页面上-->
    <router-view></router-view>
  </div>
</template>
<!-- 行为 -->
<script>
//数据处理
export default {
  name: 'App',
  data() {
    return {
      homelink: "/",
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  components: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log('菜单', key, keyPath);
    }
  },
}

</script>
<!-- 样式 -->
<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /*  margin-top: 60px; */
}

li {
  list-style-type: none;
}

ul {
  margin: 10px;
}

.nav_hover:hover {
  cursor: pointer;
}

</style>
