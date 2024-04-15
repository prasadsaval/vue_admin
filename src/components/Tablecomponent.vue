<template>
  <div class="table-container">
    <table class="custom-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Rating</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in responseData" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.rating }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.brand }}</td>
          <td>{{ item.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TableComponentNew",
  data() {
    return {
      responseData: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const apiUrl = "https://dummyjson.com/products";
      try {
        const response = await axios.get(apiUrl);
        let respectivedata = response.data.products.slice(0, 15); // Limit to first 10 items
        this.responseData = respectivedata.map((product) => ({
          title: product.title,
          rating: product.rating,
          price: product.price,
          brand: product.brand,
          category: product.category,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.table-container {
  background-color: white;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #f2f2f2;
}
.table-container{
    margin: 30px;
}
</style>
