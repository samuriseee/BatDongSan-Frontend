<template>
  <div class="wrapper">
    <SearchBarOnEstateList />
    <div class="main-content">
      <div class="estate-list">
        <EstateCardOnListPage
          v-for="estate in EstateForSale"
          :key="estate.id"
          :estate="estate"
          @click="$router.go('/estate/' + estate.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBarOnEstateList from "@/components/ui/SearchBarOnEstateList.vue";
import EstateCardOnListPage from "@/components/article/EstateCardOnListPage.vue";
export default {
  name: "EstateForRent",
  components: {
    SearchBarOnEstateList,
    EstateCardOnListPage,
  },
  data() {
    return {
      EstateForSale: [
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
    };
  },
  methods: {
    goToEstateDetails(id) {
      this.$router.push({ name: "estate", params: { id: id } });
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

</style>