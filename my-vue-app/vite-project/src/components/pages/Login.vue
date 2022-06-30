<script setup>

import Email from '../input/Email.vue'
import Password from '../input/Password.vue'
//import SignUp from './SignUp.vue'
import { useRouter } from "vue-router"
import { reactive } from '@vue/reactivity'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const data = reactive({
  email: '',
  password: '',
})
const router = useRouter()
const auth = getAuth();
const login = () => {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      router.push('/');
    })
    .catch((err) => {
      console.log(err)
      alert("正しいログイン情報を入力してください")
    });
}

const signUp = () => {
  router.push('/signup');
}

</script>

<template>
  <section class="vh-100">
    <div class="container py-5 vh-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 text-center bg-light">

              <h3 class="mb-5">Login</h3>

              <Email id="email-address" title="EmailAddress" v-model="data.email" />
              <Password id="password" title="password" v-model="data.password" />

              <div class="d-grid gap-2">
                <button class="btn btn-outline-primary btn-lg btn-block" type="submit" @click="login">Login</button>
                <span class="hr"></span>
                <p class="or">または</p>
                <button class="btn btn-outline-primary btn-lg btn-block" type="submit" @click="signUp">SignUp</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card.shadow-2-strong {
  border-radius: 1rem;
}
.hr {
    display: block;
    margin: 31px 0 -40px;
    border-bottom: 1px solid #ddd;
}
.or {
    background: #f8f9fa;
    text-align: center;
    margin: 20px auto;
    width: 60px;
    color: #666666;
}
</style>