<!-- 结构 -->
<template>
  <div id="Home">
    <!--组件名不能和html标签冲突,最好全小写并且包含一个连字符-->
    <!--父级接受子组件向父组件传值格式：v-on:自定义事件名="调用方法名($event)"接受的值必须用$event传递-->
    <app-header v-bind:name1="name1" v-on:change_parents="change_parents($event)"></app-header>
    <Component_test1 v-bind:id_num="id_num"></Component_test1>
    <Component_test1 v-bind:id_num="id_num"></Component_test1>

    <!--属性传值用v-bind直接绑定一个自定义属性。
         格式：v-bind:自定义属性名="需要传的值/数组，对象名"。
         eg:v-bind:name1="name1"-->
    <app-footer v-bind:name1="name1">
      <p>在组件之间插入内容的时候需要用到slot,不然内容不渲染显示出来（在footer页面用slot标签占位）</p>
      
      <!-- 只有给slot定义了name才能给子组件里的内容排序;
            用法一：用在template标签上
            用法二：用在普通标签上 -->
      <!-- slot分发的内容（就是template或普通html标签内的内容：例子：{{bottom_data}}），作用域在父组件上 -->
      <template slot="bottom">{{bottom_data}}</template>
      <!-- 作用域插槽：通过临时变量props传递数据(2.x之后用slot-scope,单独scope会警告)-->
      <template slot="top" slot-scope="props">
        <div>top</div>
        <!-- 用随机变量props和在子组件定义的数据msg来访问子组件的数据：props.msg -->
        <div>{{props.msg}}</div>
      </template>
      <div slot="other">含糊哈哈哈</div>
      <div>哈哈哈</div>
    </app-footer>
  </div>
</template>


<!-- 行为 -->
<script>
//插入组件
//import HelloWorld from './components/HelloWorld'
import Component_test1 from './Component_test1'
import app_header from './Header'
import app_footer from './Footer'


//导出
export default {
  name: 'Home',
  data(){
    return {
      id_num :[/*'内容','内容','内容','内容','内容'*/ ],
      name1:"大头",
      bottom_data:"bottom",
    }
  },
  components: {
   //注册组件格式。"组件名"：import插入的组件，组件名建议用减号分隔。
   //HelloWorld
   "app-header" : app_header,
   "Component_test1":Component_test1,
   "app-footer" : app_footer,
  },
  methods:{
    change_parents:function(event){
      this.name1 = event;
    },
  },
  created:function(){
    //http get请求
   this.$http.get("http://jsonplaceholder.typicode.com/users").then(
   /*function(data){
     console.log(data);
     this.id_num = data.body;
   }*/

   //可以写成箭头函数模式:箭头函数就是匿名函数，传递的参数写在括号里面。
   (data)=>{
    // console.log(data);
     this.id_num = data.body;
   })
  },
  
}
</script>


<!-- 样式 -->
<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
 /*  margin-top: 60px; */
}
</style>
