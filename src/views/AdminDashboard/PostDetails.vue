<template>
    <div class="wrapper">
        <div class="wrapper__detail" v-for="post in posts" :key="post.id">
            <div class="page_detail">
                <div class="page_detail--left">
                    <div class="page_detail--img">
                        <!-- Hinh anh -->
                        <!-- <EstateInfoSessionVue :images="post.anh" /> -->
                        <img src="https://file4.batdongsan.com.vn/resize/1275x717/2023/04/25/20230425113519-757a_wm.jpg"
                            alt="">
                    </div>

                    <div class="detail__left--content">
                        <div class="detail__left--title">
                            <h3>
                                <span>
                                    {{ post.TieuDe }}
                                </span>
                                <p style="font-size: 12px;">
                                    {{ post.DiaChi }}
                                </p>
                                <p class="TrangThaiTin" style="color: #ffffff;">{{ post.TrangThai }}</p>
                            </h3>
                        </div>
                        <div class="detail__left--specifications">
                            <div style="display: flex">
                                <div class="left__specifications--item">
                                    <p>Mức giá</p>
                                    <h4>
                                        {{ post.MucGia }} {{ post.DonVi }} VNĐ
                                    </h4>
                                    <span>
                                        572 triệu/m²
                                    </span>
                                </div>

                                <div class="left__specifications--item">
                                    <p>
                                        Diện tích
                                    </p>
                                    <h4>
                                        {{ post.DienTich }} m²
                                    </h4>
                                </div>

                                <div class="left__specifications--item">
                                    <p>Phòng ngủ</p>
                                    <h4>
                                        {{ post.SoPhongNgu }} phòng
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div class="detail__left--description">
                            <h4>Thông tin mô tả</h4>
                            <div class="description__content">
                                {{ post.MoTa }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="page_detail--right">
                    <div class="detail__right--contact">
                        <div class="detail__right--acc">
                            <span>Được đăng bởi
                            </span>
                            <h5>{{ post.HoTen }}</h5>
                            <a href="#">Xem thêm 20 tin khác</a>
                        </div>
                        <input class="active" type="button" :value="post.sdt" />
                        <input type="button" value="Gửi mail" />
                        <input type="button" value="Yêu cầu liên hệ lại" />

                        <div class="Duyet_trangThai">
                            <div v-if="post.TrangThai == 'vi phạm'">
                                <button class="btnDuyet" @click="updatePost_TrangThaiThanhDaDuyet()">Hiển thị lại tin</button>
                            </div>
                            <div v-else-if="post.TrangThai == 'chưa duyệt'">
                                <button class="btnDuyet" @click="updatePost_TrangThaiThanhDaDuyet()">Duyệt</button>
                                <button class="btnKhongDuyet" @click="updatePost_TrangThaiThanhKhongDuocDuyet()">Không duyệt</button>
                            </div>
                            <div v-else-if="post.TrangThai == 'đã duyệt'">
                                <button class="btnDuyet" @click="updatePost_TrangThaiThanhViPham()">Đánh dấu vi phạm</button>
                            </div>
                            <div v-else>
                                <button class="btnDuyet" @click="updatePost_TrangThaiThanhDaDuyet()">Duyệt</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    created() {
        this.getPostDetail(this.id);
    },
    data() {
        return {
            posts: [],
            id: this.$route.params.id,
            t: null,
            trangThai:null
        };
    },
    methods: {
        async getPostDetail(id) {
            const { data } = await axios.get(
                `http://localhost:8000/post/PostDetail/${id}`
            );
            this.posts = data;
        },

        BackPostS_management(){
            this.$router.push(`/post-management`);
        },
        
        // BackPostS_management(){
        //     this.$router.push(`/post-management);
        // },
        // 4 trang thái 
        // 0: vi phạm
        // 1: tin chưa duyệt
        // 2: tin đã duyệt
        // 3: tin không được duyệt

        updatePost_TrangThaiThanhDaDuyet() {
            const data = {
                idU: this.$route.params.id,
            };

            axios.post('http://localhost:8000/post/updatePost_TrangThaiThanhDaDuyet', data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
                alert("Bài đăng đã được hiển thị lên bảng tin");
                this.BackPostS_management()

        },

        updatePost_TrangThaiThanhKhongDuocDuyet() {
            const data = {
                idU: this.$route.params.id,
            };

            axios.post('http://localhost:8000/post/updatePost_TrangThaiThanhKhongDuocDuyet', data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
                alert("Bạn đã không phê duyệt bài đăng này");
                this.BackPostS_management()

        },

        updatePost_TrangThaiThanhViPham() {
            const data = {
                idU: this.$route.params.id,
            };

            axios.post('http://localhost:8000/post/updatePost_TrangThaiThanhViPham', data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
                alert("Đã đánh dấu bài đăng vi phạm");
                this.BackPostS_management()
                
        }

    },

};

</script>
<style scoped >
.wrapper__detail {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    border-radius: 10px;
    height: auto;
    margin-bottom: 100px;

}

.page_detail {
    display: flex;
    justify-content: center;
    width: 65%;
    margin-top: 50px;
    background: #fff;
    margin-left: 180px;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #c4bcbc;
    height: 800px;
}

.TrangThaiTin {
    background-color: #e2764b;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    width: 200px;

}

.page_detail--left {
    width: 1000px;
    height: 100%;
    padding: 20px;
}

.detail__left--content {
    text-align: start;
}

.detail__left--title {
    margin-top: 5px;
    display: flex;
}

.page_detail--img {
    width: 650px;
    height: 300px;
    display: flex;
    background-color: #8e898748;
    justify-content: center;

}

.page_detail--img img {
    width: auto;
    height: auto;
}




.detail__left--title p {
    font-size: 15px;
    color: #000000;
}

.detail__left--title p span {
    font-size: 15px;
}

.detail__left--title h3 {
    font-size: 19px;
    font-weight: 700;
    color: #000000;
}

.detail__left--specifications {
    display: flex;
    padding: 10px 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    align-items: center;
}

.left__specifications--item {
    margin-right: 50px;
}

.left__specifications--item p {
    font-size: 15px;
    font-weight: 500;
    color: #b3b3b3;
}

.left__specifications--item h4 {
    font-size: 16px;
    font-weight: 700;
}

.left__specifications--item span {
    font-size: 10px;
    color: #b3b3b3;
}

.left__specifications--icon {
    display: flex;
}



.left__specifications--icon p {
    margin: 0 7px;
}

.detail__left--description h4 {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 7px;
}

.description__content {
    font-size: 14px;
    line-height: 24px;
}

.description__content span {
    font-weight: 700;
    font-size: 14px;
    padding: 7px;
    background: #ccc;
    border-radius: 5px;
    margin-right: 5px;
}

.description__content span::after {
    content: "Hiện số";
    color: white;
    font-size: 13px;
    font-weight: 700;
    border: 1px solid #000000;
    padding: 5px;
    margin-left: 7px;
    background: #2c2c2c;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.page_detail--right {
    width: 25%;
    height: 100%;
    padding: 20px;
}

.detail__right--contact {
    border: 1px solid #cccccc99;
    border-radius: 5px;
    padding: 15px 10px;
}

.detail__right--acc img {
    padding-top: 50px;
    text-align: center;
}

.detail__right--acc span {
    font-size: 12px;
    line-height: 16px;
    font-weight: normal !important;
    color: #999;
    display: block;
    margin-top: 8px;
    margin-bottom: -4px;
}

.detail__right--acc h5 {
    font-size: 17px;
    line-height: 27px;
    font-weight: 700 !important;
    color: #2c2c2c;
    margin-top: 8px;
}

.detail__right--acc a {
    color: #2c2c2c;
    font-size: 14px;
    line-height: 20px;
}

.page_detail--right input {
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
}

.Duyet_trangThai button {
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
}

.Duyet_trangThai button:hover {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    background-color: #489a6e;
    color: #ffffff;
}

.page_detail--right .active {
    margin-top: 20px;
    background: #2c2c2c;
    color: #fff;
}

.detail__right--description {
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 16px;
    text-align: left;
    background-color: #f2f2f2;
    margin-top: 15px;
}

.detail__right--description li {
    color: #2c2c2c;
    margin-bottom: 12px;
}
</style>