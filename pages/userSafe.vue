<template>
  <div class="user-safe">
    <section class="content-header">
      <h1>
        账户安全
        <small>&nbsp;您可以在此页面修改账户密码、绑定手机</small>
      </h1>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#tab_1" data-toggle="tab">账户安全信息</a>
              </li>
              <li>
                <a href="#tab_2" class="hide" data-toggle="tab">修改密码</a>
              </li>
              <li>
                <a href="#tab_3" data-toggle="tab">修改手机</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tab_1">
                <div class="row account_safe_info">
                  <div class="col-sm-2">修改密码</div>
                  <div class="col-sm-7">安全性高的密码可以使帐号更安全。建议您定期更换密码，设置一个6-20位的字符的密码。</div>
                  <div class="col-sm-2">
                    <a href="javascript:void(0);" class="verification edit_pwd">
                      <i class="fa fa-edit"></i> 修改密码
                    </a>
                  </div>
                </div>
                <div class="row account_safe_info">
                  <div class="col-sm-2">修改手机</div>
                  <div class="col-sm-7">
                    您已经绑定了手机：
                    <b class="text-light-blue">+86 17********2</b>
                  </div>
                  <div class="col-sm-2">
                    <a href="javascript:void(0);" class="edit_phone">
                      <i class="fa fa-edit"></i> 重新绑定
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="tab-pane" id="tab_2">
                <form class="form-horizontal m-t" id="form_password">
                  <div class="form-group col-md-12">
                    <label class="col-sm-2 control-label">
                      <i class="text-red">＊</i>当前登录密码
                    </label>
                    <div class="col-sm-3">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="当前登录密码"
                        data-rule="当前密码:required;"
                      >
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label class="col-sm-2 control-label">
                      <i class="text-red">＊</i>输入新密码
                    </label>
                    <div class="col-sm-3">
                      <input
                        type="password"
                        class="form-control"
                        id="newpassword"
                        name="newpassword"
                        placeholder="新密码"
                        data-rule="新密码:required;mypassword"
                      >
                      <div class="psw_strong hide">
                        <ul>
                          <li class="pstrong1"></li>
                          <li class="pstrong2"></li>
                          <li class="pstrong3"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label class="col-sm-2 control-label">
                      <i class="text-red">＊</i>确认新密码
                    </label>
                    <div class="col-sm-3">
                      <input
                        type="password"
                        class="form-control"
                        name="confirm_passwd"
                        id="confirm_passwd"
                        placeholder="确认登录密码"
                        data-msg-match="两次密码输入不一致"
                        data-rule="确认密码: required;match(newpassword);"
                      >
                    </div>
                  </div>
                  <div class="form-group col-md-7 text-center">
                    <button
                      type="button"
                      class="btn btn-sm btn-primary"
                      onclick="pwdModify()"
                      id="btn_password"
                    >修改</button>
                    <button
                      type="button"
                      class="btn btn-sm btn-default"
                      onclick="formReset('form_password')"
                    >取消</button>
                  </div>
                </form>
              </div>-->
              <div class="tab-pane" id="tab_3">
                <form class="form-horizontal m-t" id="form_mobile">
                  <div class="form-group col-md-12">
                    <label class="col-sm-2 control-label">已绑定手机号码</label>
                    <div class="col-sm-3">
                      <p class="form-control-static">+86 17********2</p>
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label class="col-sm-2 control-label">
                      <i class="text-red">＊</i>原手机号码
                    </label>
                    <div class="col-sm-4">
                      <div class="input-group">
                        <div class="input-group-btn old_phone">
                          <input type="hidden" class="nationCode" name="countryCode" value="86">
                          <button
                            type="button"
                            class="btn btn-default dropdown-toggle cell"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="icon hy-mobile" style="font-size: 18px;color: #C5C5C5;"></i> 中国大陆 +86
                            <span class="icon hy-angle-down"></span>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a href="javascript:void(0)" data="86">中国大陆 +86</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="852">中国香港 +852</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="886">中国台湾 +886</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="853">中国澳门 +853</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="82">韩国 +82</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="1">美国 +1</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="63">菲律宾 +63</a>
                            </li>
                          </ul>
                        </div>
                        <!-- /btn-group -->
                        <input
                          type="text"
                          class="form-control"
                          id="mobile"
                          name="mobile"
                          placeholder="输入原手机号码"
                          data-rule="原手机号码:required;remote[https://console.chinac.com/checkmobile, countryCode]"
                        >
                      </div>
                      <label for="mobile" class="msg-box" style="display: none;"></label>
                    </div>
                    <div class="col-sm-3">
                      <p class="form-control-static">
                        <a href="javascript:void(0);" class="no_phone text-muted">
                          <i class="icon hy-question"></i>忘记原手机号？
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label class="col-sm-2 control-label">
                      <i class="text-red">＊</i>账户密码
                    </label>
                    <div class="col-sm-4">
                      <input
                        type="password"
                        class="form-control"
                        id="current_password"
                        placeholder="输入当前登录密码"
                        data-rule="当前登录密码:required;"
                      >
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <span class="col-sm-2 control-label">
                      <i class="text-red">＊</i>绑定手机号码
                    </span>
                    <div class="col-sm-4">
                      <div class="input-group">
                        <div class="input-group-btn new_phone edit-btn">
                          <input type="hidden" class="nationCode" name="new_countryCode" value="86">
                          <button
                            type="button"
                            class="btn btn-default dropdown-toggle cell"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="icon hy-mobile" style="font-size: 18px;color: #C5C5C5;"></i> 中国大陆 +86
                            <span class="icon hy-angle-down"></span>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a href="javascript:void(0)" data="86">中国大陆 +86</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="852">中国香港 +852</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="886">中国台湾 +886</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="853">中国澳门 +853</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="82">韩国 +82</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="1">美国 +1</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)" data="63">菲律宾 +63</a>
                            </li>
                          </ul>
                        </div>
                        <!-- /btn-group -->
                        <div id="p_i_n_change">
                          <input
                            type="text"
                            class="form-control"
                            id="send_mobile"
                            name="new_mobile"
                            placeholder="输入新手机号码"
                            data-rule="新手机号码:required;mobile;checkphoneN"
                          >
                        </div>
                      </div>
                      <label for="send_mobile" class="msg-box" style="display: none;"></label>
                    </div>
                    <div class="col-sm-3">
                      <p class="form-control-static" id="a_valid">
                        <a href="javascript:void(0);" onclick="sendCodePhone()">
                          <i class="fa fa-info-circle"></i> 免费获取验证码
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label class="col-sm-2 control-label">
                      <i class="text-red">＊</i>手机验证码
                    </label>
                    <div class="col-sm-4">
                      <input
                        type="text"
                        id="mobile_validator"
                        placeholder="输入验证码"
                        data-rule="手机验证码:required"
                        class="form-control"
                      >
                    </div>
                    <div class="col-sm-4">
                      <p class="form-control-static">
                        <a href="javascript:void(0);" class="text-muted no_code">
                          <i class="fa fa-question-circle"></i> 未收到验证码？
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label class="col-sm-2 control-label">
                      <i class="text-red">＊</i>图片验证
                    </label>
                    <div class="col-sm-4">
                      <input
                        type="text"
                        name="captcha"
                        id="captcha"
                        class="form-control"
                        placeholder="图片验证"
                        data-rule="图片验证码:required;captcha"
                      >
                      <span class="form-control-feedback"></span>
                    </div>
                    <div class="col-sm-4">
                      <a href="javascript:;" id="img_captcha">
                        <img class="captcha" id="captchaImg" src="#">
                      </a>
                    </div>
                  </div>
                  <div class="form-group col-md-7 text-center">
                    <input type="hidden" name="tsreone">
                    <input type="hidden" name="tsretwo">
                    <button
                      type="button"
                      class="btn btn-sm btn-primary"
                      onclick="mobileModify()"
                      id="btn_mobile"
                    >修改</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "user-safe",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.user-safe {
  margin-left: 190px;
  .nav.nav-tabs,
  .nav.nav-pills {
    padding: 24px;
  }
  .content-header {
    color: antiquewhite;
    small {
      color: rgb(134, 131, 125);
    }
  }
  .content {
    color: aliceblue;
  }
  a {
    color: rgb(89, 214, 151);
  }
}
</style>


