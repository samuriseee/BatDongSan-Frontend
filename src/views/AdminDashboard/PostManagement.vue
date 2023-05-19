<template>
  <div>
    <div class="Danh_Sach_BaiDang">
      <div class="Tieu_de">
        <button class="DS_TinDang" @click="getPosts()">Danh sách tất cả tin đăng</button>
        <span>
          <button :class="{ active: activeButton === 'DS_BDS_chua_duyet' }"
            @click="getPosts_notApprovedYet(), changeActiveButton('DS_BDS_chua_duyet')">Chưa duyệt </button>
          <button :class="{ active: activeButton === 'DS_BDS_da_duyet' }"
            @click="getPosts_Approved(), changeActiveButton('DS_BDS_da_duyet')">Đã duyệt </button>
          <button :class="{ active: activeButton === 'DS_BDS_khong_duyet' }"
            @click="getPosts_not_approved(), changeActiveButton('DS_BDS_khong_duyet')">Không duyệt </button>
          <button :class="{ active: activeButton === 'DS_BDS_vi_Pham' }"
            @click="getPosts_violate(), changeActiveButton('DS_BDS_vi_Pham')">Vi phạm </button>
        </span>
      </div>

      <div class="Danh_Sach_Muc_BaiDang">
        <table class="w3-table-all">
          <thead>
            <tr class="w3-light-grey" style="align-items: center;">
              <th style="width: 300px;">Tiêu đề bài đăng</th>
              <th style="width: 150px;">Họ tên người đăng</th>
              <th style="width: 200px;">Địa chỉ </th>
              <th style="width: 100px;">Giá</th>
              <th style="width: 100px;">Diện tích</th>
              <th style="justify-content: center; display: flex;">Trang thái</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id" @click="goToPostDetail(post.ID)">
              <td>
                {{ post.TieuDe }}
              </td>
              <td>
                {{ post.HoTen }}
              </td>
              <td>
                {{ post.DiaChi }}
              </td>
              <td>
                {{ post.MucGia }} VNĐ
              </td>
              <td>
                {{ post.DienTich }} m²
              </td>
              <td class="TrangThai">
                {{ post.TrangThai }}
                <!-- <span v-if="post.TrangThai == '2'">
                  Đã duyệt
                </span>
                <span v-else-if="post.TrangThai == '1'">
                  Chưa duyệt
                </span>
                <span v-else-if="post.TrangThai == '3'">
                  Không được duyệt
                </span>
                <span v-else>
                  Tin vi phạm
                </span> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "APage",
  created() {
    this.getPosts();
    this.Dem()
  },
  data() {
    return {
      posts: null,
      sl: null,
      activeButton: null,
    };
  },
  methods: {
// 4 trang thái 
// 0: vi phạm
// 1: tin chưa duyệt
// 2: tin đã duyệt
// 3: tin không được duyệt
// tin không được duyệt

    // tất cả tin đăng
    async getPosts() {
      const API = "http://localhost:8000/post/getAllPost";
      await axios.get(API).then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      });
    },


    //
    changeActiveButton(buttonName) {
      this.activeButton = buttonName;
    },

    // đi tới chi tiết tin
    goToPostDetail(id) {
      this.$router.push(`/post-management/${id}`);
    },

    // tin đăng chưa được duyệt
    getPosts_notApprovedYet() {
      const API = "http://localhost:8000/post/getPost_notApprovedYet";
      axios.get(API).then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      });
    },

    // tin đăng đã duyệt
    getPosts_Approved() {
      const API = "http://localhost:8000/post/getPost_Approved";
      axios.get(API).then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      });
    },


    // tin đăng vi phạm
    getPosts_violate() {
      const API = "http://localhost:8000/post/getPosts_violate";
      axios.get(API).then((res) => {
        this.posts = res.data;
      });
    },

    // tin đăng không duyệt
    getPosts_not_approved() {
      const API = "http://localhost:8000/post/getPosts_not_approved";
      axios.get(API).then((res) => {
        this.posts = res.data;
      });
    },
  },
};



</script>

<style scoped>
.active {
  color: rgb(255, 255, 255);
  padding: 2px 15px;
  margin: 1px 5px;
  background-color: rgb(42, 142, 109);
  border: 1px solid rgb(42, 142, 109);
}

.w3-table-all {
  font-size: 12px;
  width: 1150px;
}

.Tieu_de {
  display: flex;
  padding: 10px;
  font-size: 12px;
}

.DS_TinDang {
  display: flex;
  font-weight: bold;
  font-size: 15px;
}

.Tieu_de span {
  display: flex;
  margin-left: 450px;
  font-weight: bold;
  font-size: 12px;
}

.Tieu_de span button {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 2px 15px;
  margin: 1px 5px;
}

.Tieu_de span button:hover {
  color: rgb(255, 255, 255);
  padding: 2px 15px;
  margin: 1px 5px;
  background-color: rgb(42, 142, 109);
  border: 1px solid rgb(42, 142, 109);
}

.TrangThai span {
  display: flex;
  justify-content: center;
}
.TrangThai{
  display: flex;
  justify-content: center;
}





/* .w3-table-all{
    font-size: 12px;
    width: 1150px;
  }

  .Tieu_de{
    display: flex;
    padding: 10px;
  }

  .Tieu_de span{
    margin-left: 100px;
    font-weight: bold;
    font-size: 12px;
  }

  .Tieu_de p{
    font-weight: bold;
  }

  .Danh_Sach_BaiDang{
    margin-left: 250px;
  } */
</style>
