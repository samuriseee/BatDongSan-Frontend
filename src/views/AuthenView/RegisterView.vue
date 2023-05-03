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
        <h3>Đăng ký để tiếp tục</h3>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            :class="{ invalid: $v.newUser.name.$error }"
            placeholder="Nhập họ và tên"
            v-model="newUser.name"
          />
          <div class="errorText" v-if="$v.newUser.name.$error">
            Họ và tên nhập lỗi
          </div>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Nhập số điện thoại"
            v-model="newUser.phone"
            :class="{ invalid: $v.newUser.phone.$error }"
          />
          <div class="errorText" v-if="$v.newUser.phone.$error">
            Số điện thoại nhập lỗi
          </div>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Nhập email"
            v-model="newUser.email"
            :class="{ invalid: $v.newUser.email.$error }"
          />
          <div class="errorText" v-if="$v.newUser.email.$error">
            Email nhập lỗi
          </div>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Nhập mật khẩu"
            v-model="newUser.password"
            :class="{ invalid: $v.newUser.password.$error }"
          />
          <div class="errorText" v-if="$v.newUser.password.$error">
            Password nhập lỗi
          </div>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Nhập lại mật khẩu"
            v-model="newUser.confirmPassword"
            :class="{ invalid: $v.newUser.confirmPassword.$error }"
          />
          <div class="errorText" v-if="$v.newUser.confirmPassword.$error">
            Vui lòng nhập mật khẩu đúng như phía trên
          </div>
        </div>
        <button type="submit" class="loginButton">Đăng ký</button>
        <h6 style="margin-top: 10px;">
          Bạn đã có tài khoản? <router-link style="text-decoration: underline; color: red;" to="/login">Đăng nhập</router-link>
        </h6>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "RegisterView",
  mixins: [validationMixin],
  data() {
    return {
      newUser: {
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations: {
    newUser: {
      name: {
        required,
      },
      phone: {
        required,
        minLength: minLength(8),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.register();
      }
    },
    register() {
      let API = "http://localhost:8000/auth/register";
      axios
        .post(API, {
          name: this.newUser.name,
          phone: this.newUser.phone,
          password: this.newUser.password,
          email: this.newUser.email,
          role: "user",
        })
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("@/assets/css/sharedCssLoginRes.css");
</style>