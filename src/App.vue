<template>
  <div id="app">
    <router-view />
    <nav class="fixed-bottom bg-transparent">
      <router-link class="btn btn-ligth" to="/">Home</router-link> |
      <router-link class="btn btn-ligth" v-if="!loggedin" to="/login"
        >Login</router-link
      >

      <a class="btn btn-igth" @click="logout" v-else>Logout</a>
    </nav>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import router from "./router";
export default {
  name: "App",
  methods: {
    ...mapMutations(["SET_LOGGEDIN"]),
    logout() {
      localStorage.removeItem("loggin");
      this.SET_LOGGEDIN(false);
      router.push("/login");
    },
    checkLogged() {
      if (localStorage.getItem("loggin")) {
        this.SET_LOGGEDIN(true);
      }
    },
  },
  computed: {
    ...mapState(["loggedin"]),
  },
  mounted() {
    this.checkLogged();
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  padding: 30px;
}
</style>
