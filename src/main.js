import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJF7dnPWdF3iwFGYTgklcOrbT8pzDW8pI",
  authDomain: "desafioautentificacion-ce457.firebaseapp.com",
  projectId: "desafioautentificacion-ce457",
  storageBucket: "desafioautentificacion-ce457.appspot.com",
  messagingSenderId: "536953413709",
  appId: "1:536953413709:web:fef4f1d6a166a3b6e73c04",
  measurementId: "G-HL5VNVJ4BQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
