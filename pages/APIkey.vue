<template>
  <div class="API-key">
    <section class="content-header">
      <h1>
        Access Key
        <span class="text-light-blue">(1)</span>
      </h1>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header with-border table_header">
              <form action="/iam" method="POST" class="form-horizontal">
                <h3 class="box-title">
                  <a
                    class="btn btn-sm btn-default m-r"
                    onClick="window.location.reload()"
                    type="button"
                  >
                    <i class="glyphicon glyphicon-refresh"></i>
                  </a>
                  <input
                    type="hidden"
                    name="_token"
                    value="2xcG3tj26HyxilvTJOdhCxHu9AdjWr8xvzbOGbo1"
                  >
                  <button class="btn btn-sm btn-primary add" type="button">
                    <i class="fa fa-plus"></i>新建
                  </button>
                </h3>
              </form>
            </div>
            <div class="box-body no-padding">
              <table class="table table-hover access-key" id="dataTable">
                <thead>
                  <tr>
                    <th class="min-desktop">序号</th>
                    <th width="30%" class="min-mobile-l">Access Key</th>
                    <th width="30%" class="min-desktop">Access Key Secret</th>
                    <th class="min-tablet-p">状态</th>
                    <th class="min-desktop">创建时间</th>
                    <th class="min-mobile-l">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td class="key">
                      <p>a94eb4d5db3d4d139b542f70301ae1e4</p>
                    </td>
                    <td class="key">
                      <p>9a188866d7a64b30abf3f995beb246c5</p>
                      <a class="js-toggle">显示</a>
                    </td>
                    <td>启用</td>
                    <td>2019-02-27 11:31:44</td>
                    <td>
                      <form
                        action="/iam/a94eb4d5db3d4d139b542f70301ae1e4"
                        method="POST"
                        style="width:47px;float:left"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="2xcG3tj26HyxilvTJOdhCxHu9AdjWr8xvzbOGbo1"
                        >
                        <input type="hidden" name="_method" value="PUT">

                        <a class="disable text-danger unactivebtn">
                          <i class="icon hy-disabled" style="padding-left:0px;"></i>禁用
                        </a>
                        <input type="hidden" name="newstatus" value="Inactive">
                      </form>

                      <form
                        action="/iam/a94eb4d5db3d4d139b542f70301ae1e4"
                        method="POST"
                        style="width:60px;float:left"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="2xcG3tj26HyxilvTJOdhCxHu9AdjWr8xvzbOGbo1"
                        >
                        <input type="hidden" name="_method" value="DELETE">
                        <a class="delete text-danger delaccess-key">
                          &nbsp;
                          <i class="fa fa-btn fa-trash"></i> 删除
                        </a>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "API-key",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.API-key {
  margin-left: 190px;
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


