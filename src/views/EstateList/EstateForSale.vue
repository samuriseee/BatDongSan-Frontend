<template>
  <div class="wrapper">
    <SearchBarOnEstateList
      :update-search-query="updateSearchQuery"
      @search="updateSearchQuery"
    />
    <div class="main-content">
      <div class="estate-list">
        <EstateCardOnListPage
          v-for="estate in filteredRealEstate"
          :key="estate.id"
          :estate="estate"
          @click="$router.go('/estate/' + estate.id)"
        />
      </div>
      <div style="margin-top: 22px">
        <FilterByCondition
          :conditions="FilterByPrice"
          :condition-type="'Lọc theo khoảng giá'"
        />
        <FilterByCondition
          :conditions="FilterByArea"
          :condition-type="'Lọc theo diện tích'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FilterByCondition from "@/components/ui/FilterByCondition.vue";
import SearchBarOnEstateList from "@/components/ui/SearchBarOnEstateList.vue";
import EstateCardOnListPage from "@/components/article/EstateCardOnListPage.vue";
export default {
  name: "EstateForRent",
  components: {
    SearchBarOnEstateList,
    EstateCardOnListPage,
    FilterByCondition,
  },
  data() {
    return {
      FilterByPrice: [
        "Thỏa thuận",
        "Dưới 500 triệu",
        "500 - 800 triệu",
        "800 triệu - 1 tỷ",
        "1 - 2 tỷ",
        "2 - 3 tỷ",
        "3 - 5 tỷ",
        "5 - 7 tỷ",
        " 7 - 10 tỷ",
        "10 - 20 tỷ",
        "20 - 30 tỷ",
        "30 - 40 tỷ",
        "40 - 60 tỷ",
        "Trên 60 tỷ",
      ],
      FilterByArea: [
        "Dưới 30 m2",
        "30 - 50 m2",
        "50 - 80 m2",
        "80 - 100 m2",
        "100 - 150 m2",
        "150 - 200 m2",
        "200 - 250 m2",
        "250 - 300 m2",
        "300 - 500 m2",
        "500 - 1000 m2",
        "Trên 1000 m2",
      ],
      EstateForSale: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredRealEstate() {
      if (this.searchQuery === "") return this.EstateForSale;
      else {
        return this.EstateForSale.filter((estate) => {
          return estate.tieu_de
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }
    },
  },
  watch: {},
  created() {
    axios
      .get(`${process.env.VUE_APP_API}/real_estate/getBuyRealEstate`)
      .then((response) => {
        response.data = response.data.map((res) => {
          res.HinhAnh = JSON.parse(res.HinhAnh);
          return res;
        });
        this.EstateForSale = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    goToEstateDetails(id) {
      this.$router.push({ name: "estate", params: { id: id } });
    },
    updateSearchQuery(searchQuery) {
      this.searchQuery = searchQuery;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
EstateCardOnListPage {
  cursor: pointer;
}
.main-content {
  display: flex;
  justify-content: center;
}
.estate-list {
  width: 65%;
  margin-left: -5%;
  margin-right: -5%;
}
</style>