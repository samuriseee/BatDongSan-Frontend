<template>
  <div class="wrapper">
    <SidebarAdmin />
    <router-view></router-view>
    <!-- <div class="table" v-for="post in posts" :key="post.id">
      <div class="row">
        <div class="col-1">{{ post.ID }}</div>
        <div class="col-2">{{ post.TieuDe }}</div>
        <div class="col-2">{{ post.DiaChi }}</div>
        <div class="col-2">{{ post.MucGia }}</div>
        <div class="col-1">
          <button class="btn btn-primary">Sửa</button>
        </div>
      </div>
    </div> -->
    <caption>
      Statement Summary
    </caption>
    <table v-for="item in posts" :key="item.id">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tiêu Đề</th>
          <th scope="col">giá</th>
          <th scope="col">Diện tích</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ item.ID }}</td>
          <td>{{ item.TieuDe }}</td>
          <td>{{ item.MucGia }}</td>
          <td>{{ item.DienTich }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import SidebarAdmin from "@/components/AdminDashboard/SideBarAdmin.vue";
export default {
  name: "AdminPage",
  components: {
    SidebarAdmin,
  },
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: null,
    };
  },
  methods: {
    async getPosts() {
      const API = "http://localhost:8000/post/getAllPost";
      await axios.get(API).then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}

/* general styling */
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
</style>
