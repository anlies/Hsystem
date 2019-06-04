<template>
  <div class="cloudHost">
    <div class="eg-list">实例列表</div>
    <div class="place-btn">
      <button type="button" class="btn btn-default">苏州(0)</button>
      <button type="button" class="btn btn-default">淮安(0)</button>
      <button type="button" class="btn btn-default">北京(0)</button>
      <button type="button" class="btn btn-default">广州(0)</button>
      <button type="button" class="btn btn-default">成都(0)</button>
      <button type="button" class="btn btn-default">厦门(0)</button>
    </div>
    <div class="cloud-title">
      <a href="#">云主机</a>
      <span class="tips">您可在此页面管理云主机</span>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary">新建</button>
      <button type="button" class="btn btn-default">开机</button>
      <button type="button" class="btn btn-default">关机</button>
      <button type="button" class="btn btn-default">重启</button>
      <button type="button" class="btn btn-default">续费</button>
      <button type="button" class="btn btn-default">重置密码</button>
      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        更多操作
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu dropdown-menu-right">
        <li>
          <a href="#">删除</a>
        </li>
        <li>
          <a href="#">业务组</a>
        </li>
      </ul>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for...">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              <input type="checkbox">ID
            </th>
            <th>实例</th>
            <th>监控</th>
            <th>状态</th>
            <th>可用区</th>
            <th>主机类型</th>
            <th>配置</th>
            <th>主IP地址"</th>
            <th>实例计费模式</th>
            <th>网络计费模式</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <th>cao</th>
          </tr>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <th>cao</th>
          </tr>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <th>cao</th>
          </tr>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <th>cao</th>
          </tr>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <th>cao</th>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="page-nav">
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="active">
          <a href="#">
            1
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
</script>
<style lang="less" scoped>
.cloudHost {
  margin-left: 190px;
  margin-top: 35px;
  .eg-list {
    color: #f5e4e9;
    font-size: 30px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .place-btn {
    margin-top: 10px;
    .btn {
      margin: 0px 8px;
      background-color: #f5e4e9;
    }
  }
  .cloud-title {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    padding-left: 18px;
    a {
      font-size: 25px;
      font-weight: 700px;
      text-decoration: none;
      color: #f5e4e9;
    }
    .tips {
      font-size: 20px;
      color: #581528;
      margin-left: 10px;
    }
  }
  .btn-group {
    .btn {
      margin: 0px 8px;
    }
    .dropdown-menu {
      margin: 0px 170px;
    }
  }
  .input-group {
    .input-group-btn {
      width: 50px;
      .btn {
        margin: 0px 0px;
      }
    }
  }
  .table-responsive {
    margin-top: 10px;
    background-color: #f5e4e9;
  }
  .page-nav {
    margin-right: 20px;
  }
}
</style>