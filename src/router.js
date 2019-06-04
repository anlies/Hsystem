import VueRouter from "vue-router";

import indexPage from "../pages/indexPage.vue";

import Cloudhosting from "./components/Cloudhosting.vue";

import mirror from "./components/mirror.vue";

import snapshoot from "./components/snapshoot.vue";

import secretKey from "./components/secretKey.vue";

import harddisk from "./components/harddisk.vue";

import pubnetIP from "./components/pubnetIP.vue";

import firewall from "./components/firewall.vue";

import privateNet from "./components/privateNet.vue";

import rou from "./components/rou.vue";

import balance from "./components/balance.vue";

import userInfo from "../pages/userInfo.vue";

import userSafe from "../pages/userSafe.vue";

import APIkey from "../pages/APIkey.vue";

import login from "../pages/login.vue";

import home from "../pages/home.vue";

import register from "../pages/register.vue";

var router = new VueRouter({
  routes: [
    {
       path: "/", component: home,
      children:[
        { path: "/", component: indexPage},
        { path: "/Cloudhosting", component: Cloudhosting },
        { path: "/mirror", component: mirror },
        { path: "/snapshoot", component: snapshoot },
        { path: "/secretKey", component: secretKey },
        { path: "/harddisk", component: harddisk },
        { path: "/pubnetIP", component: pubnetIP },
        { path: "/firewall", component: firewall },
        { path: "/privateNet", component: privateNet },
        { path: "/rou", component: rou },
        { path: "/balance", component: balance },
        { path: "/userInfo", component: userInfo },
        { path: "/userSafe", component: userSafe },
        { path: "/APIkey", component: APIkey },
     ] 
  },

    { path: "/login", component: login},
    { path: "/register", component: register}

  ]
});

export default router;
