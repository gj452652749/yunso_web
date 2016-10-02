<template>
  <div id="app">
    <div id="wrapper">
      <navbar-component></navbar-component>      
        <div id="page-wrapper" class="gray-bg">
        <head-component></head-component>
        <router-view></router-view>
        <!--
        <overview-component></overview-component>
        -->
         <footer-component></footer-component>
        </div>
        <rightsidebar-component></rightsidebar-component>
    </div>
  </div>
</template>

<script>
import HeadComponent from './components/common/head'
import FooterComponent from './components/common/footer'
import NavbarComponent from './components/common/navbar'
import RightsidebarComponent from './components/common/rightsidebar'
import OverviewComponent from './components/app/overview'
import DatasourceComponent from './components/app/datasource'

export default {
  components: {
    HeadComponent,
    FooterComponent,
    NavbarComponent,
    RightsidebarComponent,
    OverviewComponent,
    DatasourceComponent
  }
}
</script>