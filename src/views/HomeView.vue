<template>
  <div class="home">
    <button @click="SendToken">Send token to get curren user</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  methods: {
    SendToken() {
      let token = localStorage.getItem("token");
      let API = `${process.env.VUE_APP_API}/auth/currentUser`;
      axios
        .get(API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #2c3e50;
  background-color: #fff;
  color: #2c3e50;
  font-size: 16px;
  cursor: pointer;
}
</style>