<template>
  <div>
    <!-- 向子组件传值 -->
    <info :todos="$store.state.todos.filter((todo) => todo.completed)"></info>
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"
        ><strong>{{
          $store.state.todos.filter((todo) => todo.completed).length
        }}</strong>
        item left</span
      >
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <router-link to="/all">All</router-link>
        </li>
        <li>
          <router-link to="/active">Active</router-link>
        </li>
        <li>
          <router-link class="selected" to="/completed">Completed</router-link>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button
        class="clear-completed"
        @click="deleteAllCom"
        v-show="$store.getters.s"
      >
        Clear completed
      </button>
    </footer>
  </div>
</template>

<script>
import info from "./todos.vue";
export default {
  components: {
    info,
  },
  methods: {
    deleteAllCom() {
      this.$store.commit("deleteAllCom");
    },
  },
};
</script>
<style lang="scss" scoped></style>
