<template>
  <aside>
    <div class="container">
      <div class="avatar">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
          alt="avatar"
        />
        <div style="text-align: left">
          <h3>QUỐC KHOA</h3>
          <span>0 điểm</span>
        </div>
      </div>
      <div class="dropDown">
        <div class="dropDown2">
          <div class="dropDown3">
            <span class="icon"></span>
            <div class="text" type="primary">Quản lý tin đăng</div>
            <div class="icon2">
                
            </div>
          </div>
        </div>
      </div>
      <ul class="dropDownItem">
        <li>Đăng mới</li>
        <li>Danh sách tin</li>
        <li>Tin nháp</li>
        <li>Danh sách tin tài trợ</li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
aside {
  position: absolute;
  width: 280px;
  background-color: white;
  height: 100vh;
  box-shadow: rgba(182, 182, 182, 0.18) 0px 4px 8px;
  z-index: 99;
}
.container {
  position: relative;
  background: rgb(255, 255, 255);
  width: 280px;
  z-index: 99;
  height: 100vh;
}
.avatar {
  display: flex;
  padding: 16px 15px;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.avatar img {
  width: 70px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.dropDown {
  background-color: rgb(255, 255, 255);
  height: 48px;
  color: rgb(116, 21, 15);
  cursor: pointer;
  width: 100%;
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.dropDown2 {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 12px 16px;
  width: calc(100%);
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.dropDown3 {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1;
  width: 100%;
}
.dropDown3 .icon {
  font-size: 24px;
  height: 24px;
  margin-right: 12px;
}
.dropDown3 .text {
  color: rgb(116, 21, 15);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dropDown3 .icon2 {
  font-size: 16px;
  display: flex;
}
.dropDownItem{
    display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100%);
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.dropDownItem li{
    width: 100%;
    padding: 12px 16px;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;
}
</style>