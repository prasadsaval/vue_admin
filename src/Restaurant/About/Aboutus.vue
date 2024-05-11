<template>
  <div class="main-container">
    <h2 class="animated fadeInDown">What People are saying about us.</h2>
    <div class="container">
      <v-card
        class="review-card animated slideInLeft"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <v-card-text>
          <img
            :src="review.profilePic"
            alt="Profile Picture"
            class="profile-pic"
          /> </v-card-text
        ><br />
        <v-card-title class="review-title">{{ review.fullName }}</v-card-title>
        <br />
        <v-card-subtitle class="review-subtitle">{{
          review.email
        }}</v-card-subtitle>
        <br />
        <v-card-subtitle class="review-review">{{
          review.review
        }}</v-card-subtitle>
        <v-rating
          v-model="review.rating"
          :half-increments="true"
          readonly
        ></v-rating>
      </v-card>
    </div>
    <div v-if="!reviews || reviews.length === 0">
      <p>No reviews available</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutusComponent",
  data() {
    return {
      reviews: [
        {
          fullName: "John Doe",
          email: "john@example.com",
          profilePic:
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
          rating: 4.5,
          review:
            "Mediocre at best. The atmosphere felt tired, the menu lacked innovation, and the food was forgettable. Not worth the hype or the expense.",
        },
        {
          fullName: "Jane Smitha",
          email: "jane@gmail.com",
          profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AY-5FtY1yXpwjvVsLPuMkhAhBubUodar99NPBnSMENyhDHs222g62QHTw7fAf4hLtrs&usqp=CAU",
          rating: 5,
          review:
            "A hidden treasure! Quaint yet elegant, this restaurant exceeded all expectations. Every bite was a revelation, showcasing the chef's mastery of flavors. Can't wait to return and explore more of their menu!",
        },
        {
          fullName: "Shree Sinha",
          email: "Shree@gmail.com",
          profilePic:
            "https://images.squarespace-cdn.com/content/v1/5a0625187131a531e03d7cf0/1642807342163-3X0Q321U13SU34JGHWHH/Sam+Breitmeyer.jpg?format=500w",
          rating: 5,
          review:
            "Absolutely divine! The ambiance was cozy, the service impeccable, and every dish was a delightful explosion of flavors. A must-visit for any food enthusiast!",
        },
        {
          fullName: "Shiva pinha",
          email: "Shiva@gmail.com",
          profilePic:
            "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
          rating: 5,
          review:
            "Exquisite culinary journey! From the moment we stepped in, we were treated like royalty. Each dish was a masterpiece, beautifully presented and bursting with freshness. A true gem in the city!",
        },
      ],
    };
  },
};
</script>

<style scoped>
.review-card {
  margin-bottom: 90px;
}
.main-container {
  padding: 50px;
  background-color: black;
}
.main-container h2 {
  margin-left: 400px;
  margin-bottom: 50px;
  color: white;
}

.profile-pic {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-left: 70px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  /* width: 100%; */
  padding: 10px;
}
.review-title {
  color: aliceblue;
  margin-left: 80px;
}
.review-subtitle {
  color: aliceblue;
  letter-spacing: 2px;
  font-family: Copperplate, Papyrus, fantasy;
}
.review-review {
  color: aliceblue;
  /* margin-right: 550px; */
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
/* Animation Classes */
.animated {
  animation-duration: 1s;
}

.fadeInDown {
  animation-name: fadeInDown;
}

.slideInLeft {
  animation-name: slideInLeft;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
