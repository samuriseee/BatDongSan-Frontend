<template>
  <div class="container">
    <SideBar />
    <div class="create-post">
      
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/layout/SideBar.vue';
export default {
    name: "CreatePost",
    components: {
      SideBar,
    },
}
</script>

<style>
.container {
    position: relative;
}

</style>