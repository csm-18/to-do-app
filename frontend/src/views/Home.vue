<script setup>
import Task from '@/components/Task.vue'

import { ref } from 'vue'

const task = ref('')
const tasks = ref([])
</script>

<template>
  <div class="container">
    <h1>To-Do App</h1>
    <div class="add-task">
      <input v-model="task" type="text" placeholder="Add a new task" />
      <button @click="tasks.push(task)">Add Task</button>
    </div>
    <div class="tasks" v-for="(task, index) in tasks.reverse()" :key="index">
      <Task :task_msg="task" />
    </div>
  </div>
</template>

<style scoped lang="scss">
div.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4rem;
    font-family: sans;
    color: var(--blue);
  }

  .add-task {
    margin-top: 2rem;
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-radius: 1rem;
    input {
      width: 80%;
      font-size: 2rem;
      padding: 0.5rem;
    }
    button {
      width: 20%;
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }

  .tasks {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
}
</style>
