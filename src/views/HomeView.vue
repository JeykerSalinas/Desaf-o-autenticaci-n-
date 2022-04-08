<template>
  <div class="home">
    <h1 class="py-5">Welcome home</h1>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.home {
  background: url(../assets/digital-illustration-summer.svg);
  background-size: cover;
  background-position: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
