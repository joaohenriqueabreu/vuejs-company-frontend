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
    @include mobile-only {
      display:        flex;
      flex-direction: column;      
    }
    
    @include other-devices {
      display:        flex;
      flex-direction: row;
    }
  }

  .sidebar {
    @extend %margin-right-40, %margin-bottom-40;

    @include mobile-only {
      width:    100%;    
    }

    @include other-devices {
      width:    20vw;
    }
  }

  .company-area {
    @extend %thin-grey-border, %column;

    @include mobile-only {
      width:    100%;
    }

    @include other-devices {
      width:    60vw;
    }    
  }
</style>