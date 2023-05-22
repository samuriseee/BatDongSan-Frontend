<template>
  <div class="wrapper">
    <SideBar />
    <SearchBarOnEstateList />
    <div class="wrapper__detail">
      <div class="page_detail">
        <div class="page_detail--left">
          <div class="page_detail--img">
            <EstateInfoSessionVue :images="estateDetail.HinhAnh" />
          </div>

          <div class="detail__left--content">
            <div class="detail__left--title">
              <p class="breadcrumb">
                {{ (estateDetail.BanHayChoThue.data = 1 ? "Bán" : "Thuê") }}/{{
                  estateDetail.ThanhPho
                }}/{{ estateDetail.QuanHuyen }}/
                <span>{{ estateDetail.dia_chi_cu_the }}</span>
              </p>
              <h3>
                {{ estateDetail.TieuDe }}
              </h3>
              <p>
                {{ estateDetail.DiaChiCuThe }}
              </p>
            </div>

            <div class="detail__left--specifications">
              <div style="display: flex">
                <div class="left__specifications--item">
                  <p>Mức giá</p>
                  <h4>{{ estateDetail.MucGia }} {{ estateDetail.DonVi }}</h4>
                </div>

                <div class="left__specifications--item">
                  <p>Diện tích</p>
                  <h4>{{ estateDetail.DienTich }} m²</h4>
                </div>

                <div class="left__specifications--item">
                  <p>Phòng ngủ</p>
                  <h4>{{ estateDetail.SoPhongNgu }} PN</h4>
                </div>
              </div>

              <div class="left__specifications--icon">
                <p>
                  <img src="../assets/Icon/location.svg" alt="" />
                </p>
                <p>
                  <img src="../assets/Icon/phone.svg" alt="" />
                </p>
                <p>
                  <img src="../assets/Icon/heart.svg" alt="" />
                </p>
              </div>
            </div>

            <div class="detail__left--description">
              <h4>Thông tin mô tả</h4>

              <div class="description__content">
                <p v-html="modifiedDescription"></p>
              </div>
            </div>
            <div class="detail__left--functional">
              <h4>Đặc điểm bất động sản</h4>
              <div class="functional_flex">
                <div class="functional-item">
                  <b>Diện tích</b>
                  <p>{{ estateDetail.DienTich }} m²</p>
                </div>
                <div class="functional-item">
                  <b>Mức giá</b>
                  <p>{{ estateDetail.MucGia }} {{ estateDetail.DonVi }}</p>
                </div>
                <div class="functional-item">
                  <b>Giấy tờ pháp lý</b>
                  <p>{{ estateDetail.GiayToPhapLy }}</p>
                </div>
                <div
                  class="functional-item"
                  v-if="estateDetail.SoPhongNgu != 0"
                >
                  <b>Số phòng ngủ</b>
                  <p>{{ estateDetail.SoPhongNgu }}</p>
                </div>
                <div
                  class="functional-item"
                  v-if="estateDetail.SoPhongTam != 0"
                >
                  <b>Số phòng tắm</b>
                  <p>{{ estateDetail.SoPhongTam }}</p>
                </div>
                <div class="functional-item" v-if="estateDetail.SoTang != 0">
                  <b>Số tầng</b>
                  <p>{{ estateDetail.SoTang }}</p>
                </div>
                <div class="functional-item" v-if="estateDetail.NoiThat != ''">
                  <b>Nội Thất</b>
                  <p>{{ estateDetail.NoiThat }}</p>
                </div>
                <div
                  class="functional-item"
                  v-if="estateDetail.HuongBanCong != ''"
                >
                  <b>Hướng ban công</b>
                  <p>{{ estateDetail.HuongBanCong }}</p>
                </div>
                <div class="functional-item" v-if="estateDetail.HuongNha != ''">
                  <b>Hướng Nhà</b>
                  <p>{{ estateDetail.HuongNha }}</p>
                </div>
                <div class="functional-item" v-if="estateDetail.DuongVao != ''">
                  <b>Đường vào</b>
                  <p>{{ estateDetail.DuongVao }} m²</p>
                </div>
                <div class="functional-item" v-if="estateDetail.MatTien != ''">
                  <b>Mặt tiền</b>
                  <p>{{ estateDetail.MatTien }} m²</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="page_detail--right">
          <div class="detail__right--contact">
            <div class="detail__right--acc">
              <div class="avatar">{{ estateDetail.HoTen.slice(0, 1) }}</div>
              <span>Được đăng bởi</span>
              <h5>{{ estateDetail.HoTen }}</h5>

              <a href="#">Xem thêm 20 tin khác</a>
            </div>

            <input class="active" type="button" :value="estateDetail.SDT" />
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
  computed: {
    modifiedDescription() {
      return this.estateDetail.MoTa.replace(/\.\s/g, "<br>");
    },
  },
  created() {
    this.getEstateDetail(this.id);
  },
  methods: {
    async getEstateDetail(id) {
      // const API = `${process.env.VUE_APP_API}/real_estate/getRealEstateByID/${id}`;
      const API = `http://localhost:8000/real_estate/getRealEstateByID/${id}`;
      const res = await axios.get(API);
      res.data[0].HinhAnh = JSON.parse(res.data[0].HinhAnh);
      this.estateDetail = res.data[0];
    },
  },
};
</script>

<style>
.avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  text-transform: uppercase;
  background-color: rgb(255, 236, 235);
  color: rgb(116, 21, 15);
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin: 0 auto;
}
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
  font-family: "Lexend Medium", Roboto, Arial !important;
  font-size: 24px;
  line-height: 32px;
  font-weight: normal !important;
  letter-spacing: -0.2px;
  color: #2c2c2c;
  display: block;
}

.detail__left--specifications {
  display: flex;
  margin: 20px 0;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  padding: 15px 0px;
  box-sizing: border-box;
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

h4 {
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
.detail__left--description h4, .detail__left--functional h4 {
  font-family: "Lexend Medium", Roboto, Arial !important;
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #2c2c2c;
  display: block;
  margin-bottom: 10px;
}

.description__content {
  font-family: "Roboto Regular", Roboto, Arial !important;
  font-size: 16px;
  line-height: 30px;
  font-weight: normal !important;
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
  background-color: #f2f2f2;
  margin-top: 15px;
}
.detail__right--description li {
  color: #2c2c2c;
  margin-bottom: 12px;
}
.breadcrumb {
  margin-top: 24px;
  margin-bottom: 8px;
}
.detail__left--functional {
  margin-top: 20px;
}
.functional_flex {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
.functional-item {
  box-sizing: border-box;
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-top: 1px solid #f2f2f2;
}
.functional-item b {
  font-size: 14px;
  color: #999;
}
.functional-item p {
  font-size: 14px;
  color: #2c2c2c;
}
</style>