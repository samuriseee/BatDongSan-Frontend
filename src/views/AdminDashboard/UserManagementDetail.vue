<template>
    <div class="chung">
        <div class="detail" v-for="user in users" :key="user.id">
            <div class="id">
                <p>ID: </p>
                <p>{{ user.ID }}</p>
            </div>
            <div class="ht">
                <p>Nhân viên: </p>
                <p>{{user.HoTen}}</p>
            </div>
            <div class="sdt">
                <p>Số điện thoại: </p>
                <p> {{user.SDT}}</p>
            </div>
            <div class="email">
                <p>Email: </p>
            <p> {{user.Email}}</p>
            </div>
            <div class="thue">
                <p>Mã số thuế: </p>
                <p> {{user.MaSoThue}}</p>
            </div>
            <button class="btnChoLamNhanVien" @click="ChonlamNhanVien()">Chọn làm nhân viên</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    created() {
        this.getUserDetail(this.id);
    },
    data() {
        return {
            users: [],
            id: this.$route.params.id,
        };
    },
    methods: {
        async getUserDetail(id) {
            const { data } = await axios.get(
                `http://localhost:8000/user/UserDetail/${id}`
            );
            this.users = data;
        },
        
        BackUsers_management() {
            this.$router.push(`/user-management`);
        },


        ChonlamNhanVien() {
            const data = {
                idU: this.$route.params.id,
            }
            axios.post('http://localhost:8000/user/updateUser_ThanhEmployee', data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            alert("Người dùng này đã được chọn làm nhân viên");
            this.BackUsers_management();
        }
    }}

</script>
<style scoped>
.chung {
    background-color: rgb(255, 255, 255);
}

.detail {
    background-color: #f5f5f5;
    border-radius: 10px;
    margin-top: 50px;
    padding: 50px 200px;
    box-shadow: 10px 10px 10px #e6dede;
}

.detail div {
    display: flex;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
}

.btnChoLamNhanVien {
    margin-top: 40px;
    padding: 5px 40px;
    border-radius: 4px;
    border: 1px solid#489a6e;
}

.btnChoLamNhanVien:hover {
    margin-top: 40px;
    padding: 5px 40px;
    border-radius: 4px;
    background-color: #489a6e;
    color: rgb(255, 255, 255);
    border: 1px solid #489a6e;
}
</style>