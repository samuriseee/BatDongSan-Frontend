<template>
  <div class="navigation re__full-menu">
    <div class="rightSide">
      <div class="logo">
        <img src="@/assets/image/logo.png" alt="" @click="ToHome()" />
      </div>
      <nav>
        <div>
          <div class="dropdown inline-block relative">
            <button class="font-semibold py-2 px-4 rounded inline-flex">
              <router-link to="/estate-for-sale" class="mr-1"
                >Nhà đất bán</router-link
              >
            </button>
            <ul class="dropdown-menu absolute hidden">
              <li class="" v-for="item in allBuyTypes" :key="item.id">
                <a class="" href="#">{{ item.LoaiBDS }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="dropdown inline-block relative">
            <button class="font-semibold py-2 px-4 rounded inline-flex">
              <router-link to="/estate-for-rent" class="mr-1"
                >Nhà đất cho thuê</router-link
              >
            </button>
            <ul class="dropdown-menu absolute hidden">
              <li class="" v-for="item in allRentTypes" :key="item.id">
                <a class="" href="#">{{ item.LoaiBDS }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="isLoggedIn && isAdmin">
          <router-link to="/admin-page">Admin</router-link>
        </div>
      </nav>
    </div>
    <div class="leftSide">
      <div id="divUserStt" v-if="isLoggedIn">
        <router-link class="profile" to="/profile">
          <div class="avatar">{{ spliceUsernameToMakeAvatar }}</div>
          <p style="font-size: 17px; margin-right: 10px">
            {{ getUserFromStore }}
          </p>
        </router-link>
        |
        <router-link to="/login" @click="logout">Đăng xuất</router-link>
      </div>
      <div id="divUserStt" v-else>
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
// import axios from 'axios';
export default {
  name: "NavBar",
  mounted() {
    this.$store.dispatch("getAllRentTypes");
    this.$store.dispatch("getAllBuyTypes");
  },
  computed: {
    spliceUsernameToMakeAvatar() {
      return this.$store.state.currentUser.HoTen.slice(0, 1);
    },
    getUserFromStore() {
      return this.$store.state.currentUser.HoTen;
    },
    isLoggedIn() {
      return this.$store.state.currentUser !== null;
    },
    isAdmin() {
      return this.$store.state.currentUser.role === "admin";
    },
    allRentTypes() {
      return this.$store.state.allRentTypes;
    },
    allBuyTypes() {
      console.log("Buy type", this.$store.state.allBuyTypes);
      return this.$store.state.allBuyTypes;
    },
  },
  data() {
    return {};
  },
  methods: {
    ToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
p {
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(44, 44, 44);
}

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
  margin: 0 10px;
}

.navigation nav a:hover {
  color: #42b983;
}

.leftSide {
  display: flex;
  align-items: center;
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
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.leftSide .CreatePost a:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(224, 60, 49);
  opacity: 1;
  border: 1px solid rgb(224, 60, 49);
}

#divUserStt {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-transform: uppercase;
  background-color: rgb(255, 236, 235);
  color: rgb(116, 21, 15);
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

#divUserStt a:hover {
  color: rgb(224, 60, 49);
}
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;
  text-align: center;
  padding: 0 15px;
}
.dropdown-menu li {
  display: block;
  text-align: center;
  margin: 0 auto;
}
.dropdown-menu li a {
  margin: 0 auto;
  font-weight: 400;
  font-size: 14px;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>