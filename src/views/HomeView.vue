<template>
  <div class="home">
    Name <input type="text" v-model="sinhvien.name" />
    Age <input type="text" v-model="sinhvien.age" />
    <p>{{sinhvien.name}}</p>
    <p>{{sinhvien.age}}</p>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      sinhvien: {
        name: null,
        age: null,
      }
    };
  },
  methods: {
    submit() {
      console.log(this.sinhvien);
    }
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  color: #2c3e50;
}
</style>