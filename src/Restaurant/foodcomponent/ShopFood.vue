<template>
<!-- <h2>Our Specials Recipes</h2> -->
  <div class="home-section">
    <div class="specials-container">
      <div class="special-item">
        <img src="../../../public/biryani.jpg" alt="Tomato Chicken Biryani" />
        <h3>Tomato Chicken Biryani</h3>
        <p>$100</p>
        <button @click="tasteItem('Tomato Chicken Biryani')">Taste</button>
      </div>
      <div class="special-item">
        <img src="../../../public/salad kheema.jpg" alt="Tomato Salad Kheema" />
        <h3>Tomato Salad Kheema</h3>
        <p>$150</p>
        <button @click="tasteItem('Tomato Salad Kheema')">Taste</button>
      </div>
      <div class="special-item">
        <img src="../../../public/paneer.jpg" alt="Paneer Kheema Rice" />
        <h3>Paneer Kheema Rice</h3>
        <p>$120</p>
        <button @click="tasteItem('Paneer Kheema Rice')">Taste</button>
      </div>
      <div class="special-item">
        <img src="../../../public/kheema.jpg" alt="Paneer Kheema Rice" />
        <h3>Flower Kheema rice</h3>
        <p>$130</p>
        <button v-on:click="tasteItem('Flower Kheema rice')">Taste</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tasteItem(itemName) {
      console.log("Tasting " + itemName);
    },
  },
};
</script>

<style>
.home-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/public/foods.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
}

.home-section h2 {
  font-size: 25px;
}

.specials-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px;
  padding: 20px;
}

.special-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
  width: 200px;
}

.special-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.special-item h3 {
  margin-bottom: 10px;
}

.special-item p {
  margin-bottom: 5px;
  font-weight: bold;
}

.special-item button {
  background: none;
  cursor: pointer;
  padding: 10px;
  width: 170px;
  background-color: rgb(104, 201, 172);
  border-radius: 20px;
}

.special-item button:hover {
  transform: scale(0.9);
  background-color: white;
}

.special-item:hover {
  transform: scale(1.1);
}
</style>
