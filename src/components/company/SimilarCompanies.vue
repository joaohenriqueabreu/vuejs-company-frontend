<template>
  <div>
    <h4>Similar Companies</h4>
    <hr>
    <div v-for="(company, index) in companies" :key="index" class="company">      
      <img :src="company.logo">
      <span>{{ company.name }}</span>
    </div>
  </div>
</template>

<script>
const faker         = require('faker');
const maxCompanies  = 4;

export default {
mounted: function () {    
    /** number of random companies btw 1 and 4 */
    for(let i = 0; i < Math.floor(Math.random() * maxCompanies + 1); i++) {
      this.companies.push({
        name: faker.company.companyName(),
        logo: faker.image.business()
      });
    }
  },
  data: function () {
    return {      
      companies: []
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    @extend %column;
    .company {
      @extend %row;
      align-items: center;

     img {
        @extend %padding-20;
        width:  2vw;
        height: 4vh;        
      }
    }
  }  
</style>