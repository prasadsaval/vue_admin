<template>
  <div class="form-container">
    <!-- <div><img src="../assets/sudhi.jpg" alt="" /></div> -->
    <div class="form_temp">
      <h1>Log In</h1>
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
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async login() {
      if (!this.email) {
        alert("Email is mandatory Field");
        return;
      }
      if (!this.password) {
        alert("Password is mandatory Field");
        return;
      }
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
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
  height: auto;
  border-radius: 20px;
  width: 30%;
  position: relative;
  /* top: 0; */
}

.form_temp input {
  height: 40px;
  width: 200px;
  margin-top: 15px;
  padding: 5px;
  padding-left: 100px;
  display: block;
  border-radius: 20px;
  margin-left: 45px;
}
.form_temp input:hover {
  border-block-color: red;
}

.form_temp button {
  background-color: #57b846;
  height: 40px;
  width: 300px;
  margin-top: 20px;
}
</style>
