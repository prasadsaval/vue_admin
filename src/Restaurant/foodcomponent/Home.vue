<template>
  <section>
    <RestaurantHeader class="sticky" />
    <div class="home">
      <h1>Welcome to Our Triveni</h1>
      <p>
        "Food is not just sustenance; it's a symphony of flavors, a canvas of
        creativity, and a journey of exploration. Every dish tells a story,
        every ingredient a character, and every bite a revelation. To truly
        savor life is to savor every delicious moment at the table."
      </p>
      <p>Discover delicious dishes from our menu</p>
      <router-link to="/menu" class="btn">View Menu</router-link> <br />
      <router-link to="/menu" class="btn">Book Your table</router-link>
    </div>
    <shop-component />
    <Aboutuscomponent />
  </section>
</template>

<script>
import RestaurantHeader from "../Header/Navbar.vue";
import ShopComponent from "../foodcomponent/ShopFood.vue";
import Aboutuscomponent from "../About/Aboutus.vue";
export default {
  name: "HomeComponent",
  components: {
    RestaurantHeader,
    ShopComponent,
    Aboutuscomponent,
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (user == null) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
  background-image: url("/src/assets/restarunt.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
}
.home h1 {
  color: white;
  margin-bottom: 30px;
  letter-spacing: 2px;
  font-family: Copperplate, Papyrus, fantasy;
}
.home p {
  color: #d9d9d9;
  max-width: 1300px;
  margin-top: 70px;
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
}
.btn {
  display: inline-block;
  background-color: #ff6600;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  margin-top: 40px;
  transition: background-color 0.3s ease;
  border-radius: 10px 20px;
}

.btn:hover {
  background-color: #e55600;
}
.sticky {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
