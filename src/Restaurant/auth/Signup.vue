<template>
  <div class="form-container">
    <div class="form_temp">
      <h1>Sign Up</h1>
      <input type="text" v-model="name" placeholder="Enter Your Name" />
      <input type="email" v-model="email" placeholder="Enter Your Email" />
      <input
        type="password"
        v-model="password"
        placeholder="Enter Your Password"
      />
      <button v-on:click="submitForm()">Submit</button>
      <p><router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUpcomponent",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      if (!this.email) {
        alert("Email is mandatory Field");
        return;
      }
      if (!this.password) {
        alert("Password is mandatory Field");
        return;
      }
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user", JSON.stringify(result.data));
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
}

.form_temp {
  text-align: center;
  background-color: #a89399;
  border-radius: 20px;
  width: 80%;
  max-width: 300px;
  padding: 30px;
}

.form_temp h1 {
  margin-top: 0;
}
.form_temp input:hover {
  border-block-color: red;
}

.form_temp input {
  height: 40px;
  width: 100%;
  margin-top: 15px;
  padding: 5px;
  border-radius: 20px;
  text-align: center;
}

.form_temp button {
  background-color: #57b846;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-left: 8px;
  cursor: pointer;
}

.form_temp p {
  margin-top: 20px;
  margin-left: 20px;
}

@media (min-width: 768px) {
  .form_temp {
    width: 50%;
  }
}
</style>
