<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: url("./assets/font/Roboto-Regular.ttf");
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100vw;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.5715;
  background-color: #f9f9f9;
  width: inherit;
  overflow: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
router-view {
  padding: 100px;
}
</style>
