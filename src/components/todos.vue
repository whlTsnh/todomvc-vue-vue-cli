<template>
    <div>
        <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model="flag">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<li v-for="todo of todos" :class="{completed:todo.completed,editing:todo.id==editingId}" :key="todo.id">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed">
							<label @dblclick="editing(todo.id)">{{todo.name}}</label>
							<button class="destroy" @click="deleteTodo(todo.id)"></button>
						</div>
						<form @submit.prevent="save">
						<input  class="edit" v-model="todo.name"  @blur="save">
						</form>
					</li>
				</ul>
			</section>
    </div>
</template>

<script>
export default {
	data(){
		return {
			editingId:-1//令editingId等于一个不可能的id
		}
	},
	props:["todos"],
	computed:{
		flag:{
			get(){
				return this.$store.getters.flag
				},
			set(n){
				this.$store.dispatch('uFlag',n)
				}
			}
	},
	watch:{
		//深度监听todos
		todos:{
			handler(){
				var i=this.$store.state.todos.length//获取$store.state.todos的length
				//获取未完成的个数
				var j=this.$store.state.todos.filter(todo=>todo.completed).length
				if(i==j){
					this.$store.dispatch('uFlag',true)
				}else{
					this.$store.commit('uFlag',false)
				}
				// if(j==0){
				// 	this.$store.commit('uS',false)
				// }else{
				// 	this.$store.commit('uS',true)
				// }
			},
			deep:true//深度监听
		}
	},
	methods:{
		//根据id删除todo
		deleteTodo(id){
			this.$store.commit('deleteTodo',id)
		},
		editing(id){
			this.editingId=id//这样上面的editing就会接受到true 显示文本框
			// var edits=document.querySelectorAll(".edit")
			// for(var i=0;i<this.todos.length;i++){
			// 	if(this.todos[i].id==id){
			// 		console.log(edits[i])
			// 		edits[i].focus()
			// 	}
			// }
		},
		save(){
			this.editingId=-1//令editingId等于一个不可能的id
		}
	}
}
</script>

<style lang="scss">
    
</style>