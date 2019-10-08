<template>
  <div id="home">{{data}}
    <button @click="button()">点击</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data: "",
      addObj: {},
    };
  },
  mounted() {
    // setTimeout(this.getData(),10000)
    // this.getData();
  },
  methods: {
    getData() {
      this.data = "成功";
      this.$set(this.addObj,'name','zhangsan','age','12')
      console.log("addObj",this.addObj)
      alert("延迟加载")
    },
    button() {
      console.log('getData函数属性',this.getData,typeof(this.getData))
      setTimeout(this.getData,500)
    }
  }
};
</script>

<style>
</style>