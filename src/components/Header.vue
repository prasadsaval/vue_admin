<template>
  <header class="header">
    <h5>ADMIN</h5>
    <div class="header__right">
      <h5>{{ userName }}</h5>
      <h5>{{ notification }}</h5>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      userName: "Eden Chen",
      notification: "Notify",
    };
  },
};
</script>

<style scoped>
.header {
  background-color: white;
  color: #000;
  height: 10%;
  text-align: center;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h5 {
  margin-left: 50px;
}

.header__right {
  display: flex;
  align-items: center;
}

.header__right h5 {
  color: black;
  font-family: "Courier New", Courier, monospace;
  margin-right: 10px;
  margin-left: 50px;
  position: sticky;
}

.header__right h5:hover {
  background-color: blueviolet;
  padding: 10px;
  border-radius: 20%;
}
</style>
