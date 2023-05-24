<template>
    <div class="chung">
        <div class="detail" v-for="employee in employees" :key="employee.id">
            <div class="id">
                <p>ID: </p>
                <p>{{ employee.ID }}</p>
            </div>
            <div class="ht">
                <p>Nhân viên: </p>
                <p>{{ employee.HoTen }}</p>
            </div>
            <div class="sdt">
                <p>Số điện thoại: </p>
                <p> {{ employee.SDT }}</p>
            </div>
            <div class="email">
                <p>Email: </p>
                <p> {{ employee.Email }}</p>
            </div>
            <div class="thue">
                <p>Mã số thuế: </p>
                <p> {{ employee.MaSoThue }}</p>
            </div>
            <button class="btnChoNgiViec" @click="ChonNghiViec()">Cho nghỉ việc</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created() {
        this.getEmployeeDetail(this.id);
    },
    data() {
        return {
            employees: [],
            id: this.$route.params.id,
        };
    },
    methods: {
        async getEmployeeDetail(id) {
            const { data } = await axios.get(
                `http://localhost:8000/employee/Employee_Detail/${id}`
            );
            this.employees = data;
        },

        BackEmployee_management() {
            this.$router.push(`/employee-management`);
        },
        ChonNghiViec() {
            const data = {
                idU: this.$route.params.id,
            }
            axios.post('http://localhost:8000/employee/updateEmployee_ThanhUser', data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            alert("Nhân viên này đã bị cho thôi việc");
            this.BackEmployee_management();
        }
    }
}
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

.btnChoNgiViec {
    margin-top: 40px;
    padding: 5px 40px;
    border-radius: 4px;
    border: 1px solid #2d5e2e;
}

.btnChoNgiViec:hover {
    margin-top: 40px;
    padding: 5px 40px;
    border-radius: 4px;
    background-color: #489a6e;
    color: rgb(255, 255, 255);
    border: 1px solid #489a6e;
}
</style>