<template>
  <div class="wrapper">
    <div class="create-post">
      <div class="basic info">
        <h3>Thông tin cơ bản</h3>
        <div class="switchBox">
          <div
            :class="{ active: isBuy }"
            class="changeType"
            @click="ChangeType"
          >
            Bán
          </div>
          <div
            :class="{ active: isRent }"
            class="changeType"
            @click="ChangeType"
          >
            Cho thuê
          </div>
        </div>

        <div class="form-group">
          <label for="title">Loại bất động sản</label>
          <select
            class="form-control"
            id="title"
            v-model="newEstatePost.LoaiBDS"
          >
            <option
              v-for="type in AllRealEstateType"
              :key="type.ID"
              :value="type.LoaiBDS"
            >
              {{ type.LoaiBDS }}
            </option>
          </select>
        </div>

        <div class="Address">
          <div class="form-group">
            <label for="title">Tỉnh/Thành phố</label>
            <select class="form-control" id="title">
              <option>Chọn tỉnh/thành phố</option>
              <option>Hà Nội</option>
              <option>Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
              <option>Hải Phòng</option>
              <option>Quảng Ninh</option>
              <option>...</option>
            </select>
          </div>

          <div class="form-group">
            <label for="title">Quận/Huyện</label>
            <select class="form-control" id="title">
              <option>Chọn quận/huyện</option>
              <option>Quận 1</option>
              <option>Quận 2</option>
              <option>Quận 3</option>
              <option>Quận 4</option>
              <option>Quận 5</option>
              <option>...</option>
            </select>
          </div>

          <div class="form-group">
            <label for="title">Phường/Xã</label>
            <select class="form-control" id="title">
              <option>Chọn phường/xã</option>
              <option>Phường 1</option>
              <option>Phường 2</option>
              <option>Phường 3</option>
              <option>Phường 4</option>
              <option>Phường 5</option>
              <option>...</option>
            </select>
          </div>

          <div class="form-group">
            <label for="title">Đường/Phố</label>
            <select class="form-control" id="title">
              <option>Chọn đường/phố</option>
              <option>Đường 1</option>
              <option>Đường 2</option>
              <option>Đường 3</option>
              <option>Đường 4</option>
              <option>Đường 5</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="title">Địa chỉ hiện thị trên tin đăng</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Bạn có thể bổ sung vách hẻm, ngõ,..."
          />
        </div>
      </div>
      <div class="post info">
        <h3>Thông tin bài viết</h3>
        <div class="form-group">
          <label for="title">Tiêu đề</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Nhập tiêu đề bài viết"
          />
          <span class="note">tối thiểu 30 ký tự, tối đa 99 ký tự</span>
        </div>
        <div class="form-group">
          <label for="title">Mô tả</label>
          <textarea
            class="form-control"
            id="title"
            placeholder="Nhập mô tả bài viết"
            rows="5"
          ></textarea>
          <span class="note">tối thiểu 30 ký tự, tối đa 999 ký tự</span>
        </div>
      </div>
      <div class="realEstate info">
        <h3>Thông tin bất động sản</h3>
        <div class="form-group">
          <label for="title">Diện tích</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Nhập diện tích bất động sản"
          />
        </div>
        <div class="price">
          <div class="form-group">
            <label for="title">Giá</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Nhập giá bất động sản"
            />
          </div>
          <div class="form-group">
            <label for="title">Đơn vị</label>
            <select class="form-control" id="title">
              <option>VND</option>
              <option>Giá/m2</option>
              <option>Thoả thuận</option>
            </select>
          </div>
        </div>
        <div class="form-group" v-if="fieldsToRender.includes('GiayToPhapLy')">
          <label for="">Giấy tờ pháp lý</label>
          <div style="display: flex">
            <div v-for="(item, index) in legalPapers" :key="index">
              <SelectTag
                :value="item"
                :active="newEstatePost.GiayToPhapLy === item"
                @click.native="newEstatePost.GiayToPhapLy = item"
              />
            </div>
          </div>
        </div>
        <div class="form-group" v-if="fieldsToRender.includes('NoiThat')">
          <label for="">Nội thất</label>
          <div style="display: flex">
            <div v-for="(item, index) in furniture" :key="index">
              <SelectTag
                :value="item"
                :active="newEstatePost.NoiThat === item"
                @click.native="newEstatePost.NoiThat = item"
              />
            </div>
          </div>
        </div>
        <div
          class="form-group counter"
          v-if="fieldsToRender.includes('SoPhongNgu')"
        >
          <label for="">Số phòng ngủ</label>
          <div class="counter-box">
            <button
              @click="newEstatePost.SoPhongNgu--"
              :disabled="newEstatePost.SoPhongNgu <= 0"
            >
              -
            </button>
            <input class="count" v-model="newEstatePost.SoPhongNgu" />
            <button @click="newEstatePost.SoPhongNgu++">+</button>
          </div>
        </div>
        <div
          class="form-group counter"
          v-if="fieldsToRender.includes('SoTang')"
        >
          <label for="">Số tầng</label>
          <div class="counter-box">
            <button
              @click="newEstatePost.SoTang--"
              :disabled="newEstatePost.SoTang <= 0"
            >
              -
            </button>
            <input class="count" v-model="newEstatePost.SoTang" />
            <button @click="newEstatePost.SoTang++">+</button>
          </div>
        </div>
        <div
          class="form-group counter"
          v-if="fieldsToRender.includes('SoPhongTam')"
        >
          <label for="">Số phòng tắm</label>
          <div class="counter-box">
            <button
              @click="newEstatePost.SoPhongTam--"
              :disabled="newEstatePost.SoPhongTam <= 0"
            >
              -
            </button>
            <input class="count" v-model="newEstatePost.SoPhongTam" />
            <button @click="newEstatePost.SoPhongTam++">+</button>
          </div>
        </div>
        <div class="form-group" v-if="fieldsToRender.includes('HuongNha')">
          <label for="title">Hướng nhà</label>
          <select
            class="form-control"
            id="title"
            v-model="newEstatePost.HuongNha"
            placeholder="Chọn hướng"
          >
            <option v-for="direc in directions" :key="direc">
              {{ direc }}
            </option>
          </select>
        </div>
        <div class="form-group" v-if="fieldsToRender.includes('HuongBanCong')">
          <label for="title">Hướng ban công</label>
          <select
            class="form-control"
            id="title"
            v-model="newEstatePost.HuongBanCong"
            placeholder="Chọn hướng"
          >
            <option v-for="direc in directions" :key="direc">
              {{ direc }}
            </option>
          </select>
        </div>
        <div class="form-group" v-if="fieldsToRender.includes('DuongVao')">
          <label for="title">Đường vào</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="newEstatePost.DuongVao"
            placeholder="Nhập theo mét"
          />
        </div>
        <div class="form-group" v-if="fieldsToRender.includes('MatTien')">
          <label for="title">Mặt tiền</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="newEstatePost.MatTien"
            placeholder="Nhập theo mét"
          />
        </div>
      </div>
      <div class="imageSection info">
        <h3>Hình Ảnh</h3>
        <div id="uploadImage">
          <input type="file" accept="image/*,.heic" multiple autocomplete="off" tabindex="-1">
          <img src="@/assets/Icon/uploadFileIcon.svg" alt="" />
          <div>Bấm để chọn ảnh cần tải lên</div>
          <div>hoặc kéo thả ảnh vào đây</div>
        </div>
      </div>
      <div class="contact info">
        <h3>Thông tin liên hệ</h3>
        <div class="form-group">
          <label for="title">Họ và tên</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div class="form-group">
          <label for="title">Số điện thoại</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div class="form-group">
          <label for="title">Email</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Nhập email"
          />
        </div>
      </div>
    </div>
    <!-- <div class="sticky">
      <button class="btn btn-primary" @click="createPost">Xem trước giao diện</button>
      <button class="btn btn-primary" @click="createPost">Đăng tin</button>
    </div> -->
  </div>
