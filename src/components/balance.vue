<template>
  <div class="balance">
    <div class="eg-list">实例列表</div>
    <div class="place-btn">
      <button type="button" class="btn btn-default">苏州(0)</button>
      <button type="button" class="btn btn-default">淮安(0)</button>
      <button type="button" class="btn btn-default">北京(0)</button>
      <button type="button" class="btn btn-default">广州(0)</button>
      <button type="button" class="btn btn-default">成都(0)</button>
      <button type="button" class="btn btn-default">厦门(0)</button>
    </div>
    <div class="balance-title">
      <a href="#">负载均衡器</a>
    </div>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-primary">创建</button>
      <button type="button" class="btn btn-default">删除</button>
      <button type="button" class="btn btn-default">刷新</button>

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
            <th>名称</th>
            <th>所属监听器</th>
            <th>优先级</th>
            <th>优先级</th>
            <th>主机类型</th>
            <th>匹配方式</th>
            <th>转发条件</th>
            <th>创建时间</th>
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
.balance {
  margin-left:190px;
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
  .balance-title {
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

