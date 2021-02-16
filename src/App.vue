<template>
  <div id="app">
    <TopBar nomeAplicacao= "APP Logo"></TopBar>
    <b-container class="bg-dark" fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar,
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
