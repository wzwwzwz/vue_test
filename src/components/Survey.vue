<template>
  <div class="Survey">
    <zquestion :question="arr[num]"></zquestion>
    <zbutton @change="getchange($event)" :len="3"></zbutton>
  </div>
</template>
<script>
import button from "./Survey/button"
import question from "./Survey/question"

export default {
  name: 'Survey',
  data() {
    return {
      arr: [{
        "num": 1,
        "title":"您的性别？",
        "selector1":"男",
        "selector2":"女",
      },
      {
        "num": 2,
        "title":"您喜欢？",
        "selector1":"小狗",
        "selector2":"小猫",
      },
      {
        "num": 3,
        "title":"您不喜欢?",
        "selector1":"小猪",
        "selector2":"小野猪",
      }],
      num:0,
    }
  },
  components: {
    "zbutton": button,
    "zquestion": question,
  },
  methods:{
    getchange:function(event){
     //console.log(event);
      this.num = event;
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Survey {
  width: 400px;
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  border: 1px solid #545c64;
  padding: 18px;
}

</style>
