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
              <input type="password" class="form-control" id="inputPassword" />
            </div>
            <div class="col-12">
              <button class="btn btn-info" @click="login">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "LoginView",
  data() {
    return {
      loggedin: false,
    };
  },
  methods: {
    login() {
      localStorage.setItem("loggedIn", false);
      router.push("/");
    },
  },
};
</script>
