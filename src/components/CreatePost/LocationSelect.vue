<template>
  <div class="Address">
    <div class="form-group">
      <label for="title">Tỉnh, thành phố</label>
      <select
        class="form-control"
        v-model="selectedCity"
        @change="onCityChange"
      >
        <option value="">Chọn</option>
        <option v-for="city in cities" :value="city.name" :key="city.id">
          {{ city.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="title">Quận, huyện</label>
      <select
        class="form-control"
        v-model="selectedDistrict"
        :disabled="!selectedCity"
        @change="onDistrictChange"
      >
        <option value="">Chọn</option>
        <option
          v-for="district in districts"
          :value="district.name"
          :key="district.id"
        >
          {{ district.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="title">Phường</label>
      <select
        class="form-control"
        v-model="selectedWard"
        @change="onWardChange"
        :disabled="!selectedDistrict"
      >
        <option value="">Chọn</option>
        <option v-for="ward in wards" :value="ward.name" :key="ward.id">
          {{ ward.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cities: [],
      districts: [],
      wards: [],
      selectedCity: "",
      selectedDistrict: "",
      selectedWard: "",
    };
  },
  mounted() {
    this.getAPI();
  },
  methods: {
    getAPI() {
      const API = `https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json`;
      axios
        .get(API)
        .then((res) => {
          const jsonData = res.data;
          const cities = jsonData.map((city) => ({
            id: city.Id,
            name: city.Name,
            districts: city.Districts.map((district) => ({
              id: district.Id,
              name: district.Name,
              wards: district.Wards.map((ward) => ({
                id: ward.Id,
                name: ward.Name,
              })),
            })),
          }));
          this.cities = cities;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onCityChange() {
      const selectedCity = this.cities.find(
        (city) => city.name === this.selectedCity
      );
      this.districts = selectedCity ? selectedCity.districts : [];
      this.selectedDistrict = "";
      this.wards = [];
      this.selectedWard = "";
    },
    onDistrictChange() {
      const selectedCity = this.cities.find(
        (city) => city.name === this.selectedCity
      );
      const selectedDistrict = selectedCity
        ? selectedCity.districts.find(
            (district) => district.name === this.selectedDistrict
          )
        : null;
      this.wards = selectedDistrict ? selectedDistrict.wards : [];
      this.selectedWard = "";
    },
    onWardChange() {
      this.$emit("locationUpdate", {
        city: this.selectedCity,
        district: this.selectedDistrict,
        ward: this.selectedWard,
      });
    },
  },
};
</script>

<style>
/* Your shared CSS styles here */
</style>

<style scoped>
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
.Address .form-group {
  width: 47%;
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
</style>