<template>
  <div class="wrapper">
    <div class="tab-box">
      <router-link to="/estate-for-rent"> Cho thuê </router-link>
      <router-link to="/estate-for-sale"> Bán </router-link>
    </div>
    <div>
      <input
        style="color: #ccc"
        type="text"
        class="search-box"
        v-model="searchQuery"
        @input="updateSearchValue"
        placeholder="Nhập tên căn hộ hoặc địa điểm"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBarOnEstateListVue",
  props: {
    updateSearchQuery: {
      type: Function,
      required: true,
    },
  },
  watch: {},
  data() {
    return {
      showFilter: false,
      typeOfEstate: [
        "Căn hộ chung cư",
        "Nhà riêng",
        "Biệt thự",
        "Đất nền",
        "Đất thổ cư",
        "Nhà mặt phố",
      ],
      selectedOption: null,
      searchQuery: "",
    };
  },
  methods: {
    openFilter() {
      this.showFilter = !this.showFilter;
    },
    updateSearchValue() {
      this.$emit("update-search-query", this.searchQuery);
    },
    checkOption(value) {
      this.typeOfEstate.forEach((option) => {
        if (option === value) {
          this.$refs[option][0].checked = true;
        } else this.$refs[option][0].checked = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid #f2f2f2;
  box-shadow: 0px 4px 10px rgba(182, 182, 182, 0.18) !important;
}
.tab-box a:nth-child(1) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.tab-box a:nth-child(2) {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
a {
  width: 80px;
  color: rgb(153, 153, 153);
  cursor: pointer;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  font-family: "Roboto Medium", Roboto, Arial !important;
  font-weight: normal !important;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  border-image: initial;
  background: rgb(255, 255, 255);
  padding: 7px 15px;

  &.router-link-exact-active {
    color: rgb(255, 255, 255);
    background: rgb(80, 80, 80);
    border-color: rgb(80, 80, 80);
  }
}

a.active {
  background-color: #ccc;
}
.search-box {
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  outline: none;
}
.py-1 {
  top: 8px;
  z-index: 9;
  width: 280px;
  background: #fff;
  box-shadow: 0px 8px 20px rgba(182, 182, 182, 0.42);
  border-radius: 8px;
  max-height: 315px;
  position: relative;
}
input[type="text"]::before {
  font-family: font-icon-bds;
  position: absolute;
  z-index: 1;
  text-align: center;
  left: 12px;
  top: 8px;
  line-height: 16px;
  width: 16px;
  height: 16px;
  font-size: 16px;
  content: "";
}
input[type="checkbox"] {
  margin: 0 10px 0 0;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  top: 2px;
}
.submitFilter {
  color: #fff;
  background: #e03c31;
  border: solid 1px #e03c31;
  font-family: "Lexend Medium", Roboto, Arial !important;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal !important;
  letter-spacing: -0.2px;
  padding: 5px 11px;
  border-radius: 4px;
}
.selectOptions {
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
}
.selectOptionsFooter {
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #f2f2f2;
}

// -----------------------------
.item__option {
  padding-right: 40px;
  align-items: center;
  height: 100%;
}

.btn-option svg {
  font-size: 14px;
  color: #ccc;
  margin-left: 10px;
}

.option_input {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.option_input span {
  font-size: 14px;
  font-weight: 600;
}
</style>
