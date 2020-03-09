<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="msg1">
      {{msg1}}
    </div>
    <div>{{number+1}}</div>
    <p v-if="seen">现在你看到我了</p>
    <p v-else>隐藏了</p>
    <button @click="handleClick">隐藏</button>
    <div v-n="10"></div>
    <div :class="[a1, a2]">
      我借你{{borrow}},你还我{{return_m}},还剩{{b}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      msg1:'<span style="color:red">HelloWorld</span>',
      number:1,
      seen:true,
      borrow:100,
      return_m:10,
      a1: 'test1',
      a2: 'test2'
    }
  },
  computed:{
    b (){
      return this.borrow-this.return_m
    }
  },
  methods:{
    handleClick () {
      this.seen=!this.seen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ca1313;
}
</style>
