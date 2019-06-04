<template>
  <div class="page-header">
     <div class="navbar navbar-fixed-top" role="navigation" id="navbar">
         <router-link to="/" class="navbar-brand">华云平台</router-link>
          <!-- .nav-collapse -->
          <div class="navbar-collapse">          
            <ul class="nav navbar-nav quick-actions">
              <li class="dropdown divided">
                <a class="dropdown-toggle button" data-toggle="dropdown" href="#">
                  <i class="glyphicon glyphicon-bell"></i>
                  <span >消息</span>
                </a>

                <ul class="dropdown-menu wide arrow nopadding bordered">
                  <li><h1>You have <strong>2</strong> new tasks</h1></li>
                  <li>
                    <a href="#">
                      <div class="task-info">
                        <div class="desc">物理机</div>
                        <div class="percent">80%</div>
                      </div>
                      <div class="progress progress-striped progress-thin">
                        <div class="progress-bar progress-bar-green" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                          <span class="sr-only">40% Complete (success)</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="task-info">
                        <div class="desc">IOPS</div>
                        <div class="percent">15%</div>
                      </div>
                      <div class="progress progress-striped active progress-thin">
                        <div class="progress-bar progress-bar-cyan" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
                          <span class="sr-only">45% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="task-info">
                        <div class="desc">云主机</div>
                        <div class="percent">5%</div>
                      </div>
                      <div class="progress progress-striped progress-thin">
                        <div class="progress-bar progress-bar-orange" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 5%">
                          <span class="sr-only">5% Complete (warning)</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="task-info">
                        <div class="desc">网络</div>
                        <div class="percent">30%</div>
                      </div>
                      <div class="progress progress-striped progress-thin">
                        <div class="progress-bar progress-bar-red" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                          <span class="sr-only">30% Complete (danger)</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="task-info">
                        <div class="desc">存储</div>
                        <div class="percent">60%</div>
                      </div>
                      <div class="progress progress-striped progress-thin">
                        <div class="progress-bar progress-bar-amethyst" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                          <span class="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li><a href="#">Check all tasks <i class="fa fa-angle-right"></i></a></li>
                </ul>

              </li>
              <li class="dropdown divided">
                
                <a class="dropdown-toggle button" data-toggle="dropdown" href="#">
                   <i class="glyphicon glyphicon-wrench"></i>
                  <span class="user-icon user-icon-tool">设置</span>
                </a>

                <ul class="dropdown-menu wide arrow nopadding bordered">
                  <li><h1>You have <strong>3</strong> new notifications</h1></li>
                  
                  <li>
                    <a href="#">
                      <span class="label label-green"><i class="fa fa-user"></i></span>
                      New user registered.
                      <span class="small">18 mins</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span class="label label-red"><i class="fa fa-power-off"></i></span>
                      Server down.
                      <span class="small">27 mins</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span class="label label-orange"><i class="fa fa-plus"></i></span>
                      New order.
                      <span class="small">36 mins</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span class="label label-cyan"><i class="fa fa-power-off"></i></span>
                      Server restared.
                      <span class="small">45 mins</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span class="label label-amethyst"><i class="fa fa-power-off"></i></span>
                      Server started.
                      <span class="small">50 mins</span>
                    </a>
                  </li>

                   <li><a href="#">Check all notifications <i class="fa fa-angle-right"></i></a></li>
                </ul>

              </li>

              <li class="dropdown divided user" id="current-user">
                <a class="dropdown-toggle options" data-toggle="dropdown" href="#">
                  anlies <i class="fa fa-caret-down"></i>
                </a>
                
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/userInfo"><i class="fa fa-user"></i>账户信息</router-link>
                  </li>

                  <li>
                    <router-link to="/userSafe"><i class="fa fa-calendar"></i> 账户安全</router-link>
                  </li>

                  <li>
                    <router-link to="/APIkey"><i class="fa fa-envelope"></i> API秘钥</router-link>
                  </li>

                  <li class="divider"></li>

                  <li>
                    <router-link to="/login" target="_black"><i class="fa fa-power-off"></i> Logout</router-link>
                  </li>
                </ul>
               </li>
            </ul>
       </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "page-header",
  data() {
    return {}
  }
}
</script>

 <style lang="less" scoped>
 .page-header{
   margin:0;
   #navbar{
     height: 65px;
     z-index: 100;
     width: 100%;
     background-color: #581528;
     padding-right:60px;
   }
   .navbar{
    .navbar-brand{
    padding-left: 122px;
    font-size:32px;
    line-height: 30px;
    color: rgb(248, 234, 234);
      }
   .navbar-nav > li > a{
     font-size: 18px;
     line-height: 60px;
      }
    .navbar-nav > li >a:hover,navbar-nav > li >a:focus{
      background-color: #581528;
    }
   }
 }
</style>


