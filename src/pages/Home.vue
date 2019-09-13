<template>
  <div>
    <div class="home">
      <CompanySearch></CompanySearch>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  div {
     @extend %full-width, %row;                  
      align-items:      center;
      justify-content:  center;

    .home {      
      width:            50vw;
      height:           20vh;
    }        
  }
</style>