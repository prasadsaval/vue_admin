<template>
  <aside class="sidebar">
    <div><TitleComponent /></div>
    <div>
      <nav>
        <ul>
          <li><router-link to="/">News Feed</router-link></li>
          <li><router-link to="/users">Profile</router-link></li>
          <li><router-link to="/settings">Company</router-link></li>
          <li><router-link to="/company">Events</router-link></li>
          <li><router-link to="/booking">Bookings</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/building">My Building</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import TitleComponent from "./SidebarData.vue";
export default {
  name: "SidebarComponent",
  components: { TitleComponent },
};
</script>

<style scoped>
.sidebar {
  background-color: white;
  width: 180px;
  height: 700px;
}

nav ul {
  list-style-type: none;
  position: absolute;
  top:70px
}

nav ul li {
  padding: 15px;
}

nav ul li:hover {
  background-color: #ddd;
}
</style>
