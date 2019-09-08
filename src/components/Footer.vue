<template>
  <div class="footer">
		<div class="section">
      <div> 
        <a v-for="(option, index) in footerOptions" 
          v-bind:key="option.label" :href="baseUrl.concat(option.action)" target="_blank">
          {{ option.label }}
          <span v-if="index !== footerOptions.length - 1">|</span>      
        </a>
      </div>      
      <div>
        © Copyright {{ currentYear }}, Intricately, Inc. All rights reserved.
      </div>
    </div>
    <div class="section"></div>
    <div class="section right">
      <div>
        <a :href="baseUrl.concat('/terms')" target="_blank">Terms and Conditions</a>
        <span>|</span>
        <a :href="baseUrl.concat('/privacy')" target="_blank">Privacy Policy</a>
      </div>
      <div>
        <a href="#"><img src="assets/images/linkedin.png"/></a>
        <a href="#"><img src="assets/images/facebook.png"/></a>
        <a href="#"><img src="assets/images/twitter.png"/></a>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      baseUrl: "https://www.intrincately.com",
      footerOptions: [
        {action: '/demo',          label: 'Pricing'},
        {action: '/blog',          label: 'Blog'},
        {action: '/blog',          label: 'Webinars'},
        {action: '/blog',          label: 'Events'},
        {action: '/how-it-works',  label: 'Help Center'},
      ]
    }
  }, 
  computed: {
    currentYear: () => (new Date()).getFullYear()
  }
}
</script>

<style lang="scss" scoped>
  @import 'Styles/main.scss';
  .footer {
    @extend .bg-light-grey, .color-mid-grey;    
    height:             10vh;    
    padding:            5vh 10vw;
    display:            flex;
    flex-direction:     row;  

    .section {
      width:            33%;  
      font-size:        0.7em; 
      div {
        @extend .padding-bottom-10;
      }      

      a {
        @extend .color-mid-grey;
      }

      img {
        @extend .padding-right-10;        
      }

      span {
        @extend .padding-horizontal-10
      }  

      &.right {
        display:          flex;
        flex-direction:   column;
        align-items:      flex-end;
      }
    }    
  }
</style>