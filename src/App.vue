<template>
  <section class="todoapp">
			<header class="header">
				
				<h1>todos</h1>
        <form @submit.prevent="addTodo">
				<input v-model="name" class="new-todo" placeholder="What needs to be done?" autofocus  v-focus>
        </form>
			</header>
			<!-- This section should be hidden by default and shown when there are todos -->
			<router-view></router-view>
		</section>
</template>
<script>
export default {
  data(){
    return {
             name:""//用于双向绑定
      }
  },
  methods: {
    //新增todo
    addTodo(){
      let id=new Date().getTime()
      let todo={
        id:id,//当前毫秒
        name:this.name,//将input 双向绑定的name 赋值给 新增todo的name
        completed:false//新增是活跃的所以是false
      }
      this.$store.commit('addTodo',todo)//调用store中mutations的addTodo,并传todo给它
      this.name=""//置空
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
