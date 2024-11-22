<template>
  <div class="app">
    <nav>
      <router-link to="/">Profile</router-link> |
      <router-link to="/education">Education</router-link> |
      <router-link to="/experience">Experience</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

nav {
  padding: 20px 0;
  text-align: center;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  color: #42b983;
  font-weight: bold;
}
</style>