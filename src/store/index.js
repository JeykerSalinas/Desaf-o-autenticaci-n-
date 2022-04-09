import Vue from "vue";
import Vuex from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: { loggedin: false, username: "" },
  getters: {},
  mutations: {
    SET_LOGGEDIN(state, payload) {
      state.loggedin = payload;
    },
    SET_USERNAME(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    async loginFirebase({ commit }, payload) {
      const user = payload.email;
      const password = payload.password;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, user, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential;
          commit("SET_LOGGEDIN", true);
          commit("SET_USERNAME", user.user.email);
          console.log("user: ", user.user.email);
          localStorage.setItem("loggin", "true");
          router.push("/");

          // ...
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  modules: {},
});
