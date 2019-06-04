<template>
  <div class="page_left">
    <nav class="sidebar-nav navbar-collapse">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">
            <i class="el-icon-menu"></i>&nbsp;&nbsp;总览
          </router-link>
        </li>

        <li class="nav-item">
          <a href="#sub1" class="nav-link collapse" data-toggle="collapse">
            <i class="fa fa-cloud"></i>&nbsp; 云主机
            <i class="fa fa-caret-down"></i>
          </a>

          <ul id="sub1" class="nav collapse">
            <li class="nav-item">
              <router-link to="/Cloudhosting" class="nav-link">
                <i class="icon icon-target"></i> 云主机
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/snapshoot" class="nav-link">
                <i class="icon icon-target"></i> 快照
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/secretKey" class="nav-link">
                <i class="icon icon-target"></i> SHH密钥
              </router-link>
            </li>
           <li class="nav-item">
             <router-link to="/mirror" class="nav-link">镜像</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#sub2" class="nav-link collapse" data-toggle="collapse">
            <i class="el-icon-location"></i>&nbsp; 虚拟机
            <i class="fa fa-caret-down"></i>
          </a>

          <ul id="sub2" class="nav collapse">
            <li class="nav-item">
              <a href="layouts-normal.html" class="nav-link">
                <i class="icon icon-target"></i> Normal
              </a>
            </li>

            <li class="nav-item">
              <a href="layouts-fixed-sidebar.html" class="nav-link">
                <i class="icon icon-target"></i> Fixed Sidebar
              </a>
            </li>

            <li class="nav-item">
              <a href="layouts-fixed-header.html" class="nav-link">
                <i class="icon icon-target"></i> Fixed Header
              </a>
            </li>

            <li class="nav-item">
              <a href="layouts-hidden-sidebar.html" class="nav-link">
                <i class="icon icon-target"></i> Hidden Sidebar
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#sub3" class="nav-link collapse" data-toggle="collapse">
            <i class="el-icon-goods"></i>&nbsp;对象存储
            <i class="fa fa-caret-down"></i>
          </a>

          <ul id="sub3" class="nav collapse">
            <li class="nav-item">
              <router-link to="/harddisk" class="nav-link">
                <i class="icon icon-target"></i> 云硬盘
              </router-link>
            </li>

            <li class="nav-item">
              <a href="layouts-fixed-sidebar.html" class="nav-link">
                <i class="icon icon-target"></i>云硬盘快照
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#sub4" class="nav-link collapse" data-toggle="collapse">
            <i class="el-icon-rank"></i>&nbsp; 网络管理
            <i class="fa fa-caret-down"></i>
          </a>

          <ul id="sub4" class="nav collapse">
            <li class="nav-item">
              <router-link to="/privateNet" class="nav-link">
                <i class="icon icon-target"></i> 私有网络
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/pubnetIP" class="nav-link">
                <i class="icon icon-target"></i>公有网络
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/rou" class="nav-link">
                <i class="icon icon-target"></i>路由器
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/firewall" class="nav-link">
                <i class="icon icon-target"></i> 防火墙
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#sub5" class="nav-link collapse" data-toggle="collapse">
            <i class="el-icon-loading"></i> 性能监控
            <i class="fa fa-caret-down"></i>
          </a>
          <ul id="sub5" class="nav collapse">
            <li class="nav-item">
              <a href="layouts-normal.html" class="nav-link">
                <i class="icon icon-target"></i> 云主机监测
              </a>
            </li>

            <li class="nav-item">
              <a href="layouts-fixed-sidebar.html" class="nav-link">
                <i class="icon icon-target"></i> 路由器监测
              </a>
            </li>

            <li class="nav-item">
              <router-link  to="/balance" class="nav-link">
                <i class="icon icon-target"></i> 负载均衡
              </router-link >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="index.html" class="nav-link">
            <i class="el-icon-setting"></i>&nbsp; 应用服务
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "page_left",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.page_left {
  margin-top:10px;
  position: absolute;
  height: 100%;
  float: left;
  background-color: #581528;
  z-index: 100;
  overflow: auto;
  .nav {
    width: 100%;
    list-style: none;
    padding-left: 0%;
    margin-bottom: 0%;
  }
  .nav >li>a:focus,.nav>li>a:hover{
    background-color: #581528;
  }

  ul {
    margin-top: 0;
  }

  .nav-item {
    width: 100%;
    position: relative;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 16px 15px;
    color: #f7f2f2;
  }
  .nav-link:hover {
    color: #ddd;
  }
  a {
    font-size: 18px;
    background-color: transparent;
  }
}
</style>
