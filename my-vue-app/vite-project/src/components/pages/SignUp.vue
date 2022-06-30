<script setup>
import { useRouter } from "vue-router"
import { reactive } from '@vue/reactivity'
import Email from '../input/Email.vue'
import Password from '../input/Password.vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const data = reactive({
  email: "",
  password: "",
  passwordReinput: "",
});

const router = useRouter()
const auth = getAuth();
const signUp = () => {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      router.push('/')
    })
    .catch((error) => {
      console.log(error)
      alert("ユーザー作成に失敗しました")
    })
}
const login = () => {
  router.push('/login');
}

</script>

<template>
  <div id="app">
    <section class="vh-100">
      <div class="container py-5 vh-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem">
              <div class="card-body p-5 text-center bg-light">

                <h3 class="mb-5">Sign Up</h3>

                <Email id="email" title="Email" v-model="data.email" />
                <Password id="password" title="Password(6文字)" v-model="data.password" />
                <Password id="password-reinput" title="Password(再入力)" v-model="data.passwordReinput" />

                <div class="d-grid gap-2">
                  <button class="btn btn-outline-primary btn-lg btn-block" type="submit" @click="signUp">SignUp</button>
                  <span class="hr"></span>
                  <p class="or">または</p>
                  <button class="btn btn-outline-primary btn-lg btn-block" type="submit" @click="login">Login</button>
                </div>
                
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
/* * {
  outline: 1px solid red;
} */
</style>