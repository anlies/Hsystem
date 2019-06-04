<template>
  <div class="register">
    <div class="header">
      <h1>用户注册</h1>
    </div>
    <!-- 
              表单具有默认的提交行为，默认是同步的，同步表单提交，浏览器会锁死（转圈儿）等待服务端的响应结果。
              表单的同步提交之后，无论服务端响应的是什么，都会直接把响应的结果覆盖掉当前页面。
        
              后来有人想到了一种办法，来解决这个问题。
    -->
    <form id="register_form" method="post" action="/register">
      <div class="form-group">
        <label for="email">邮箱</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          placeholder="Email"
          autofocus
        >
      </div>
      <div class="form-group">
        <label for="nickname">昵称</label>
        <input
          type="text"
          class="form-control"
          id="nickname"
          name="nickname"
          placeholder="Nickname"
        >
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          placeholder="Password"
        >
      </div>
      <button type="submit" class="btn btn-success btn-block">注册</button>
    </form>
    <div class="message">
      <p>
        已有账号?
        <router-link to="/login">点击登录</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {}
};
</script>
<style lang="less" scoped>
.register {
  width: 340px;
  margin: 0 auto;
  margin-top: 50px;
  color: #333;
  .header {
    text-align: center;
    .header h1 {
      font-size: 26px;
    }
  }
  form {
    padding: 20px;
    margin-bottom: 15px;
    border: 1px solid #d8dee2;
    border-radius: 5px;
    background-color: #fff;
  }
  .message {
    padding: 10px;
    padding-bottom: 0;
    border: 1px solid #d8dee2;
    border-radius: 5px;
  }
}
</style>


