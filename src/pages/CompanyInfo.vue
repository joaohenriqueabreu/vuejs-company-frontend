<template>
  <div>
      <CompanyDescription></CompanyDescription>
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
    min-height: 10vh;
  }
  .activities {
    height: 100%;
  }
  .special-info-container {
    @extend %row;
  }  
</style>