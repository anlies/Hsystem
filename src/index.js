import Vue from "vue";

// import Vuex from 'vuex'

import echarts from "echarts";

Vue.prototype.$echarts = echarts;

// Vue.use(Vuex)

// var store = new Vuex.Store({
// 	state:{
// 		count:0
// 	},
// 	mutations:{
// 		increment:function(state){
// 			state.count++
// 		}

// 	},
// 	getters:{
// 		opt:function(state){
// 		return state.count
// 		}
// 	}
// })

import $ from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import router from "./router.js";

import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

import main from "./main.vue"; 

import 'font-awesome/css/font-awesome.css'

import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

var vm = new Vue({
  el: "#app",
  data: {
    msg: "123"
  },
  render: c => c(main),
  router
  //  store
});
