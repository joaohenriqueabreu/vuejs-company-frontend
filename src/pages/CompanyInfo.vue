<template>
  <div>
      <CompanyDescription class="main-info-container"></CompanyDescription>
      <div class="special-info-container">
        <CompanyActivities class="info-box activities"></CompanyActivities>
        <div class="secondary-info-container">
          <SimilarCompanies class="info-box"></SimilarCompanies>
          <SpendHistoryGraph class="info-box"></SpendHistoryGraph>
          <SpendHistory class="info-box"></SpendHistory>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  div {
    min-height:       10vh;
  }

  .info-box {
    @include mobile-only {
      width:  100%;
    }    
  }

  .activities {
    min-height:       100vh;

    @include other-devices {
      width:          50%;
    }
  }

  .special-info-container {
    @extend %full-width;
    @include mobile-only {
      display:        flex;
      flex-direction: column;
    }

    @include other-devices {
      display:        flex;
      flex-direction: row;      
    }    
  }  
</style>