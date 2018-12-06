<!--结构 -->
<template>
  <el-container>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <!-- 表格 -->
      <template>
    <el-table
      :data="tableData"
      style="width: 100%; height:600px;">
      <el-table-column
        prop="userId"
        label="用户id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
    </el-table>


    <button @click="getData">请求数据测试</button>
    <div id="get"></div>

   <!--  posts数据 -->
    <div>
      <div v-for="posts in postsData">
        <h4>{{posts.userId}}.{{posts.id}}</h4>
        <h5>{{posts.title}}</h5>
        <p>{{posts.body}}</p>
      </div>
    </div>

   

    <!-- 分页 -->
     <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 25, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
  </div>
  </template>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>


<!--行为 -->
<script>

export default {
  /*name值最好不要和html文本冲突，并且建议与文件名一致*/
  name: 'element_test',
  data(){
    return {
      tableData: [],
      postsData:[],
      currentPage4: 2,
      messager:"自定义指令",
    }
  },
  components: {

  },
  methods:{
    handleOpen:function(){

    },
    handleClose:function(){

    },
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}`);
    },
    /*getalbums:function(){
      return axios.get('http://jsonplaceholder.typicode.com/albums');
    },
    getposts:function(){
      return axios.get('http://jsonplaceholder.typicode.com/posts');
    },*/
    getData:function(){
      this.axios.get('http://jsonplaceholder.typicode.com/albums').then((res)=>{
      console.log(res.data);
      var html = "";
      for (var i = 0; i < 3; i++) {
        var stopsName = res.data[i];
      /* html += `<div @click=setID()>${stopsName.id}-${stopsName.title}</div>`;*/
      }
      document.getElementById('get').innerHTML = html;
      })
    },
    setID:function(){
      console.log("3333")
    }
  },
  created:function(){
    this.axios.get('http://jsonplaceholder.typicode.com/albums').then((res)=>{
      //console.log(res.data);
      this.tableData = res.data;
    })
    this.axios.get('http://jsonplaceholder.typicode.com/posts').then((res)=>{
      //console.log(res.data);
      this.postsData = res.data;
    })
    /*axios.all([getalbums(),getposts()]).then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));*/
  },
  
}
</script>


<!--样式 -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    line-height: 40px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>


