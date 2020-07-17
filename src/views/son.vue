<template>
  <div>
    899999
  </div>
</template>

<script>
export default {
  name: "son",
  created() {
      // console.log()
      setTimeout(()=>{
          this.$parent.btn(999999999);
      },2000)
  },
    data: () => ({
        abc:998
    }),
    methods:{
      sssset(number){
          console.log('我是吱吱吱吱在'+number)
      }
    }
};
</script>

<style scoped></style>
