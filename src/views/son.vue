<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "son",
  beforeRouteLeave(to, from, next) {
    alert('确定退出？');
  },
  created() {
      // console.log()
      // setTimeout(()=>{
      //     this.$parent.btn(999999999);
      // },2000)
  },
    data: () => ({
        abc:998,
      msg:''
    }),
  mounted() {
    this.$bus.$on("aMsg", (msg) => {
      // A发送来的消息
      console.log(msg)
      this.msg = msg;
    });

  },
  methods:{
      sssset(number){
          console.log('我是吱吱吱吱在'+number)
      }
    }
};
</script>

<style scoped></style>
