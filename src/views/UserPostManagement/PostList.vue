<template>
  <div class="wrapper">
    <ModalComponent :isOpen.sync="showModal" variant="small">
      <template v-slot:header> Yêu cầu xác thực tin đăng </template>
      <template v-slot:content>
        <form>
          <div class="mb-5 mt-5">
            <h4>Vui lòng tải lên</h4>
            <p>
              1. Video mới nhất của bất động sản đăng bán, quay từ mặt tiền căn
              nhà vào trong nhà, lên các tầng nếu có. <br />
              2. Ảnh chụp sổ đỏ/sổ hồng mới nhất và còn hiệu lực, chụp đủ 4 mặt
              sổ và tất cả các trang bổ sung đi kèm, được phép che tên chủ sở
              hữu. <br />
              3. Ảnh chụp mặt trước, mặt sau của CCCD/CMND (nếu bạn là chính chủ
              của bất động sản) <br />
            </p>
          </div>
          <div class="mb-6 uploads">
            <CloudinaryUpload @image-uploaded="handleImageUploaded" />
          </div>
          <button
            type="submit"
            style="margin: 0 auto"
            :disabled="imageUrls.length < 3"
            @click="requestAuthorizePost"
            class="flex justify-end p-2 rounded-lg cursor-pointer submit_btn"
          >
            Gửi yêu cầu
          </button>
        </form>
      </template>
      <button @click="showModal = false">Close</button>
    </ModalComponent>
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
      <PostCard
        v-for="post in postList"
        :key="post.ID"
        :post="post"
        @authorize-post="authorizePost"
      />
    </div>
  </div>
</template>

<script>
import CloudinaryUpload from "@/components/CreatePost/CloudinaryUpload.vue";
import ModalComponent from "@/components/ui/ModalComponent.vue";
import axios from "axios";
import PostCard from "@/components/UserPostManagement/PostCard.vue";
export default {
  name: "PostList",
  components: {
    PostCard,
    ModalComponent,
    CloudinaryUpload,
  },
  data() {
    return {
      postList: [],
      showModal: false,
      imageUrls: [],
      AuthorizePostID: null,
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
    requestAuthorizePost() {
      const API = `${process.env.VUE_APP_API}/authorize_real_estate/requestAuthorize`;
      axios
        .post(API, {
          IDTinDang: this.AuthorizePostID.toString(),
          TrangThai: 0,
          NgayGuiYeuCau: new Date()
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, ""),
          NgayTraKetQua: null,
          HinhAnh: JSON.stringify(this.imageUrls),
        })
        .then((res) => {
          console.log(res);
          this.showModal = false;
          alert(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    authorizePost(postId) {
      this.AuthorizePostID = postId;
      this.showModal = true;
    },
    handleImageUploaded(imageUrls) {
      this.imageUrls = imageUrls;
    },
    async getUserPostList() {
      const API = `${process.env.VUE_APP_API}/user_post/getRealEstatePostByUser/${this.currentUser.ID}`;
      await axios
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
form {
  width: 100%;
  padding: 0;
}
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
.uploads {
  width: 100%;
  background: rgb(255, 255, 255);
  border: 1px dashed rgb(204, 204, 204);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
  cursor: pointer;
}
.submit_btn {
  position: relative;
  height: 32px;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  width: fit-content;
  background-color: rgb(224, 60, 49);
  padding: 6px 12px;
  color: rgb(255, 255, 255);
  border: none;
}
.submit_btn[disabled] {
  opacity: 0.4;
  cursor: not-allowed;
}
.submit_btn:hover {
  background-color: rgb(204, 51, 34);
}
</style>