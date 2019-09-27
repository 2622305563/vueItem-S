<template>
  <div id="home">{{data}}
    <div>你好</div>
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
    this.getData();
  },
  methods: {
    getData() {
      this.data = "成功";
      this.$set(this.addObj,'name','zhangsan','age','12')
      console.log("addObj",this.addObj)
    }
  }
};
</script>

<style>
</style>