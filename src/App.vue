<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello,world"/>
    <!-- <com :age="age" @patch="msg2">
      <h1>插槽加东西</h1>
    </com> -->
    <!-- <Vuexx /> -->
    <div>-------------------------------------------------------------</div>
    <pagea />
    <pageb />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
// import com from './components/com'
// import Vuexx from './components/vuex'
import pagea from './pages/a.vue'
import pageb from './pages/b.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    // com,
    // Vuexx,
    pagea,
    pageb
  },
  data () {
    return{
      age: 18
    }
  },
  methods:{
    msg2 () {
      this.age++
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
