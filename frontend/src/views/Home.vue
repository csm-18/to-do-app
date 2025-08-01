<script setup>
import Task from '@/components/Task.vue'

import { ref } from 'vue'

const task = ref('')
const tasks = ref([])

function add_task() {
  let temp = task.value.trim()
  if (temp === '') {
    return
  }

  tasks.value.unshift(temp)
  task.value = ''
}
</script>

<template>
  <div class="container">
    <h1>To-Do App</h1>
    <div class="add-task">
      <input v-model="task" type="text" placeholder="Add a new task" />
      <button @click="add_task">Add Task</button>
    </div>
    <div class="tasks" v-for="(task_msg, index) in tasks" :key="index">
      <Task :task_msg="task_msg" />
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

  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;

  h1 {
    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;

    font-size: 4rem;

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

      background-color: var(--blue);
      color: white;
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
