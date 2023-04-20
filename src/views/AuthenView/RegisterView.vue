<template>
  <div></div>
</template>

<script>
export default {
    name: "RegisterView",
    data() {
        return {
        sinhvien: {
            name: null,
            age: null,
        },
        };
    },
    methods: {
        submit() {
        console.log(this.sinhvien);
        },
    },
}
</script>

<style>

</style>