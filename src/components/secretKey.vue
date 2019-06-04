<template>
  <div class="secretKey">
    <div class="eg-list">实例列表</div>
    <div class="place-btn" role="group" aria-label="...">
      <button type="button" class="btn btn-default">苏州(0)</button>
      <button type="button" class="btn btn-default">淮安(0)</button>
      <button type="button" class="btn btn-default">北京(0)</button>
      <button type="button" class="btn btn-default">广州(0)</button>
      <button type="button" class="btn btn-default">成都(0)</button>
      <button type="button" class="btn btn-default">厦门(0)</button>
    </div>
    <div class="secretKey-title">
      <a href="#">SSH密钥</a>
    </div>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              <input type="checkbox">ID
            </th>
            <th>名称</th>
            <th>创建时间"</th>
            <th>描述</th>

            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>dolor</td>
          </tr>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>dolor</td>
          </tr>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>dolor</td>
          </tr>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>dolor</td>
          </tr>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>dolor</td>
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
.secretKey {
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
  .secretKey-title {
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
  .table-responsive {
    margin-top: 10px;
    background-color: #f5e4e9;
  }
  .page-nav {
    margin-right: 20px;
  }
}
</style>