<template>
    <div>
		<!-- 向子组件传值 -->
        <info :todos="$store.state.todos"></info>
			<!-- This footer should hidden by default and shown when there are todos -->
			<footer class="footer">
												<!-- 当前路由有多少todo -->
				<span class="todo-count"><strong>{{$store.state.todos.length}}</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
            <router-link class="selected" to="/all">All</router-link>
					</li>
					<li>
						<router-link to="/active">Active</router-link>
					</li>
					<li>
						<router-link to="/completed">Completed</router-link>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓           （只要有compeleted为true就显示）通过store中getter的s来判断是否显示 -->
				<button class="clear-completed" @click="deleteAllCom" v-show="$store.getters.s">Clear completed</button>
			</footer>
    </div>
</template>

<script>
//引入todos.vue组件
import info from './todos.vue'
export default {
    components:{
        info//让它变成路由组件的子组件，这样方便传不同的todos
    },
    methods:{
		//删除所有已完成todo
		deleteAllCom(){
			//调用store中mutations的deleteAllCom
            this.$store.commit('deleteAllCom')
		}
    }
}
</script>
<style lang="scss" scoped>
    
</style>