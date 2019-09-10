<template>
  <div>
    <Sidebar class="sidebar"></Sidebar>
    <router-view class="company-area"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Company'
}
</script>

<style lang="scss" scoped>
  div {
    display:        flex;
    flex-direction: row;
  }

  .sidebar {
    @extend %margin-right-40;
    width:    20vw;    
  }

  .company-area {
    @extend %thin-grey-border;
    width:    60vw;
  }
</style>