</template>

<script>
// import ACounTer from "@/components/CreatePost/ACounter.vue";
import SelectTag from "@/components/CreatePost/SelectTag.vue";
export default {
  name: "CreatePost",
  components: {
    SelectTag,
    // ACounTer,
  },
  data() {
    return {
      isBuy: true,
      isRent: false,
      // SelectedDangThongTin: null,
      renderBaseOnType: {
        Nhà: [
          "GiayToPhapLy",
          "NoiThat",
          "SoPhongTam",
          "SoTang",
          "SoPhongNgu",
          "HuongNha",
          "HuongBanCong",
          "DuongVao",
          "MatTien",
        ],
        Đất: ["GiayToPhapLy", "Huong", "DuongVao", "MatTien"],
        "Căn hộ": [
          "GiayToPhapLy",
          "NoiThat",
          "SoPhongTam",
          "SoPhongNgu",
          "HuongNha",
          "HuongBanCong",
        ],
        "Văn phòng": [
          "GiayToPhapLy",
          "NoiThat",
          "SoPhongTam",
          "SoTang",
          "HuongNha",
          "HuongBanCong",
          "DuongVao",
          "MatTien",
        ],
        Kho: [
          "GiayToPhapLy",
          "NoiThat",
          "SoPhongTam",
          "HuongNha",
          "HuongBanCong",
          "DuongVao",
          "MatTien",
        ],
      },
      legalPapers: ["Sổ đỏ/ Sổ hồng", "Hợp đồng mua bán", "Đang chờ sổ"],
      furniture: ["Đầy đủ", "Cơ bản", "Không nội thất"],
      directions: [
        "Đông",
        "Tây",
        "Nam",
        "Bắc",
        "Đông Bắc",
        "Tây Bắc",
        "Đông Nam",
        "Tây Nam",
      ],
      newEstatePost: {
        LoaiBDS: null,
        DiaChi: null,
        TieuDe: null,
        MoTa: null,
        DienTich: null,
        MucGia: null,
        DonVi: null,
        GiayToPhapLy: null,
        NoiThat: null,
        SoPhongTam: 0,
        SoTang: 0,
        SoPhongNgu: 0,
        HuongNha: null,
        HuongBanCong: null,
        DuongVao: null,
        MatTien: null,
        HinhAnh: null,
      },
    };
  },
  computed: {
    DangThongTin() {
      const selectedType = this.newEstatePost.LoaiBDS;
      if (selectedType) {
        let typeOfInfo = this.AllRealEstateType.find(
          (type) => type.LoaiBDS === selectedType
        );
        return typeOfInfo.DangThongTin;
      }
      return null;
    },
    fieldsToRender() {
      if (!this.newEstatePost.LoaiBDS) return [];
      const typeOfInfo = this.DangThongTin;
      const fields = this.renderBaseOnType[typeOfInfo];
      return fields;
    },
    AllRealEstateType() {
      if (this.isBuy) {
        return this.$store.state.allBuyTypes;
      } else {
        return this.$store.state.allRentTypes;
      }
    },
  },
  methods: {
    ChangeType() {
      this.isBuy = !this.isBuy;
      this.isRent = !this.isRent;
      this.newEstatePost.LoaiBDS = null;
    },
    increment() {
      this.newEstatePost.SoPhongNgu++;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  box-sizing: border-box;
}

.basic {
  margin-top: 30px;
}

.post,
.realEstate,
.contact,
.imageSection {
  margin-top: 10px;
}

.info {
  width: 700px;
  padding: 15px;
  background: #ffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 5px 0px;
}

.info h3 {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
}

.form-group label {
  margin-bottom: 8px;
  color: rgb(44, 44, 44);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.form-group select {
  background: transparent;
  width: 268px;
  padding: 5px;
  font-size: 16px;
  line-height: 1;
  border: 0;
  border-radius: 0;
  height: 34px;
}

select option {
  padding: 6px 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(44, 44, 44);
  background-color: rgb(242, 242, 242);
  cursor: pointer;
}

.form-group .form-control {
  border: 1px solid #ced4da;
  border-radius: 4px;
  height: 40px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  color: rgb(44, 44, 44);
  flex: 1 1 0%;
  padding: 10px 28px 10px 11px;
  outline: none;
  caret-color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  font-size: 14px !important;
  line-height: 20px !important;
  min-height: 20px !important;
}

.Address {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.price {
  display: flex;
}

.Address .form-group,
.price .form-group {
  width: 47%;
}

.note {
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: rgb(80, 80, 80);
  margin-top: 5px;
}

.switchBox {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left: 0px;
}

.changeType {
  width: 48.5% !important;
  display: inline-block;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  white-space: nowrap;
  width: fit-content;
  background-color: rgb(255, 255, 255);
  padding: 6px 12px 6px 11px;
  color: rgb(153, 153, 153);
  opacity: 1;
  border: 1px solid rgb(204, 204, 204);
  text-align: center;
}

.changeType:nth-child(1) {
  border-radius: 4px 0px 0px 4px;
}

.changeType.active {
  background-color: rgba(0, 0, 0, 0.6);
  color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

.counter {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.counter-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px;
}

.counter-box button {
  position: relative;
  height: 32px;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  width: fit-content;
  background-color: rgb(153, 153, 153);
  padding: 10px;
  color: rgb(255, 255, 255);
  opacity: 0.4;
  border: none;
}

.counter-box button::focus {
  background-color: rgb(153, 153, 153);
  color: rgb(255, 255, 255);
}

.count {
  width: 50px;
  text-align: center;
  flex: 1 1 0%;
  margin: 0 7px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  padding: 5px 12px 5px 11px;
  caret-color: rgb(0, 0, 0);
  color: rgb(44, 44, 44);
  outline: none;
  opacity: 1;
  font-size: 14px;
  font-family: Roboto;
  line-height: 20px;
}

#uploadImage {
  width: 100%;
  background: rgb(255, 255, 255);
  border: 1px dashed rgb(242, 242, 242);
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
</style>
