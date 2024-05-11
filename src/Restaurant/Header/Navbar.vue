<template>
  <header class="restaurant-header">
    <nav class="navbar">
      <h2>Triveni</h2>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
      </ul>
      <div class="button-check">
        <button class="reservation-btn">Make a Reservation</button>
        <button v-on:click="logout">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "RestaurantHeader",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>

<style scoped>
/* Header Styles */
.restaurant-header {
  /* background-color: #fff; */
  padding: 5px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar h2 {
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
  color: rebeccapurple;
}

.nav-links li {
  display: inline-block;
  margin-right: 15px;
  padding: 10px;
}

.nav-links li:last-child {
  margin-right: 20px;
}
.nav-links li:hover {
  transform: scale(1.2);
  background-color: rgb(196, 135, 44);
  border-radius: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.reservation-btn {
  padding: 10px 20px;
  background-color: #ff9800;
  border: none;
  /* color: #fff; */
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.4s ease;
  margin-right: 40px;
}

.reservation-btn:hover {
  background-color: #f57c00;
}
.button-check {
  display: flex;
  justify-content: space-between;
}
.button-check button:nth-child(2) {
  border-radius: 10px;
  /* background-image: url('/src/assets/user.png'); */
  background-color: snow;
}
</style>
