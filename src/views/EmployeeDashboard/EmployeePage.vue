<template>
  <div class="wrapper">
    <SideBarEmployee style="position: relative" />
    <router-view class="dashboard_container"></router-view>
  </div>
</template>

<script>
import SideBarEmployee from "@/components/EmployeePage/SideBarEmployee.vue";
export default {
  name: "EmployeePage",
  components: {
    SideBarEmployee,
  },
};
</script>

<style scoped>
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
}
</style>