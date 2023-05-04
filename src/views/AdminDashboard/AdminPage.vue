<template>
  <div class="wrapper">
    <SidebarAdmin />
    <router-view></router-view>
  </div>
</template>

<script>
import SidebarAdmin from "@/components/AdminDashboard/SideBarAdmin.vue";
export default {
  name: "AdminPage",
  components: {
    SidebarAdmin,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
