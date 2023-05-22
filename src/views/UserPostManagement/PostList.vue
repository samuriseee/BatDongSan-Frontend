<template>
  <div class="wrapper">
    <div class="post_list_header">
      <div class="header_wrapper">
        <h3>Danh sách tin</h3>
        <div>
          <div class="searchBox">
            <input
              autocomplete="off"
              name="pgds-0.25451660483659366"
              maxlength="99"
              placeholder="Tìm theo mã tin, tiêu đề"
              type="text"
              mode="normal"
              class="sc-ihnbgO tdpVp"
              value=""
            />
            <div mode="icon" class="icon">
              <div class="sc-kvIRmL kAfDwH">
                <svg
                  font-size="16px"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M17.0563 17.096L21.5 21.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="currentColor"
                    stroke-width="1.9"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post_list_content">
      <PostCard v-for="post in postList" :key="post.ID" :post="post" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostCard from "@/components/UserPostManagement/PostCard.vue";
export default {
  name: "PostList",
  components: {
    PostCard,
  },
  data() {
    return {
      postList: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  mounted() {
    this.getUserPostList();
  },
  methods: {
    getUserPostList() {
      const API = `${process.env.VUE_APP_API}/user_post/getRealEstatePostByUser/${this.currentUser.ID}`;
      axios
        .get(API)
        .then((res) => {
          res.data = res.data.map((post) => {
            return {
              ...post,
              HinhAnh: JSON.parse(post.HinhAnh),
            };
          });
          this.postList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #f9f9f9;
  box-sizing: border-box;
}
.wrapper .post_list_header {
  width: 100%;
  background-color: #fff;
  padding: 20px 30px;
  text-align: left;
}
.wrapper .post_list_header .header_wrapper {
  width: 70%;
  margin: 0 auto;
}
.wrapper .post_list_header h3 {
  font-size: 30px;
  font-weight: 600;
  color: #000;
  padding: 20px 0;
  margin: 0;
}
.wrapper .post_list_header .searchBox {
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  width: fit-content;
}
.wrapper .post_list_header .searchBox input {
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 0 40px 0 15px;
  font-size: 14px;
  color: #000;
  outline: none;
  transition: all 0.3s ease-in-out;
}
.wrapper .post_list_header .searchBox input:focus {
  border-color: rgb(224, 60, 49);
}
.wrapper .post_list_header .searchBox .icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}
.wrapper .post_list_header .searchBox .icon:hover {
  background-color: #42b983;
}
.post_list_content {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 20px 20px;
  text-align: left;
}
</style>