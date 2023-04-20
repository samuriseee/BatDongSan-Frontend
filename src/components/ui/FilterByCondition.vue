<template>
  <div class="wrapper">
    <h3> {{ conditionType }}</h3>
    <ul v-for="condition in conditions" :key="condition">
        <li>{{ condition }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        conditionType: {
            type: String,
            required: true,
        },
        conditions: {
            type: Array,
            required: true,
        },
    },
    name: "FilterByCondition",
    data() {
        return {
            
        };
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 210px;
    border: 1px solid #F2F2F2;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 16px;
    line-height: 15px;
    text-align: left;
}
h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: -.2px;
}
ul {
    li {
        margin: 7px 0;
        cursor: pointer;
    }
}
</style>