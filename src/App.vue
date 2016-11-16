<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Hello,
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
