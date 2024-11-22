<template>
  <div class="profile-container">
    <h1>Person Introduction</h1>
    <div class="profile-card">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        class="profile-image"
      />
      <div class="profile-info">
        <h2>{{ person.name }}</h2>
        <p><strong>Age:</strong> {{ person.age }}</p>
        <p><strong>Occupation:</strong> {{ person.occupation }}</p>
        <div class="hobbies">
          <h3>Hobbies:</h3>
          <ul>
            <li v-for="(hobby, index) in person.hobbies" :key="index">
              {{ hobby }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const person = reactive({
  name: 'John Doe',
  age: 25,
  occupation: 'Software Developer',
  hobbies: ['Reading', 'Gaming', 'Traveling']
})
</script>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-card {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 2rem;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.profile-info {
  flex: 1;
}

.hobbies {
  margin-top: 1rem;
}

.hobbies ul {
  list-style-type: none;
  padding: 0;
}

.hobbies li {
  display: inline-block;
  margin-right: 1rem;
  background-color: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}
</style>