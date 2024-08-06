<template>
  <div class="main-container">
    <div class="form-container">
      <!-- <div><img src="../assets/sudhi.jpg" alt="" /></div> -->
      <div class="form_temp">
        <h1>User LogIn</h1>
        <input type="email" v-model="email" placeholder="Enter Your Email" />
        <input
          type="password"
          v-model="password"
          placeholder="Enter Your Password"
        />
        <button v-on:click="login">Login</button>
        <p><router-link to="/sign-up">signup</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  name: "LoginComponent",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async login() {
      if (!this.email) {
        toast.error("Email is mandatory Field", { autoClose: 3000 });
        return;
      }
      if (!this.password) {
        toast.error("Password is mandatory Field", { autoClose: 3000 });
        return;
      }
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200) {
        toast.success("You Are SuccessFully Login", { autoClose: 3000 });
      }
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (user != null) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  /* background-color: aqua; */
}
.form_temp {
  text-align: center;
  background-color: #a89399;
  border-radius: 20px;
  width: 80%;
  max-width: 300px;
  padding: 30px;
}
.form_temp p {
  margin-top: 20px;
  margin-left: 20px;
}

.form_temp input {
  height: 40px;
  width: 100%;
  margin-top: 15px;
  padding: 5px;
  border-radius: 20px;
  text-align: center;
}
.form_temp input:hover {
  border-block-color: red;
}

.form_temp button {
  background-color: #57b846;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-left: 8px;
  cursor: pointer;
}
</style>
