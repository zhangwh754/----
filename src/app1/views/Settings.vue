<template>
  <div class="settings">
    <h1>Counter Settings</h1>
    <div class="settings-form">
      <div class="setting-item">
        <label>Step Size:</label>
        <input type="number" v-model="stepSize" min="1">
      </div>
      <div class="setting-item">
        <label>Theme:</label>
        <select v-model="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stepSize = ref(1)
const theme = ref('light')
</script>

<style scoped>
.settings {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.settings-form {
  margin-top: 20px;
}

.setting-item {
  margin: 15px 0;
}

label {
  display: inline-block;
  width: 100px;
}

input, select {
  padding: 5px;
  width: 150px;
}
</style>