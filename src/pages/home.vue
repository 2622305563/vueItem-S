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
      data: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.data = "成功";
    }
  }
};
</script>

<style>
</style>