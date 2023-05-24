<template>
  <div class="wrapper">

  </div>
</template>

<script>
import axios from 'axios';
export default {   
    name: "AuthenPostDetails",
    components: {},
    data() {
        return {
            authenPostID: this.$route.params.id,
            authenPost: {},
        };
    },
    created() {
        this.GetAuthorizePostByID(this.authenPostID);
    },
    methods: {
        async GetAuthorizePostByID(postID) {
            const API = `${process.env.VUE_APP_API}/authorize_real_estate/getAuthorizePostByID/${postID}`;
            await axios.get(API).then((res) => {
                this.authenPost = res.data;
            });       
        },
    },
}
</script>

<style scoped>

</style>