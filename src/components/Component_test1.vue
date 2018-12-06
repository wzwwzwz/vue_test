<!--结构 -->
<template>
  <div class="Component_test1">
    <P>内容</p>
    	<ul>
    		<li v-for="(id,index) in id_num" v-bind:title="container" @click="change(index)">
    		{{index+1}}:{{id.name}}
         <p v-show="off">显示</p>
    		</li>
    	    <button @click="delete_pop">删除</button>
    	</ul>
  </div>
</template>



<!--行为 -->
<script>
export default {
  name: 'Component_test1',
  data () {
    return {
      container: '点击显示',
      off :false,
    }
  },
  components:{
  },
  computed:{
	  },
  methods:{
  	change:function(index){
  		console.log(index);
  		this.off = !this.off;
  	},
  	delete_pop:function(){
  		this.id_num.pop();
  	}
  },
  props:{
  	id_num:{
  		type:Array,
  		required:true,
  	}
  }

  
}
</script>


<!--样式 -->
<style scoped>
ul{
    display: flex;
    padding: 50px;
}

li{
    border: 1px solid #eee;
    width: 100px;
    height: 100px;
    list-style-type: none;
    flex: 1;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
}

li:hover{
	cursor: pointer;
}
</style>


