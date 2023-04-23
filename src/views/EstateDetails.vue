<template>
  <div class="wrapper">
    <SideBar />
    <SearchBarOnEstateList />
    <div class="wrapper__detail">
      <div class="page_detail">
        <div class="page_detail--left">
          <div class="page_detail--img">
            <EstateInfoSessionVue :images="estateDetail.anh" />
          </div>

          <div class="detail__left--content">
            <div class="detail__left--title">
              <p>
                Bán/Hồ Chí Minh/Bình Thạnh/
                <span>{{ estateDetail.dia_chi_cu_the }}</span>
              </p>
              <h3>
                {{ estateDetail.tieu_de }}
              </h3>
              <p>
                {{ estateDetail.dia_chi_cu_the }}
              </p>
            </div>

            <div class="detail__left--specifications">
            <div style="display:flex;"> 
                <div class="left__specifications--item">
                  <p>Mức giá</p>
                  <h4>{{ estateDetail.gia }}</h4>
                  <span>~54.07 triệu/m²</span>
                </div>
  
                <div class="left__specifications--item">
                  <p>Diện tích</p>
                  <h4>{{ estateDetail.dien_tich }} m²</h4>
                </div>
  
                <div class="left__specifications--item">
                  <p>Phòng ngủ</p>
                  <h4>{{ estateDetail.so_phong_ngu }} PN</h4>
                </div>
            </div>

              <div class="left__specifications--icon">
                <p>
                    <img src="../assets/Icon/location.svg" alt="">
                </p>
                <p>
                    <img src="../assets/Icon/phone.svg" alt="">
                </p>
                <p>
                    <img src="../assets/Icon/heart.svg" alt="">
                </p>
              </div>
            </div>

            <div class="detail__left--description">
              <h4>Thông tin mô tả</h4>

              <div class="description__content">
                {{ estateDetail.mo_ta }}
              </div>
            </div>
          </div>
        </div>

        <div class="page_detail--right">
          <div class="detail__right--contact">
            <div class="detail__right--acc">
              <span>Được đăng bởi</span>
              <h5>{{ estateDetail.nguoi_dang }}</h5>
              <a href="#">Xem thêm 20 tin khác</a>
            </div>

            <input
              class="active"
              type="button"
              :value="estateDetail.sdt"
            />
            <input type="button" value="Gửi mail" />
            <input type="button" value="Yêu cầu liên hệ lại" />
          </div>

          <div class="detail__right--description">
            <ul>
              <li>Bán căn hộ chung cư theo dự án tại Huyện Gia Lâm</li>
              <li>Hanhomes Blue Star (15)</li>
              <li>Khu đô thị Đặng Xá 1 (20)</li>
              <li>Masteri Waterfront (20)</li>
              <li>The Pavilion - Vinhomes Ocean Park (41)</li>
              <li>The Zenpark (117)</li>
              <li>The Zurich - Vinhomes Ocean Park (17)</li>
              <li>Vinhomes Ocean Park Gia Lâm (453)</li>
            </ul>
          </div>

          <div class="detail__right--description">
            <ul>
              <li>Bán căn hộ chung cư theo dự án tại Huyện Gia Lâm</li>
              <li>Hanhomes Blue Star (15)</li>
              <li>Khu đô thị Đặng Xá 1 (20)</li>
              <li>Masteri Waterfront (20)</li>
              <li>The Pavilion - Vinhomes Ocean Park (41)</li>
              <li>The Zenpark (117)</li>
              <li>The Zurich - Vinhomes Ocean Park (17)</li>
              <li>Vinhomes Ocean Park Gia Lâm (453)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBarOnEstateList from "@/components/ui/SearchBarOnEstateList.vue";
import EstateInfoSessionVue from "../components/EstateDetailPage/EstateInfoSession.vue";
export default {
  components: {
    SearchBarOnEstateList,
    EstateInfoSessionVue,
  },
  data() {
    return {
      estateDetail: {},
      id: this.$route.params.id,
    };
  },
  methods: {
    async getEstateDetail(id) {
      const { data } = await axios.get(
        `http://127.0.0.1:8080/bat_dong_san/${id}`
      );
      data.anh = data.anh.replace(/[[\]""]/g, "");
      data.anh = data.anh.split(",");
      this.estateDetail = data;
    },
  },
  created() {
    this.getEstateDetail(this.id);
  },
};
</script>

<style>
.wrapper__detail {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.page_detail {
  display: flex;
  justify-content: center;
  width: 65%;
}

.page_detail--left {
  width: 75%;
  height: 100%;
  background: #fff;
  padding: 20px;
}
.detail__left--content {
  text-align: start;
}

.detail__left--title {
  margin-top: 5px;
}

.detail__left--title p {
  font-size: 15px;
  color: #848484;
}

.detail__left--title p span {
  font-size: 15px;
  color: #000000;
}

.detail__left--title h3 {
  font-size: 19px;
  font-weight: 700;
  color: #000000;
}

.detail__left--specifications {
  display: flex;
  margin: 20px 0;
  padding: 10px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
}

.left__specifications--item {
  margin-right: 50px;
}

.left__specifications--item p {
  font-size: 15px;
  font-weight: 500;
  color: #b3b3b3;
}

.left__specifications--item h4 {
  font-size: 16px;
  font-weight: 700;
}

.left__specifications--item span {
  font-size: 10px;
  color: #b3b3b3;
}

.left__specifications--icon {
  display: flex;
}
.left__specifications--icon p {
  margin: 0 7px;
}
.detail__left--description h4 {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 7px;
}

.description__content {
  font-size: 14px;
  line-height: 24px;
}

.description__content span {
  font-weight: 700;
  font-size: 14px;
  padding: 7px;
  background: #ccc;
  border-radius: 5px;
  margin-right: 5px;
}

.description__content span::after {
  content: "Hiện số";
  color: white;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid #000000;
  padding: 5px;
  margin-left: 7px;
  background: #2c2c2c;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.page_detail--right {
  width: 25%;
  height: 100%;
  background: #fff;
  padding: 20px;
}

.detail__right--contact {
  border: 1px solid #cccccc99;
  border-radius: 5px;
  padding: 15px 10px;
}

.detail__right--acc img {
  padding-top: 50px;
  text-align: center;
}

.detail__right--acc span {
  font-size: 12px;
  line-height: 16px;
  font-weight: normal !important;
  color: #999;
  display: block;
  margin-top: 8px;
  margin-bottom: -4px;
}

.detail__right--acc h5 {
  font-size: 17px;
  line-height: 27px;
  font-weight: 700 !important;
  color: #2c2c2c;
  margin-top: 8px;
}

.detail__right--acc a {
  color: #2c2c2c;
  font-size: 14px;
  line-height: 20px;
}

.page_detail--right input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.page_detail--right .active {
  margin-top: 20px;
  background: #2c2c2c;
  color: #fff;
}

.detail__right--description {
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 16px;
  text-align: left;
  background-color: #F2F2F2;
  margin-top: 15px;
}
.detail__right--description li {
  color: #2c2c2c;
  margin-bottom: 12px;
}
</style>