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
  html {    
    position:   relative;    
  }

  body {
    margin:     0;      
  }

  #app {
    @extend %bg-light-blue;
    height:     100vh;       
    overflow-y: hidden;

    header {
      @extend %full-width;
      position: absolute;
      top:      0;
      left:     0;    
    }

    footer {      
      @extend %full-width;
      position: absolute;
      bottom:   0;
      left:     0;                
    }
  }

  .container {
    padding:    5vh 10vw;
    min-height: 70vh;    
  }
</style>