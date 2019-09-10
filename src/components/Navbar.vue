<template>
  <div>
    <header>
      <nav v-if="isMobile()">
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
    </header>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  nav {
    @extend %bg-purple, %color-white, %padding-vertical-10, %full-width;
    display:          flex;
    flex-direction:   row;               
    max-height:       5vh; 
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

    span {
      @extend %padding-horizontal-20, %bold, %upper-case;
    }

    button {
      @extend %bg-mid-blue, %upper-case, %color-white, %bold, %rounded-corner;
      width:          10vw;
      height:         4vh;      
      border:         none;            
    }
  }

  .menu-items {
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
</style>