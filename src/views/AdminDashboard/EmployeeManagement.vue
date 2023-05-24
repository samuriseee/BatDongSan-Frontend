<template>
    <div>
        <div class="Danh_Sach_BaiDang">
            <div class="Tieu_de">
                Danh sách nhân viên
            </div>  

            <div class="Danh_Sach_Muc_BaiDang">
                <table class="w3-table-all">
                    <thead>
                        <tr class="w3-light-grey" style="align-items: center;">
                            <th style="width: 300px;">Họ và tên </th>
                            <th style="width: 150px;">Số điện thoại</th>
                            <th style="width: 200px;">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="Dong" v-for="employee in employees " :key="employee.id" @click="goToEmployeeDetail(employee.ID)">
                            <td>
                                {{ employee.HoTen }}
                            </td>
                            <td>
                                {{ employee.SDT }}
                            </td>
                            <td>
                                {{ employee.Email }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default ({
    name: "APage",
    created() {
        this.getEmployees();
    },
    data() {
        return {
            employees: null,
        };
    },
    methods: {
        async getEmployees() {
            const API = "http://localhost:8000/employee/getAllEmployee";
            await axios.get(API).then((res) => {
                this.employees = res.data;
                console.log(this.employees);
            });
        },

        goToEmployeeDetail(id) {
            this.$router.push(`/employee-management/${id}`);
        },

    }
})
</script>

<style scoped>
.active {
    color: rgb(255, 255, 255);
    padding: 2px 15px;
    margin: 1px 5px;
    background-color: rgb(42, 142, 109);
    border: 1px solid rgb(42, 142, 109);
}

.w3-table-all {
    font-size: 12px;
    width: 1150px;
}

.Tieu_de {
    display: flex;
    padding: 10px;
    font-size: 20px;
    font-weight:bold ;

}

.DS_TinDang {
    display: flex;
    font-weight: bold;
    font-size: 15px;
}

.Tieu_de span {
    display: flex;
    margin-left: 450px;
    font-weight: bold;
    font-size: 12px;
}

.Tieu_de span button {
    border: 1px solid #2c3e50;
    border-radius: 5px;
    padding: 2px 15px;
    margin: 1px 5px;
}

.Tieu_de span button:hover {
    color: rgb(255, 255, 255);
    padding: 2px 15px;
    margin: 1px 5px;
    background-color: rgb(42, 142, 109);
    border: 1px solid rgb(42, 142, 109);
}

.TrangThai span {
    display: flex;
    justify-content: center;
}

.TrangThai {
    display: flex;
    justify-content: center;
}
.Dong:hover{
  background-color:rgb(103, 97, 97) ;
  color: rgb(255, 255, 255);
}
</style>