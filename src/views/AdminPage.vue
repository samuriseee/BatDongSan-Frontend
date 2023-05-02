<template>
  <div class="container">
    <p>{{ sinhvien.name }}</p>
    <p>{{ sinhvien.age }}</p>
    <button @click="PlusAge()">Cong them tuoi</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sinhvien: {
        name: "Kieejt",
        age: 20,
      },
    };
  },
  methods: {
    PlusAge() {
      this.sinhvien.age++;
    },
  }
};
</script>

<style>
</style>