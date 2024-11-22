<template>
  <div class="experience">
    <h1>Work Experience</h1>
    <div class="experience-list">
      <div v-for="(exp, index) in experience" :key="index" class="experience-item">
        <h3>{{ exp.position }}</h3>
        <p class="company">{{ exp.company }}</p>
        <p class="period">{{ exp.period }}</p>
        <ul class="responsibilities">
          <li v-for="(resp, idx) in exp.responsibilities" :key="idx">
            {{ resp }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const experience = ref([
  {
    position: 'Software Developer',
    company: 'Tech Corp',
    period: '2022-Present',
    responsibilities: [
      'Developing web applications using Vue.js',
      'Collaborating with cross-functional teams',
      'Implementing responsive designs'
    ]
  },
  {
    position: 'Intern Developer',
    company: 'Start-up Inc',
    period: '2021-2022',
    responsibilities: [
      'Assisted in frontend development',
      'Learned modern web technologies',
      'Participated in code reviews'
    ]
  }
])
</script>

<style scoped>
.experience {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.experience-item {
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
}

.company {
  color: #666;
  font-weight: bold;
}

.period {
  color: #42b983;
}

.responsibilities {
  margin-top: 10px;
}
</style>