<template>
  <div class="navigation re__full-menu">
    <div class="rightSide">
      <div class="logo">
        <img src="@/assets/image/logo.png" alt="" @click="ToHome()" />
      </div>
      <nav>
        <router-link to="/estate-for-sale">Nhà đất bán</router-link>
        <router-link to="/estate-for-rent">Nhà cho thuê</router-link>
      </nav>
    </div>
    <div class="leftSide">
      <div id="divUserStt">
        <router-link to="/login">Đăng nhập</router-link> |
        <router-link to="/register">Đăng ký</router-link>
      </div>
      <div class="CreatePost">
        <router-link to="/createpost">Đăng tin</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      
    };
  },
  methods: {
    ToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.re__full-menu {
  background: #fff;
  width: 100%;
  height: 96px;
  margin: 0 auto;
  position: relative;
  z-index: 999;
  padding: 17px 15px 17px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(182, 182, 182, 0.18);
}
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.rightSide {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rightSide .logo img {
  height: 48px;
  width: 160px;
  object-fit: cover;
}
.navigation nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-right: 20px;
}
.navigation nav a {
  text-decoration: none;
  color: #000;
  font-size: 18px;
  padding: 12px 0px 8px;
  display: inline-grid;
  list-style: none;
  vertical-align: middle;
  position: relative;
  float: left;
}
.navigation nav a:hover {
  color: #42b983;
}
.leftSide div {
  display: table-cell;
  vertical-align: middle;
}
.leftSide .CreatePost a {
  color: #2c2c2c;
  background: #fff;
  border: solid 1px #ccc;
  font-family: "Lexend Medium", Roboto, Arial !important;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal !important;
  letter-spacing: -0.2px;
  padding: 13px 15px;
  border-radius: 8px;
  margin: 0 15px;
}
</style>