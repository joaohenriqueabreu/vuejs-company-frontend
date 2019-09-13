<template>
  <div>
    <header>
      <nav>
        <div class="mobile-menu">
          <img src="assets/images/burger-menu.png" @click="showMenu = ! showMenu">
          <div class="menu-items-mobile" v-show="showMenu">
            <div @click="$router.push({ name: 'home' })">Home</div>
            <div>Prospect</div>
            <div>Alert</div>
            <div>Learn</div>
          </div>
        </div>
        <div class="search-area">
          <div class="icon">
            <router-link :to="{ name: 'home' }" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <img src="assets/images/logo.png"/>
              </a>
            </router-link>        
          </div>      
          <div class="search">                      
            <CompanySearch></CompanySearch>
            <span>or</span>
            <button>New Smartlist</button>
          </div>
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
        <div class="profile-area">
          <Profile></Profile>
        </div>
      </nav>     
    </header>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    @extend %bg-purple, %color-white, %padding-vertical-10, %full-width, %row;              
    height:             7vh;         

    .search-area {
      @extend %row;
      width:            40vw;      
      @include mobile-only { 
        display:        none; 
      }
    }

    .mobile-menu {
      @extend %column;      
      position:       relative;
      width:          50vw;      
      @include other-devices {        
        display:        none;        
      }

      img {
        @extend %padding-10;
        max-height:     4vh;  
        max-width:      7vw;      
      }

      .menu-items-mobile {
        @extend %bg-white, %color-dark-blue, %padding-20, %font-medium;
      }
      
    }
    
    .icon {        
      width:            10vw;
      display:          flex;
      flex-direction:   row;
      align-items:      center;
      justify-content:  center;
    }

    .search {
      display:          flex;
      flex-direction:   row;
      align-items:      center;
      width:            40vw;
      div {
        @extend %full-height;
      }
      

      span {
        @extend %padding-horizontal-20, %bold, %upper-case;
      }

      button {
        @extend %bg-mid-blue, %upper-case, %color-white, %bold, %rounded-corner, %full-height;
        width:          10vw;        
        border:         none;            
      }
    }

    .menu-items {
      @include mobile-only { 
        display: none;
      }

      @extend %color-white, %upper-case, %padding-horizontal-20, %bold;
      width:            40vw;    
      display:          flex;
      flex-direction:   row;
      div {      
        @extend %padding-horizontal-20;
        display:          flex;
        flex-direction:   row;
        align-items:      center;  
        justify-content:  center;  
        cursor:           pointer;      
      }        
    }

    .profile-area {
      @extend %row, %full-width;
      @include mobile-only {
        width:            50vw;
      }
      width:              20vw;
      justify-content:    flex-end;
    }
  }

  
</style>