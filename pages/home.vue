<template>
  <div class="page-home">

     <page_head></page_head>
     
     <page_left></page_left>

     <router-view></router-view>
    
     
  </div>
</template>

<script >
import page_head from './head.vue'
import page_left from './left.vue'
export default{
  name:'page-home',
  data(){
    return{}
  },
  components:{
    page_head,
    page_left
  }
}

</script>

<style type="text/css" scope  lang = "less">
.page-home{
  /* background: #133550; */
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
</style>

