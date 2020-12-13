<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "son",
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    alert('进来了');
    next();
  },
  beforeRouteLeave(to, from, next) {
    alert('确定退出？');
    next(true);
  },
  created() {},
  data: () => ({
    abc: 998,
    msg: ""
  }),
  mounted() {

    this.$bus.$on("aMsg", msg => {
      console.log(msg)
      // A发送来的消息
      this.msg = msg;
    });
  },
  methods: {}
};
</script>

<style scoped></style>
