<template>
  <div>
    <nav>
      <div class="icon"><img src="assets/images/logo-pink.png"/></div>      
      <div class="search">
        <img src="assets/images/search.png">
        <input type="text" placeholder="Search Companies">
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

  div {
    @extend .padding-right-10;
  }

  .icon {        
    width:            10vw;
    display:          flex;
    flex-direction:   row;
    align-items:      center;
    justify-content:  center;
  }

  .search {
    position:         relative;
    display:          flex;
    flex-direction:   row;
    align-items:      center;

    img {
      @extend .padding-left-10;
      position:       absolute;
      left:           0;
    }

    input[type=text] {
      @extend .bg-dark-blue, .padding-left-40, .color-white;
      height:           9vh;
      width:            20vw;
      border:           none;
      &::placeholder {
        @extend .color-white;
      }
    }
  }
</style>