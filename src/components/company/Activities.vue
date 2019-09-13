<template>
  <div>
      <h4>Activities</h4>
      <hr>
      <div v-for="(activity, index) in activities" :key="index">
        <div class="activity">
          <span class="date">{{ activity.date }}</span>          
          <img :src="activity.company.logo"> 
          <p>
            <span class="company">{{ activity.company.name }}</span> replaced           
            <span class="asset">{{ activity.asset }}</span>          
            <span>{{ activity.where }}</span>          
          </p>
        </div>
        <hr>
      </div>
  </div>
</template>

<script>
const faker         = require('faker');
const maxActivities = 10;

export default { 
  mounted: function () {    
    /** number of random activities btw 1 and 10 */
    for(let i = 0; i < Math.floor(Math.random() * maxActivities + 1); i++) {
      this.activities.push({
        date:     faker.date.recent().toLocaleDateString(),
        company:  {
          name: faker.company.companyName(),
          logo: faker.image.business()
        },                
        asset:    faker.company.companyName(),
        where:    faker.lorem.word()
      });
    }
  },
  data: function () {
    return {      
      activities: []
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    @extend %column; 
   .activity {
      @extend %row;
      align-items: center;

      span {
        @extend %padding-right-10;        
      }

      img {
        @extend %padding-right-10;        
        width:  1vw;
        height: 3vh;
      }

      .date {
        @extend %font-small, %color-mid-grey, %bold, %padding-20;
      }

      .company {
        @extend %color-dark-blue;
      }

      .asset {
        @extend %color-light-grey;
        text-decoration: line-through;
      }
    }   
  }  
</style>