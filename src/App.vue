<template>  
  <div id='app'>
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <div class="container">      
      <div class="content">
        <Sidebar v-if="! $route.meta.mainPage"></Sidebar>
        <router-view></router-view>
      </div>      
    </div>    
    <Footer></Footer>
  </div>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  body {
    margin:   0px;    
  }

  #app {
    @extend .bg-light-blue;
    height:   100vh;    
  }

  .container {
    padding:  0 10vw;    
  }

  .content {
    height:   80vh;  
  }
</style>