<template>
  <div class="login">
    <div class="header">
      <h1>用户登录</h1>
    </div>
    <form id="login_form">
      <div class="form-group">
        <label for>邮箱</label>
        <input type="email" class="form-control" id name="email" placeholder="Email" autofocus>
      </div>
      <div class="form-group">
        <label for>密码</label>
        <a class="pull-right" href>忘记密码？</a>
        <input type="password" class="form-control" id name="password" placeholder="Password">
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox">记住我
        </label>
      </div>
      <button type="submit" class="btn btn-success btn-block">登录</button>
    </form>
    <div class="message">
      <p>
        没有账号?
        <router-link to="/register">点击创建</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.login {
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


