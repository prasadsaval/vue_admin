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
      <router-link to="/menu" class="btn">View Menu</router-link>
    </div>
    <div class="home-section">
      <h2>Our Specials Recipes</h2>
      <div class="specials-container">
        <div class="special-item">
          <img src="../../../public/biryani.jpg" alt="Tomato Chicken Biryani" />
          <h3>Tomato Chicken Biryani</h3>
          <p>$100</p>
        </div>
        <div class="special-item">
          <img
            src="../../../public/salad kheema.jpg"
            alt="Tomato Salad Kheema"
          />
          <h3>Tomato Salad Kheema</h3>
          <p>$150</p>
        </div>
        <div class="special-item">
          <img src="../../../public/paneer.jpg" alt="Paneer Kheema Rice" />
          <h3>Paneer Kheema Rice</h3>
          <p>$120</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RestaurantHeader from "../Header/Navbar.vue";
export default {
  name: "HomeComponent",
  components: {
    RestaurantHeader,
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
}

.btn:hover {
  background-color: #e55600;
}
.sticky {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.home-section {
  background-image: url("/public/foods.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
}
.home-section h2 {
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 30px;
  margin-left: 550px;
}

.specials-container {
  display: flex;
  justify-content: space-around;
}

.special-item {
  text-align: center;
  margin-bottom: 20px;
  padding: 60px;
  height: 200px;
  margin-top: 80px;
  border: 2px solid black;
  border-radius: 55px;
}

.special-item img {
  width: 500px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.special-item h3 {
  margin-top: 120px;
}
.specials-container :hover {
  cursor: pointer;
  border-color: rgb(132, 32, 178);
  transition: border-color 0.3s;
}

.special-item p {
  margin-top: 20px;
}
</style>
