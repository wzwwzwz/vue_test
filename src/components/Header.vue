<!--结构 -->
<template>
  <header >
  	<P @click="change" v-html="">头部:{{name2}}</p>
   <button @click="change_name2">向父组件传值</button>
  </header>
</template>


<!--行为 -->
<script>

export default {
  /*name值最好不要和html文本冲突，并且建议与文件名一致。作用相当于父组件的el属性。*/
  name: 'Header',
  data () {   
    return {
      /*创建一个本地值用于保存传递过来的数据，这样修改数据之后不会报错*/
      name2: this.name1,
    }
  },
  components: {
  
  },
  /*接受父级属性传值，严格写法。注明type,required的值。*/
  props:{
  	name1:{
      /*type:[String,Number]*/   //type可以定义多个参数，表示可以是字符串或数字类型。
      //如果是数组或对象，必选返回一个函数
      /*type:Array,
      default:function(){
        return [],
      }*/
      //自定义一个验证函数
      /*validator:function (value) {
        return value > 10;
      }*/
  		type:String,
  		required:true,
  	}
  },
  methods:{
    change:function(){
  		this.name2 = "我不是大头"
  	},
  	change_name2:function(){
  		/*子组件向负组件传值添加自定义事件格式：this.$emit("自定义事件名","传递的数据")*/
  		this.$emit("change_parents","子组件向负组件传值");
  		
  	},
  	
  },
  computed:{
	  /*change:function(){
		  return this.name1 = "我不是大头";
		}*/
	 /* name2:function(){
		  return this.name1;
		}*/
		
    },






   /*生命周期*/
  /*beforeCreate:function(){
    alert("beforeCreate:组件实例化之前执行的函数");
  },
  created:function(){
    alert("created:组件实例化完毕,但页面还未显示");
  },
  beforeMount:function(){
    alert("beforeMount:组件挂在前,页面仍未展示,但虚拟Dom已经配置");
  },
  mounted:function(){
    alert("mounted:组件挂在后,此方法执行后,页面显示");
  },
  beforeUpdate:function(){
    alert("beforeUpdate:组件更新前,页面仍未更新,但虚拟Dom已经配置");
  },
  updated:function(){
    alert("updated:组件更新,此方法执行后,页面显示");
  },
  beforeDestory:function(){
    alert("beforeDestory:组件销毁前");
  },
  destoryed:function(){
    alert("destoryed:组件销毁");
  }*/



}
</script>


<!--样式 -->
<style scoped>
p{
    width: 100%;
    background: #ddd;
    text-align: center;
    /* height: 100px; */
    padding: 20px;
    box-sizing: border-box;
}
</style>


