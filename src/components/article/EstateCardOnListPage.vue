<template>
  <div class="re_card-full" @click="$router.push('/estate/' + estate.ID)">
    <div class="re_card-image">
      <div v-for="(HinhAnh, index) in getFirst4Images" :key="index">
        <img :src="HinhAnh" alt="" />
      </div>
    </div>
    <div class="re_card-info">
      <h3>{{ estate.TieuDe }}</h3>
      <div class="re_card-physicalInfo">
        <p style="color: red; font-weight: 500" v-if="estate.MucGia > 0">
          {{ estate.MucGia }}
        </p>
        <p style="color: red; font-weight: 500">{{ estate.DienTich }} m²</p>
        <p>{{ estate.DiaChi }}</p>
      </div>
      <div class="re_card-descript">{{ spliceDescription }}</div>
      <div class="re_card-contact">
        <div class="re_card-author">
          {{ estate.HoTen }}
        </div>
        <div class="re_card-number">{{ estate.SDT }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EstateCardOnListPage",
  props: {
    estate: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {
    getFirst4Images() {
      return this.estate.HinhAnh.slice(0, 4);
    },
    spliceDescription() {
      if (!this.estate.MoTa) return this.estate.MoTa;
      else return this.estate.MoTa.slice(0, 300) + "...";
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.re_card-full {
  box-sizing: border-box;
  box-shadow: rgba(44, 44, 44, 0.04) 0px 4px 6px 0px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(242, 242, 242);
  border-image: initial;
  text-align: left;
  margin: 25px auto;
  width: 80%;
  cursor: pointer;
}
.re_card-info {
  line-height: 1.2;
  padding: 20px 20px 0 20px;
  h3 {
    font-family: "Lexend Medium", Roboto, Arial !important;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold !important;
    letter-spacing: -0.2px;
    color: #2c2c2c;
    text-transform: uppercase;
  }
}
.re_card-info .re_card-physicalInfo {
  display: flex;
  padding: 10px 0;
  p {
    font-size: 16px;
    font-weight: 400;
    margin: 0 15px 0 0;
  }
}
.re_card-contact {
  display: flex;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid #f2f2f2;
  width: 100%;
  padding: 15px 0;
  margin-top: 15px;
  .re_card-author {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .re_card-number {
    color: #fff;
    background: #009ba1;
    border: 1px solid #009ba1;
    font-family: "Lexend Medium", Roboto, Arial !important;
    font-size: 14px;
    line-height: 20px;
    font-weight: normal !important;
    letter-spacing: -0.2px;
    padding: 5px 11px;
    border-radius: 4px;
    z-index: 0;
  }
}
.re_card-image {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 200);
  grid-gap: 5px;
  position: relative;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0px;
    bottom: 0px;
    background: linear-gradient(
      180deg,
      rgba(44, 44, 44, 0) 0%,
      #2c2c2c 108.75%
    );
    content: "";
    z-index: 1;
    border-bottom-left-radius: 4px;
  }
}
.re_card-image div:nth-child(1) {
  grid-column: 1/4;
  grid-row: 1/3;
}
.re_card-image div:nth-child(1) img {
  width: 100%;
  height: auto;
}
.re_card-image div:nth-child(2) {
  grid-column: 4/6;
  grid-row: 1/2;
}
.re_card-image div:nth-child(2) img {
  width: 100%;
  height: 100%;
}
.re_card-image div:nth-child(3) {
  grid-column: 4/5;
  grid-row: 2/3;
}
.re_card-image div:nth-child(4) {
  grid-column: 5/6;
  grid-row: 2/3;
}
.re_card-image div:nth-child(3) img,
.re_card-image div:nth-child(4) img {
  width: 100%;
  height: 100%;
}
</style>