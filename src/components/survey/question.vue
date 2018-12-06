<template>
  <div class="question">
    <h4>{{question.num}}:{{question.title}}</h4>
    <el-radio v-model="radio" label="1">{{question.selector1}}</el-radio>
    <el-radio v-model="radio" label="2">{{question.selector2}}</el-radio>
  </div>
</template>
<script>
export default {
  name: 'question',
  data() {
    return {
      radio: '1',
      
    }
  },
  props:{
    question:{
      type:Object,
      required:true
    }
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  height: 400px;
}

h4 {
  margin-bottom: 10px;
}

</style>
