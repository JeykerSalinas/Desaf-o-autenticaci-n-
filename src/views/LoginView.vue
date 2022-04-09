<template>
  <div class="about">
    <div class="container py-5">
      <div class="row">
        <h2>Ingresa aquí</h2>
        <div class="col-12">
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Email</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="staticEmail"
                placeholder="email@example.com"
                v-model="email"
              />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label"
              >Password</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                v-model="password"
              />
            </div>
            <div class="col-12">
              <button class="btn btn-info" @click="login">Ingresar</button>
              <button class="btn btn-info" @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "LoginView",
  data() {
    return {
      loggedin: false,
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const email = this.email;
      const password = this.password;
      const auth = getAuth();

      try {
        const userCredencial = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredencial.user;
        console.log(userCredencial, user);
      } catch (error) {
        console.error;
      }

      // localStorage.setItem("loggedIn", true);
      // console.log(localStorage.getItem("loggedIn"));
      // router.push("/");
    },
    logout() {
      localStorage.removeItem("loggedIn");
      router.push("/login");
    },
  },
};
</script>
