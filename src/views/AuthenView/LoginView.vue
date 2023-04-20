<template>
  <div
    class="flex w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl container"
  >
    <div
      class="xl:block bg-cover bg-center w-1/2"
      style="
        background-image: url('https://images.unsplash.com/photo-1550367088-9eb46b0ed5f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
      "
    ></div>
    <form class="">
      <p>Xin chào bạn!</p>
      <h3>Đăng nhập để tiếp tục</h3>
      <div class="flex flex-col">
        <input
          type="email"
          id="email"
          placeholder="Email"
          class="border rounded-lg p-2 my-2"
        />
        <input type="password"
          id="password"
          placeholder="Password"
          class="border rounded-lg p-2 my-2"
        >
        <button class="loginButton">Đăng nhập</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 464px + 336px;
  height: 567px;
  display: flex;
  justify-content: center;
  margin-top: 10%;
  font-family: "iran sans", Roboto;
}
.loginButton {
  width: 100%;
  position: relative;
    height: 48px;
    display: inline-block;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    width: fit-content;
    background-color: rgb(224, 60, 49);
    padding: 14px 16px;
    color: rgb(255, 255, 255);
    opacity: 1;
    border: none;
}
form {
  padding: 32px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    flex-grow: 1;
    justify-content: center;
    height: 100%;
    min-height: 576px;
    text-align: left;
}
form p {
  font-family: Lexend;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(44, 44, 44);
}
form h3 {
  font-family: Lexend;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    color: rgb(44, 44, 44);
    margin-top: 4px;
    margin-bottom: 32px;
}
</style>

