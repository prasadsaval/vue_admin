<template>
  <!-- <div id="app"> -->
  <!-- <div class="container">
      <SidebarComponent />
      <div class="main-content">
        <HeaderComponent />
        <div class="tabledata"><TableComponentNew /></div>
      </div>
      
    </div> -->
  <!-- </div> -->
  <!-- <SignUpcomponent /> -->
  <router-view />
</template>

<script>
// import SignUpcomponent from "./Restaurant/Signup.vue";
// import HeaderComponent from "./components/Header.vue";
// import SidebarComponent from "./components/sidebar/Sidebar.vue";
// import TableComponentNew from "./components/Tablecomponent.vue";

export default {
  name: "App",
  // components: {
  // SignUpcomponent,
  //   // HeaderComponent,
  //   // SidebarComponent,
  //   // TableComponentNew,
  // },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
/* .container {
  display: flex;
  background-color: rgb(202, 198, 198);
} */

/* .main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
} */
/* .tabledata {
  background-color: blueviolet;
} */
</style>
