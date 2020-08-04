<template>
  <div id="app">
    <project-header/>
    <router-view/>
    <project-footer/>
  </div>
</template>

<script>
import header from "@/components/Header.vue";
import footer from "@/components/Footer.vue";

export default {
  components: {
    'project-header': header,
    'project-footer': footer
  }
}
</script>

<style lang="scss">
@import './assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
$pageBackground: whitesmoke;


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $pageBackground;
  min-height:100vh;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>