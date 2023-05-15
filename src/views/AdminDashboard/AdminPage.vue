<template>
  <div class="wrapper">
    <SidebarAdmin style="position: relative" />
    <router-view class="dashboard_container"></router-view>
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
  display: flex;
}
.dashboard_container {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>
