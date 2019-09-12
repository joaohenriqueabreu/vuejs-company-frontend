<template>
  <div>
    <h4>Company Spend History</h4>
    <hr>
    <div>
      <img src='assets/images/graph.png'/>
    </div>    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  div {
    @extend %column;
    align-items: center;
  }

  img {
    /* @extend %margin-20; */
    height: 25vh;
  }
</style>