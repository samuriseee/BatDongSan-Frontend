<template>
    <div>
        <form  @submit.prevent="onSubmit">
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
                v-model="newEmployee.Email"
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
import axios from "axios";
import { validationMixin } from "vuelidate";
import {  email, minLength } from "vuelidate/lib/validators";
export default {
  name: "AddEmployee",
  mixins: [validationMixin],
  data() {
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
        required: "Bắt buộc nhập tên",
      },
      MaBoPhan: {
        required: "Bắt buộc nhập mã",
      },
      SoDienThoai: {
        required: "Bắt buộc nhập sdt",
        minLength: minLength(8),
      },
      Email: {
        required: "Bắt buộc nhập email",
        email,
      },
      NgaySinh: {
      },
    },
  },
  methods: {
    onSubmit() {  
        this.register();
        this.Back_admin_page();
    },
    Back_admin_page(){
      this.$router.push(`/employee-management`);
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
    
  },
};

</script>
<style>
    .submit{
        color: red;
        border: 1px solid red;
    }
    .submit:hover{
      color: rgb(157, 199, 5);
        border: 1px solid rgb(157, 199, 5);
    }
    

</style>
