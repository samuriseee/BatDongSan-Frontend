<template>
  <div>
    <div class="Danh_Sach_BaiDang">
      <div class="Tieu_de">
        <p>Bất động sản dành cho bạn</p>
        <span>
          <a href="/#/estate-for-sale">Tin nhà đất bán mới nhất</a> |
          <a href="/#/estate-for-rent">Tin nhà đất cho thuê mới nhất</a>
        </span>
      </div>

      <div class="Danh_Sach_Muc_BaiDang">
        <table class="w3-table-all">
          <thead>
            <tr class="w3-light-grey">
              <th>Tiêu đề bài đăng</th>
              <th>Họ tên người đăng</th>
              <th>Địa chỉ </th>
              <th>Giá</th>
              <th>Diện tích</th>
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
                {{ post.MucGia }}
              </td>
              <td>
                {{ post.DienTich }}
              </td>

            </tr>


          </tbody>
        </table>
        <!-- <table>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr v-for="post in posts" :key="post.id" @click="goToPostDetail(post.ID)">
            <th>{{ post.TieuDe }}</th>
            <th> {{ post.MucGia }} tỉ</th>
          </tr>
        </table> -->
        <!-- <div class="Muc_Bai_Dang" v-for="post in posts" :key="post.id" @click="goToPostDetail(post.ID)">
          <div>
            <img src="" alt="Chưa tải được ảnh">
          </div>

          <div class="Noi_dung_bai_dang">
            <p class="Tieu_de_bai_dang">
              {{ post.TieuDe }}
            </p>
            <div class="Thong_tin">
              <p>
                {{ post.MucGia }} tỉ
              </p>
              <p>
                {{ post.DienTich }} m²
              </p>
            </div>
            <p class="Dia_chi">{{ post.DiaChi }}</p>
            <p class="Ngay_Dang">Ngày đăng: {{ post.NgayDang }}</p>
          </div>

        </div> -->

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
  },
  data() {
    return {
      posts: null,
    };
  },
  methods: {
    async getPosts() {
      const API = "http://localhost:8000/post/getAllPost";
      await axios.get(API).then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      });
    },
    goToPostDetail(id) {
      this.$router.push(`/post-management/${id}`);
    }
  },
};
</script>

<style scoped>
  .w3-table-all{
    font-size: 12px;
    width: 1200px;
    
  }
</style>
