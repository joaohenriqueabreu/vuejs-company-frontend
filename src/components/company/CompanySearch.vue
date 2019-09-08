<template>
  <div>
    <input v-on:keyup.enter="searchCompany" 
      v-model="company" 
      type="text" 
      placeholder="Search Companies">
    <img src="assets/images/search.png">
  </div>
  
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
  div {
    @extend .color-white;
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
        @extend .bg-dark-blue, .padding-left-40, .color-white, .rounded-corner;
        height:         9vh;
        width:          20vw;
        border:         none;
        &::placeholder {
          @extend .color-white;
        }
      }
  }

 
</style>