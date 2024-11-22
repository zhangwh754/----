<template>
  <div class="counter-container">
    <h1>Simple Counter App</h1>
    <div class="counter-display">
      <h2>{{ count }}</h2>
    </div>
    <div class="button-group">
      <button @click="decrement">-</button>
      <button @click="reset">Reset</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reset = () => {
  count.value = 0
}
</script>

<style scoped>
.counter-container {
  text-align: center;
  padding: 2rem;
}

.counter-display {
  font-size: 2rem;
  margin: 2rem 0;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>