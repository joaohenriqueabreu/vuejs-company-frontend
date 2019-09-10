<template>
  <div>
      <CompanyForm></CompanyForm>
      <CompanyNotes></CompanyNotes>
  </div>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
  div {
    @extend %column, %bg-white, %rounded-corner, %padding-20;
  }
</style>