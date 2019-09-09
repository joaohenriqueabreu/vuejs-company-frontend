/** Views */
import Home         from 'Pages/Home.vue';
import Company      from 'Pages/CompanyManager.vue';
import NotFound     from 'Pages/NotFound.vue';

import CompanyInfo  from 'Pages/CompanyInfo.vue';
import CompanyData  from 'Pages/CompanyData.vue';
import CompanyTable from 'Pages/CompanyTable.vue';

export default [
    { 
      path:       '/', 
      name:       'home', 
      component:  Home, 
      meta:       { mainPage: true }
    },
    { 
      path:       '/company/:slug',     
      component:  Company,      
      children:   [
        { 
          path:       '',         
          name:       'company', 
          component:  CompanyInfo,
          meta:       { label: 'Company Page' }
        },
        { 
          path:       'data',
          name:       'company.data', 
          component:  CompanyData,
          meta:       { label: 'Company Data'}
        },
        { 
          path:       'table', 
          name:       'company.table', 
          component:  CompanyTable,
          meta:       { label: 'Company Table'}
        },
      ]
    },  
    {
      path:       '*',
      name:       '404',
      component:  NotFound,
      meta:       { mainPage: true }
    }
  ];