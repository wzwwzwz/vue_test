<template>
  <div class="button">
    <el-row>
      <el-button @click="last" :disabled="last_off">上一步</el-button>
      <el-button @click="nest" :disabled="nest_off">下一步</el-button>
      <el-button @click="reset">重置</el-button>
      <!-- <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button> -->
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Button',
  data() {
    return {
      num: 0,
      last_off: false,
      nest_off: false,
      arrlen: this.len,
    }
  },
  methods: {
    last: function() {
      var num = this.num - 1;
      this.num = num;
      //console.log(this.num);
      if (this.num <= 0) {
        this.last_off = true;
      } else {
        this.$emit("change", this.num)
      }

    },
    nest: function() {
      //console.log(arrlen);
      var num = this.num + 1;
      this.num = num;
      //console.log(this.num);
      if (this.num >= this.arrlen) {
        this.nest_off = true;
      } else {
        this.$emit("change", this.num)
      }

    },
    reset: function() {
      this.$emit("change", 0)
    }
  },
  props: {
    len: {
      type: Number,
      required: true
    }
  },

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {}

</style>
