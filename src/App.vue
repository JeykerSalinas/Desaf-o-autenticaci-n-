<template>
  <div id="app">
    <router-view />
    <nav class="fixed-bottom bg-transparent">
      <router-link class="btn btn-ligth" to="/">Home</router-link> |
      <router-link class="btn btn-ligth" to="/login">Login</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
}
nav {
  padding: 30px;
}
</style>
