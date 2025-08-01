<script setup>
import { ref } from 'vue'

const props = defineProps(['task_msg'])

const show = ref(true)
</script>

<template>
  <div v-if="show" class="task">
    <input class="tick" type="checkbox" name="" id="" />
    <p>{{ task_msg }}</p>
    <button class="remove-btn" @click="show = false">Remove</button>
  </div>
</template>

<style scoped lang="scss">
.task {
  font-weight: 500;

  margin: 1rem;
  width: 100%;
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  font-size: 2rem;
  background: var(--blue);

  .tick {
    width: 2rem;
    height: 2rem;
  }

  p {
    margin: 0;
    text-align: center;
    font-size: 2rem;
    width: 30rem;
    word-break: break-word;
  }
  .remove-btn {
    font-weight: 900;
    margin: 0;
    border-radius: 8px;
    font-size: 1.4rem;
    background-color: rgb(235, 16, 16);
    color: white;
  }
}
</style>
