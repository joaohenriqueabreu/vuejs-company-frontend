<template>  
  <div id='app'>
    <Navbar></Navbar>    
    <div class="container">      
      <Breadcrumb></Breadcrumb>
      <div class="content">        
        <router-view></router-view>
      </div>      
    </div>    
    <NavFooter></NavFooter>
  </div>
</template>

<script>
export default { }
</script>

<style lang="scss">  
  body {
    margin:     0;      
  }

  #app {
    @extend %bg-light-blue;
    min-height: 100vh;
    position:   relative;

    header {
      @extend %full-width;
      position: fixed;
      top:      0;
      left:     0;       
    }

    .content {
      margin-bottom:  10vh;
    }

    footer {      
      @extend %full-width;
      position: absolute;
      bottom:   0;
      left:     0;                
    }
  }

  .container {
    padding:    8vh 10vw 10vw 10vw;
    min-height: 70vh;    
  }
</style>