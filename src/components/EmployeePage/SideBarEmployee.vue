<template>
  <aside
    class="fixed relative inline-flex flex-col items-center bg-white shadow p-3"
  >
    <div
      class="profile flex items-center text-left mb-5 mt-5"
      :class="isEnlarge ? 'flex-row' : 'flex-col text-center leading-6'"
    >
      <div class="avatar">
        {{ spliceUsernameToMakeAvatar }}
      </div>
      <div class="info">
        <p class="font-medium">{{ user.HoTen }}</p>
        <p class="text-gray-500 text-sm">{{ user.Email }}</p>
      </div>
    </div>
    <nav class="inline-flex flex-col space-y-2">
      <router-link
        v-for="(link, index) in nav"
        :key="index"
        :to="link.to"
        class="flex items-center text-gray-600 py-2 cursor-pointer"
        :class="[
          [
            selected == index
              ? 'bg-indigo-100 text-indigo-500'
              : 'hover:bg-gray-100',
          ],
          [isEnlarge ? 'pl-2 pr-6 rounded-lg' : 'px-2 rounded-full'],
        ]"
        @click="selected = index"
      >
        <span
          v-html="selected == index ? link.selectedIcon : link.icon"
          class="w-8 h-8 p-1"
          :class="{ 'mr-4': isEnlarge }"
        ></span>
        <span
          v-html="link.text"
          class="font-medium select-none"
          v-if="isEnlarge"
        ></span>
      </router-link>
    </nav>
    <button
      class="absolute right-0 bottom-0 top-0 my-auto transform translate-x-full h-10 w-10 p-1 bg-white text-gray-600 rounded-r-lg mx-auto border border-solid border-gray-200 hover:border-gray-300"
      @click="isEnlarge = !isEnlarge"
    >
      <span v-html="isEnlarge ? enlarge.decrease : enlarge.enlarge"></span>
    </button>
  </aside>
</template>
    
    <script>
export default {
  data() {
    return {
      selected: null,
      isEnlarge: true,
      nav: [
        {
          icon: '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>',
          selectedIcon:
            '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>',
          text: "Quản lý công việc",
          to: "/employee-page/employee-task",
        },
      ],
      enlarge: {
        decrease:
          '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',
        enlarge:
          '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>',
        text: "Group Manager",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    },
    spliceUsernameToMakeAvatar() {
      return this.$store.state.currentUser.HoTen.slice(0, 1);
    },
  },
};
</script>
    
    <style scoped>
aside {
  height: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(182, 182, 182, 0.18);
  z-index: 99;
}
nav a.router-link-exact-active {
  background: #ffe4e6;
  color: #f43f5e;
}
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-transform: uppercase;
  background-color: rgb(255, 236, 235);
  color: rgb(116, 21, 15);
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
</style>