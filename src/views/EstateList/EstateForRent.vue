<template>
  <div class="">
    <SearchBarOnEstateList />
    <div class="main-content">
      <div class="estate-list">
        <EstateCardOnListPage
          v-for="estate in EstateForRent"
          :key="estate.id"
          :estate="estate"
          @click="goToEstateDetails(estate.id)"
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
import FilterByCondition from "@/components/ui/FilterByCondition.vue";
import SearchBarOnEstateList from "@/components/ui/SearchBarOnEstateList.vue";
import EstateCardOnListPage from "@/components/article/EstateCardOnListPage.vue";
EstateCardOnListPage;
export default {
  name: "EstateForRent",
  components: {
    SearchBarOnEstateList,
    EstateCardOnListPage,
    FilterByCondition,
  },
  data() {
    return {
      EstateForRent: [
        {
          id: 1,
          title: "Căn hộ chung cư",
          address: "Đường 3/2, Phường 12, Quận 10, Tp. Hồ Chí Minh",
          price: "5000",
          area: "100",
          image: [
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          ],
          description:
            "Căn hộ chung cư ở đây rất đẹp, có nhiều tiện ích, có thể nói là một trong những căn hộ chung cư đẹp nhất tại Tp. Hồ Chí Minh",
          author: {
            name: "Kiẹt",
            phone: "0123456789",
          },
        },
        {
          id: 2,
          title: "Căn hộ chung cư",
          address: "Đường 3/2, Phường 12, Quận 10, Tp. Hồ Chí Minh",
          price: "5000",
          area: "100",
          image: [
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          ],
          description:
            "Căn hộ chung cư ở đây rất đẹp, có nhiều tiện ích, có thể nói là một trong những căn hộ chung cư đẹp nhất tại Tp. Hồ Chí Minh",
          author: {
            name: "Kiẹt",
            phone: "0123456789",
          },
        },
      ],
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
    };
  },
  methods: {
    goToEstateDetails(id) {
      this.$router.push(`/estate/${id}`);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.main-content {
  display: flex;
  justify-content: center;

}
.estate-list {
  width: 65%;
  margin-right: 20px;
}
</style>