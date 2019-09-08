<template>
  <div>
    <nav>
      <div class="icon">
        <a href="#" @click.prevent="$router.push({name: 'home'})">
          <img src="assets/images/logo-pink.png"/>
        </a>
      </div>      
      <div class="search">      
        <img src="assets/images/search.png">        
        <CompanySearch></CompanySearch>
        <span>or</span>
        <button>New Smartlist</button>
      </div>
      <div class="menu-items">
        <div>
          <span>Prospect</span>
          <img src="assets/images/arrow-down.png"/>
        </div>       
        <div>
          <span>Alert</span>
          <img src="assets/images/arrow-down.png"/>
        </div>
        <div>
          <span>Learn</span>
          <img src="assets/images/arrow-down.png"/>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  nav {
    @extend .bg-purple, .color-white, .padding-vertical-10;

    display:          flex;
    flex-direction:   row;    
    height:           10vmin;            
  }

  .icon {        
    width:            10vw;
    display:          flex;
    flex-direction:   row;
    align-items:      center;
    justify-content:  center;
  }

  .search {
    @extend .padding-right-20, .color-white;
    position:         relative;
    display:          flex;
    flex-direction:   row;
    align-items:      center;

    img {
      @extend .padding-left-10;
      position:       absolute;
      left:           0;
    }    

    span {
      @extend .padding-horizontal-20, .bold, .upper-case;
    }

    button {
      @extend .bg-mid-blue, .upper-case, .color-white, .bold;
      width:          10vw;
      height:         9vh;      
      border:         none;      
      border-radius:  10px;
    }
  }

  .menu-items {
    @extend .color-white, .upper-case, .padding-horizontal-20, .bold;
    width:            30vw;    
    display:          flex;
    align-items:      center;    
    div {      
      @extend .padding-horizontal-20;
      cursor:         pointer;      
    }        
  }
</style>