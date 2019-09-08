<template>
  <input v-on:keyup.enter="searchCompany" 
    v-model="company" 
    type="text" 
    placeholder="Search Companies">
</template>

<script>
export default { 
  data: () => ({company: ''}),
  methods: {
    searchCompany: function () {
      this.$router.push({ name: 'company', params: { slug: this.company }});
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  input[type=text] {
    @extend .bg-dark-blue, .padding-left-40, .color-white;
    height:         9vh;
    width:          20vw;
    border:         none;
    &::placeholder {
      @extend .color-white;
    }
  }
</style>