<template>
    <div id="wrapper">
      <!--<outlook-component></outlook-component>-->
      <navbar-component></navbar-component>      
        <div id="page-wrapper" class="gray-bg">
        <head-component></head-component>
        <router-view></router-view>
         <footer-component></footer-component>
        </div>
        <rightsidebar-component></rightsidebar-component>
    </div>
</template>

<script>
import HeadComponent from './components/common/head'
import FooterComponent from './components/common/footer'
import NavbarComponent from './components/common/navbar'
import RightsidebarComponent from './components/common/rightsidebar'
import OverviewComponent from './components/app/overview'
import DatasourceComponent from './components/app/datasource'
import OutlookComponent from './components/app/outlook'
export default {
  components: {
    HeadComponent,
    FooterComponent,
    NavbarComponent,
    RightsidebarComponent,
    OverviewComponent,
    OutlookComponent
  }
}
</script>