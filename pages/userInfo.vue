<template>
  <div class="user-info">
    <section class="content-header">
      <h1>
        账户信息
        <small>您可以在此页面查看、修改账户信息</small>
      </h1>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header with-border table_header">
              <h3 class="box-title">基本信息</h3>
            </div>
            <div class="box-body no-padding">
              <form class="form-horizontal" id="form_add" autocomplete="off">
                <input
                  type="hidden"
                  name="_token"
                  id="_token"
                  value="2xcG3tj26HyxilvTJOdhCxHu9AdjWr8xvzbOGbo1"
                >
                <div class="form-group col-md-12">
                  <label class="col-sm-2 control-label">用户名</label>
                  <div class="col-sm-5">
                    <p class="form-control-static">ruby666</p>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label class="col-sm-2 control-label">用户类型</label>
                  <div class="col-sm-5">
                    <p class="form-control-static">个人</p>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label class="col-sm-2 control-label">实名认证</label>
                  <div class="col-sm-5">
                    <p class="form-control-static">
                      <span class="badge bg-green">已认证</span> （有效期至2024-01-24）
                      <a
                        href="https://console.chinac.com/user/personalcertificate"
                      >查看或修改认证信息</a>
                    </p>
                  </div>
                </div>
                <div id="approve" class="hide">
                  <div class="form-group m-t clearfix">
                    <label class="col-sm-2 control-label"></label>
                    <div class="pull-left col-sm-5">
                      <div class="approve"></div>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label class="col-sm-2 control-label">
                    <i class="text-red">＊</i>邮箱
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      placeholder="如admin@chinac.com"
                      id="email"
                      class="form-control"
                      name="email"
                      data-rule="邮箱:required;email"
                      value="254248837@qq.com"
                    >
                  </div>
                </div>

                <div class="form-group col-md-12">
                  <label class="col-sm-2 control-label">
                    <i class="text-red">＊</i>手机号码
                  </label>
                  <div class="col-sm-4">
                    <p class="form-control-static">
                      +86 17********2
                      <a
                        a
                        href="https://console.chinac.com/user/accountsafe#editphone"
                        class="m_l_link"
                      >修改手机</a>
                    </p>
                  </div>
                </div>

                <div class="form-group col-md-12">
                  <label class="col-sm-2 control-label">电话</label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      placeholder="0到20位，可由数字与符号组成"
                      id="telphone"
                      class="form-control"
                      name="telphone"
                      data-rule="newtel"
                      value
                    >
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label class="col-sm-2 control-label">所在地区</label>
                  <div class="col-sm-5 select_area">
                    <select class="form-control" id="province" name="province">
                      <option value>请选择</option>

                      <option value="110000">北京市</option>
                      <option value="120000">天津市</option>
                      <option value="130000">河北省</option>
                      <option value="140000">山西省</option>
                      <option value="150000">内蒙古自治区</option>
                      <option value="210000">辽宁省</option>
                      <option value="220000">吉林省</option>
                      <option value="230000">黑龙江省</option>
                      <option value="310000">上海市</option>
                      <option value="320000">江苏省</option>
                      <option value="330000">浙江省</option>
                      <option value="340000">安徽省</option>
                      <option value="350000">福建省</option>
                      <option value="360000">江西省</option>
                      <option value="370000">山东省</option>
                      <option value="410000">河南省</option>
                      <option value="420000">湖北省</option>
                      <option value="430000">湖南省</option>
                      <option value="440000">广东省</option>
                      <option value="450000">广西壮族自治区</option>
                      <option value="460000">海南省</option>
                      <option value="500000">重庆市</option>
                      <option value="510000">四川省</option>
                      <option value="520000">贵州省</option>
                      <option value="530000">云南省</option>
                      <option value="540000">西藏自治区</option>
                      <option value="610000">陕西省</option>
                      <option value="620000">甘肃省</option>
                      <option value="630000">青海省</option>
                      <option value="640000">宁夏回族自治区</option>
                      <option value="650000">新疆维吾尔自治区</option>
                      <option value="710000">台湾省</option>
                      <option value="810000">香港特别行政区</option>
                      <option value="820000">澳门特别行政区</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <label class="col-sm-2 control-label">QQ</label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      placeholder="5-12位数字"
                      id="qq"
                      class="form-control"
                      name="qq"
                      data-rule="qq"
                      value
                    >
                  </div>
                </div>
                <div class="form-group col-md-12 text-center">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    onclick="edit()"
                    id="edit_account"
                  >修改</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.user-info {
  margin-left: 199px;
  .content-header{
    color: antiquewhite;
    small{
      color:#581528;
    }
  }
  .content{
    color: aliceblue;
  }
  a{
    color: rgb(89, 214, 151);
  }
}
</style>

