<template>
    <div>
      <div class="div-1">
        <h1 class="chu-de">Danh sách nhân viên</h1>
        <button class="tao-khach-hang" type="submit"><a href="http://localhost:3000/#/addemployee">Tạo Nhân Viên</a></button>
        <!-- <button @click="openNewPage">Tạo Nhân Viên</button> -->
      </div>
    
        <div class="w3-container">
            
            <div class="navbar">
                     
                <ul>
                    <li><a href="#"> Tất cả nhân viên</a></li>
                    <li><a href="#"> Nhận email quảng cáo</a></li>
                    <li><a href="#"> Khách hàng thân thiết</a></li>
                    <li><a href="#"> Nhân viên dừng hoạt động</a></li>
                   
                </ul>
            </div>
            <form class="d-flex">
                <button class="btn-loc" type="submit">Thêm điều kiện lọc</button>
                <input class="search" type="search" placeholder="Tìm kiếm" aria-label="Search">
        
            </form>
       
            <table class="w3-table-all w3-hoverable">
                <thead>
                    <tr class="w3-light-grey">
                        <th></th>
                        <th>Nhân viên </th>
                        <th>Số điện thoại</th>
                        <th>Số bài đăng</th>
                        <th>Số bài đăng đợi duyệt</th>
                        <th>Tổng</th>
                    </tr>                  
                </thead>
                <tbody  > 
                   
                    <tr v-for="post in employees " :key="post.id" @click="goToEmployeeDetail(post.ID)">
                        <input class="check-box" type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <td> 
                           {{ post.TenNhanVien }}
                        </td>
                        <td> 
                            {{ post.MaBoPhan }}
                        </td>
                        <td> 
                            {{ post.SoDienThoai }}
                        </td>
                        <td> 
                            {{ post.Email }}
                        </td>
                        <td> 
                            {{ post.NgaySinh }}
                        </td>
                                
                    </tr>
                    
                    
                </tbody>
            </table>
            <div class="hien-thi-tong">                  
                <ul class="hien-thi">
                    <li> Hiển thị </li>
                    <li>20</li>                                          
                </ul>
                <ul class="tong">
                    <li>Tổng</li>
                    <li> 1</li>                                          
                </ul>
            </div>
            
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default ({
        name: "APage",
        created(){
            this.getEmployees();
        },
        data (){
            return {
                employees: null,
                
            };
        },
        methods:{
            async getEmployees(){
                const API ="http://localhost:8000/employee/getAllEmployee";
                await axios.get(API).then((res)=>{
                    this.employees = res.data;
                    console.log(this.employees);

                });

                
            },
            openNewPage() {
            window.open('http://localhost:3000/#/addemployee', '_blank');
            
            },
            onSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.register();
            }
            },
            // register() {
            // let API = `http://localhost:8000/auth/register`;
            // axios
            //     .post(API, {
            //     TenNhanVien: this.newUser.name,
            //     MaBoPhan: this.newUser.phone,
            //     SoDienThoai: this.newUser.password,
            //     email: this.newUser.email,
            //     NgaySinh: "user",
            //     })
            //     .then((res) => {
            //     alert(res.data.message);
            //     })
            //     .catch((err) => {
            //     console.log(err);
            //     });
            // },
                    // goToEmployeeDetail(id){
                    //     this.$router.push('employee-management/${id}');
                    // }
        }
    })
</script>

<style>
    .w3-container{
        width: 75%;
        margin-left: 300px;
        
        /* margin-top: 50px; */
        padding:0px 50px;
        padding-bottom:50px ;
        background: #FFFFFF;
    }
    .chu-de{
      
      color: #094b65;
      font-size: 40px;
      text-decoration: none; 
      /*bỏ dấu gạch chân*/
      font-family: 'Style Script', cursive;
      font-weight: 700;
      /*cho nét chữ to hơn*/
      /* margin-right: 400px; */
      /*khoảng cách giữa chữ Family vs menu*/
      margin-top: 20px;
      width:80%;
    }
      
    .btn-loc{
        margin-right: 20px;     
        border:1px solid rgb(212, 225, 232) ;
        padding: 5px;
        
    /* border: antiquewhite; */

    }
    .search{
        /* width: 882px; */
        width: 875px;
        border:1px solid rgb(212, 225, 232) ;
        padding: 5px 20px;
    }
    .d-flex{
        /* width:39%; */
        margin-bottom: 20px;
    
    }
    .hien-thi{
        display: inline-block;  /* để thành hàng ngang*/  
        margin-right: 400px;
    }
    .tong{
        display: inline-block;  /* để thành hàng ngang*/  
        margin-left: 400px;
    }

    .hien-thi-tong ul li{
        padding: 20px 0;
        display: inline-block;  /* để thành hàng ngang*/   
        margin-left: 10px;     /* khoảng cách giữa - Hiển thị - 20
        /* position: relative;  */
    }
   
    .check-box{
        margin-top:14px;
        margin-left: 15px;
    }
    .tao-khach-hang{
        /* margin-right: 20px;      */
        border:1px solid rgb(212, 225, 232) ;
        padding: 1px;
        /* display: flex; */
    }
    .div-1{
        display: flex;
    }
    /* css menu*/
    .navbar{
        padding: 20px 0px;
        margin-right:229px;
    
   
      
    
    }
    .navbar ul li {
        list-style: none;
        display: inline-block;  /* để thành hàng ngang*/
        margin: 0 20px;     /* khoảng cách giữa các menu*/
        position: relative;
    }
    .navbar ul li a{
        text-decoration: none;  /* bỏ dấu gạch chân*/
        color: #000;
        /* text-transform: uppercase;  viết hoa all */
    }
    .navbar ul li::after{   /*khi chưa chạm vào thì...*/
        content: "";    /* thanh ngang chạy phía dưới khi chạm vào menu */
        background: #0e96cc;       /* màu của thanh ngang  */
        height: 2px;    /* độ cao của thanh ngang  */
        width: 0;     /* độ dài ban đầu là 0 (để ẩn đi rồi hiện cho đẹp) */    
        position: absolute;    /* để cho thanh ngang đè lên slide */
        bottom: -2px;   /* khoảng cách của thanh ngang với menu */
        left: 0px;    /* chạy từ đầu li */
        transition: all 0.5s ease-in-out;   /* time và kiểu xuất hiện của thanh ngang */
    }
    .navbar ul li:hover::after{  /* khi chạm vào thì... */ 
        width: 50%;                   /* chạy hết li (mặc định ntn)*/  
        transform: translateX(100%);  /* cho thanh ngang chạy hết 100% qua chữ */  
    }
    
    
   
</style>