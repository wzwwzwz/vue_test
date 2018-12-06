<!--结构 -->
<template>
  <footer>
    <!-- 在这里的在是渲染出来的顺序；用name属性匹配父组件的slot属性值；还有一个未命名的插槽，这个是默认插槽，也就是说它会作为所有未匹配到插槽的内容的统一出口。 -->
    <!-- 在slot作用域内自定义数据msg -->
    <slot name="top" :msg="msg"></slot>
    <slot name="other"></slot>
    <slot></slot>
    <slot name="bottom"></slot>
  	<P>footer：{{name1}}</p>
    <button>第二行</button>
  </footer>
</template>


<!--行为 -->
<script>

export default {
  /*name值最好不要和html文本冲突，并且建议与文件名一致*/
  name: 'Footer',
  data(){
    return {
      msg:"通过作用于插槽：来自子组件的数据",
      
    }
  },
  components: {
   
  },
  props:{
    name1:{
      type:String,
      required:true,
    }
  }
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


