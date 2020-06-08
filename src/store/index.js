import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     todos:[
       {id:1,name:'吃饭',completed:true},
       {id:2,name:'睡觉',completed:false},
       {id:3,name:'学习',completed:true}
      ],
      flag:true
  },
  getters:{
    // activeNum(state){
    //   return state.todos.filter(todo=>!todo.completed).length
    // }
    //全选/不全选的规则
    flag(state){
      var f=(state.todos.filter(todo=>!todo.completed).length==0)
      if(state.flag==f){
        return state.flag
      }
      return !state.flag
    },
    //return 的true或false 设置clearAllCom 的v-show
    s(state){
      return !(state.todos.filter(todo=>todo.completed).length==0)
    }
  },
  mutations: {
    //新增todo
    addTodo(state,todo){
      state.todos.push(todo)
    },
    //设置flag
    uFlag(state,f){
      state.flag=f
    },
    //删除todo
    deleteTodo(state,id){
      for(var i=0;i<state.todos.length;i++){
        if(state.todos[i].id==id){
          state.todos.splice(i,1)
        }
      }
    },
    //删除已完成的todo
    deleteAllCom(state){
      for(var i=0;i<state.todos.length;i++){
        if(state.todos[i].completed){
          state.todos.splice(i,1)
        }
      }
    },
    // uS(state,s){
    //   state.s=s
    // }
  },
  actions: {
    uFlag(context,f){
      
        for(var j=0;j<context.state.todos.length;j++){
          context.state.todos[j].completed=f
        }
      context.commit('uFlag',f)
    }
  },
  modules: {
  }
})
