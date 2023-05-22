<template>
  <div class="wrapper">
    <SideBar />
    <router-view class="post_management_view" />
  </div>
</template>

<script>
import SideBar from "@/components/UserPostManagement/SideBar.vue";
export default {
  name: "PostManagement",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #f9f9f9;
  box-sizing: border-box;

}
.post_management_view {
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>