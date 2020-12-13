<template>
  <div class="home">
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <button @click="btn">啊啊啊啊</button>

<!--    <p style="font-weight: bold;font-size: 18px;">{{aPlus}}</p>-->
    <son ref="abc"></son>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import son from "@/views/son.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    son
  },
  created(){
    console.log(this.$bus)
  },
  data: () => ({
    a:66,
    aaaaaaaaaaa:9999999999
  }),
  // watch: {
  //   firstName: function (val) {
  //     this.fullName = val + ' ' + this.lastName
  //   },
  //   lastName: function (val) {
  //     this.fullName = this.firstName + ' ' + val
  //   }
  // },
  computed: {
    // 仅读取
    aDouble: function () {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (newValue) {
        console.log(newValue)
        this.a = newValue+ 99
      }
    }
  },
  methods:{
    btn(){
      // console.log(this.$children)
      // this.$refs.abc.sssset(111)
      // console.log(son)
      // this.a = 100;
      // console.log(111111111111)
      // this.$bus.$emit("aMsg", '来自A页面的消息');
      // console.log(this.$bus)
      // this.$bus.$off('aMsg')
      // console.log(this.$bus)
      // this.$router.push({name:'About'})
      this.$router.push({name:'About'})
    },
    sendMsg() {
      this.$bus.$emit("aMsg", '来自A页面的消息');
    }
  }
};
</script>
