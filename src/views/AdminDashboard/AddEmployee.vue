<template>
    <div>
        <form @submit.prevent="onSubmit">
            <label for="fname">Tên Nhân Viên:</label><br>
            <input
                type="text"
                class="form-control" 
                placeholder="Nhập họ và tên"
                v-model="newEmployee.TenNhanVien"
            /><br><br>

            <label for="lname">Mã Bộ Phận:</label><br>
            <input
                type="text"
                class="form-control" 
                placeholder="Nhập họ và tên"
                v-model="newEmployee.MaBoPhan"
            /><br><br>

            <label for="fname">Số Điện Thoại:</label><br>
            <input
                type="text"
                class="form-control" 
                placeholder="Nhập họ và tên"
                v-model="newEmployee.SoDienThoai"
            /><br><br>

            <label for="lname">Email:</label><br>
            <input
                type="text"
                class="form-control" 
                placeholder="Nhập họ và tên"
                v-model="newEmployee.email"
            /><br><br>

            <label for="fname">Ngày Sinh:</label><br>
            <input
                type="text"
                class="form-control" 
                placeholder="Nhập họ và tên"
                v-model="newEmployee.NgaySinh"
            /><br><br>


            <input class="submit" type="submit" value="Lưu Nhân Viên">
        </form> 

    </div>
</template>
<script>
    import axios from 'axios';
    import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
    export default ({
        name: "AddEmployee",
        mixins: [validationMixin],
        created(){
            this.getEmployees();
        },
        data (){
            return {     
                newEmployee: {
                    TenNhanVien: "",
                    MaBoPhan: "",
                    SoDienThoai: "",
                    Email: "",
                    NgaySinh: "",
            },
                
            };
        },
        validations: {
            newEmployee: {
                TenNhanVien: {
                    required,
                },
                MaBoPhan: {
                    required,
                
                },
                SoDienThoai: {
                    required,
                    email,
                },
                Email: {
                    required,
                
                },
                NgaySinh: {
                    required,
                    
                },
            },
        },
        methods:{
           
            onSubmit() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.register();
                }
            },
            register() {
            let API = `http://localhost:8000/employee/createEmployee`;
            axios
                .post(API, {
                TenNhanVien: this.newEmployee.TenNhanVien,
                MaBoPhan: this.newEmployee.MaBoPhan,
                SoDienThoai: this.newEmployee.SoDienThoai,
                Email: this.newEmployee.Email,
                NgaySinh: this.newEmployee.NgaySinh,
                })
                .then((res) => {
                alert(res.data.message);
                })
                .catch((err) => {
                console.log(err);
                });
            },
                    // goToEmployeeDetail(id){
                    //     this.$router.push('employee-management/${id}');
                    // }
                }
            })
</script>
<style>
    .submit{
        color: red;
        border: 1px solid red;
    }
</style>
