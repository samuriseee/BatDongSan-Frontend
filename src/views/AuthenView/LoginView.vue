<template>
  <div class="wrapper">
    <div class="container">
      <div class="imageBox">
        <img class="logo" src="@/assets/image/logo.png" alt="" />
        <img class="person" src="@/assets/image/dangnhap.png" alt="" />
        <h4>Tìm nhà đất</h4>
        <h4>batdongsan.com.vn dẫn lối</h4>
      </div>
      <form @submit.prevent="onSubmit">
        <h5>Xin chào bạn!</h5>
        <h3>Đăng nhập để tiếp tục</h3>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Nhập email"
            v-model="loginUser.email"
            :class="{ invalid: $v.loginUser.email.$error }"
          />
          <div class="errorText" v-if="$v.loginUser.email.$error">
            Email nhập lỗi
          </div>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Nhập mật khẩu"
            v-model="loginUser.password"
            :class="{ invalid: $v.loginUser.password.$error }"
          />
          <div class="errorText" v-if="$v.loginUser.password.$error">
            Password nhập lỗi
          </div>
        </div>
        <button type="submit" class="loginButton">Đăng nhập</button>
        <div>
          <router-link to="/forgot-password">Quên mật khẩu</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  mixins: [validationMixin],
  data() {
    return {
      loginUser: {
        email: "",
        password: "",
      },
      token: "",
    };
  },
  validations: {
    loginUser: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
  methods: {
    ...mapActions(["getCurrentUserInfo"]),
    onSubmit() {
      const API = `http://localhost:8000/auth/login`;
      axios
        .post(API, {
          email: this.loginUser.email.trim(),
          password: this.loginUser.password,
        })
        .then((response) => {
          this.loginSuccess = response.data["login success"];
          this.token = response.data.token;

          // Store the token in local storage
          localStorage.setItem("token", this.token);

          this.getCurrentUserInfo(this.token);
          alert("Login successful!");
          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
@import url("@/assets/css/sharedCssLoginRes.css");
</style>
