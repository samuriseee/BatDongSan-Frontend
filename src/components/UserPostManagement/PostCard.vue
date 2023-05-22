<template>
  <div class="wrapper">
    <div class="left_side">
      <div>
        <img :src="post.HinhAnh[0]" alt="" />
        <div class="post_text">
          <h5>
            <span
              :class="
                post.TrangThai === 'Đã duyệt'
                  ? 'success_status status'
                  : post.TrangThai === 'Chờ duyệt'
                  ? 'pending_status status'
                  : 'danger_status status'
              "
              >{{ post.TrangThai }}</span
            >
            {{ post.TieuDe }}
          </h5>
          <div>
            <span> {{ post.LoaiBDS }} </span>
            <span style="margin: 0 5px">•</span>
            <span>
              {{ post.DiaChiCuThe }} {{ post.PhuongXa }} {{ post.QuanHuyen }}
              {{ post.ThanhPho }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="right_side">
      <div class="post_statistic">
        <img src="@/assets/Icon/staticstic.png" alt="" />
        <span>Tin đăng ngày chưa có số liệu thống kê</span>
      </div>
      <button class="edit_btn">Sửa tin</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostManagement",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {},
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 15px;
  width: 100%;
  height: auto;
  background-color: #ffffff !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(182, 182, 182, 0.18);
}
.wrapper .left_side {
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-right: 1px solid rgb(242, 242, 242);
}
.wrapper .left_side div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.wrapper .left_side div img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
}
.wrapper .left_side div .post_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.wrapper .left_side div .post_text h5 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}
.wrapper .left_side div .post_text h5 span {
  font-size: 14px;
  font-weight: 400;
  color: #000;
}
.wrapper .left_side div .post_text span {
  font-size: 14px;
  font-weight: 400;
  color: #000;
}
.wrapper .right_side {
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 12px;
}
.right_side .post_statistic {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 22px 16px;
  border-radius: 4px;
  background-color: rgb(250, 250, 250);
  overflow: hidden;
  margin-bottom: 8px;
}
.right_side .post_statistic img {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
}
.right_side .post_statistic span {
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: rgb(153, 153, 153);
}
.right_side .edit_btn {
  width: 100% !important;
  position: relative;
  height: 32px;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  width: fit-content;
  background-color: rgb(255, 255, 255);
  padding: 6px 12px;
  color: rgb(0, 155, 161);
  opacity: 1;
  border: 1px solid rgb(0, 155, 161);
  font-family: Roboto;
}
.status {
  padding: 4px;
  border-radius: 4px;
}
.success_status {
  background-color: #42b983;
}
.pending_status {
  background-color: #f39c12;
}
.danger_status {
  background-color: rgb(224, 60, 49);
}
</style>