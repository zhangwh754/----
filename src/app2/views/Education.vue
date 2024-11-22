<template>
  <div class="education">
    <h1>Education History</h1>
    <div class="education-list">
      <div v-for="(edu, index) in education" :key="index" class="education-item">
        <h3>{{ edu.degree }}</h3>
        <p class="school">{{ edu.school }}</p>
        <p class="year">{{ edu.year }}</p>
        <p class="description">{{ edu.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const education = ref([
  {
    degree: 'Bachelor of Science',
    school: 'Tech University',
    year: '2018-2022',
    description: 'Major in Computer Science'
  },
  {
    degree: 'High School Diploma',
    school: 'City High School',
    year: '2014-2018',
    description: 'Focus on Mathematics and Science'
  }
])
</script>

<style scoped>
.education {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.education-item {
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
}

.school {
  color: #666;
  font-weight: bold;
}

.year {
  color: #42b983;
}
</style>