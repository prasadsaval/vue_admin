<template>
  <div class="menu-container">
    <div class="container">
      <h2>Triveni</h2>
      <h1 class="curved-text">Taste And Eat</h1>
    </div>
    <ul class="menu-list">
      <div class="menu-row" v-for="(group, index) in menuGroups" :key="index">
        <li v-for="item in group" :key="item.id" class="menu-item">
          <div class="menu-item-image">
            <img :src="item.image" alt="Pizza" />
          </div>
          <div class="menu-item-details">
            <h3>{{ item.name }}</h3>
            <!-- <p v-for="(ingredient, index) in item.ingredients" :key="index">
              {{ ingredient }}
            </p> -->
            <p><b>Difficulty:</b> {{ item.difficulty }}</p>
            <p><b>Cuisine:</b> {{ item.cuisine }}</p>
            <p><b>Prep Time:</b> {{ item.prepTimeMinutes }} minutes</p>
            <p><b>Cook Time:</b> {{ item.cookTimeMinutes }} minutes</p>
            <!-- <p><b>Servings:</b> {{ item.servings }}</p> -->
            <p><b>Calories Per Serving:</b> {{ item.caloriesPerServing }}</p>
            <!-- <p><b>Tags:</b> {{ item.tags.join(", ") }}</p> -->
          </div>
          <div class="menu-card-button"><button>Taste</button></div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MenuComponent",
  data() {
    return {
      menuItems: [],
      itemsPerRow: 3,
    };
  },
  computed: {
    menuGroups() {
      return this.chunkArray(this.menuItems, this.itemsPerRow);
    },
  },
  mounted() {
    this.fetchMenuItems();
  },
  methods: {
    async fetchMenuItems() {
      try {
        let apiUrl = "https://dummyjson.com/recipes";
        const response = await axios.get(apiUrl);
        this.menuItems = response.data.recipes.slice(0, 10);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    },
    chunkArray(array, size) {
      const chunkedArray = [];
      for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
      }
      return chunkedArray;
    },
  },
};
</script>

<style scoped>
.menu-container {
  margin: 0 auto;
  background-image: url("/src//assets/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
}
.container {
  display: flex;
  justify-content: space-around;
}
.container h2 {
  margin-right: 400px;
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
  color: rebeccapurple;
}
.container h1 {
  margin-right: 550px;
  font-family: "Bitter", serif;
  color: #660505;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.7);
}

.menu-list {
  list-style-type: none;
  padding: 0;
}

.menu-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}
.menu-row li {
  background-color: rgb(162, 162, 184);
}

.menu-item {
  justify-content: space-between;
  padding: 50px;
  border: 1px solid #070707;
  border-radius: 90px;
}

.menu-item-image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 20px;
}

.menu-card-button button {
  padding: 10px;
  width: 200px;
  background-color: rgb(152, 104, 201);
  border-radius: 20px;
}
.menu-card-button button:hover {
  transform: scale(1.2);
  background-color: white;
}
</style>
