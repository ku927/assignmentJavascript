import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuDldhhRYt-zzSpvkDnHrZYk6Mk_0xnRA",
  authDomain: "vite-project-c61d9.firebaseapp.com",
  projectId: "vite-project-c61d9",
  storageBucket: "vite-project-c61d9.appspot.com",
  messagingSenderId: "137918165042",
  appId: "1:137918165042:web:7149be59dd206b49c10c2b",
  measurementId: "G-WSMP18K141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(VueRouter).mount("#app"); // 変更