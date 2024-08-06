<template>
  <footer class="footer">
    <div class="main-container">
      <div class="container">
        <div class="inside-container">
          <img src="../../../public/logo hotel.png" alt="" />
          <p>
            If you really want to make a friend...,<br />
            go to someone's house and eat with him... <br />
            the people who give you their food give you their heart
          </p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="container">
            <h4 class="footer-heading">Contact Us</h4>
            <address class="footer-address">
              <p>Contact No:8882242445</p>
              <p>13 Main Street Andheri</p>
              <p>Mumbai, Maharashtra, 423243</p>
              <p>Phone: 423-446-7590</p>
              <p>
                Email:
                <a href="mailto:triveni@restaurant.com"
                  >triveni@restaurant.com</a
                >
              </p>
            </address>
          </div>
          <div class="block">
            <h4 class="footer-heading">Follow Us</h4>
            <ul class="social-media">
              <li class="social-media-item">
                <a href="https://www.facebook.com/" class="social-media-link">
                  <i class="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li class="social-media-item">
                <a href="https://www.twitter.com/" class="social-media-link">
                  <i class="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li class="social-media-item">
                <a href="https://www.instagram.com/" class="social-media-link">
                  <i class="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="container">
            <h4 class="footer-heading">Opening Hours</h4>
            <ul class="opening-hours">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
          <div class="block">
            <h4 class="footer-heading">Newsletter</h4>
            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-around;
  height: 100%;
}
.inside-container img {
  height: 200px;
}
.inside-container p {
  margin-top: 40px;
}
.footer {
  background-color: #333;
  color: #fff;
  padding: 60px 0;
}

.footer-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer-address p {
  margin: 5px 0;
}

.footer-address a {
  color: #fff;
  text-decoration: none;
}

.social-media {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.social-media-item {
  display: inline-block;
  margin-right: 20px;
}

.social-media-link {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.social-media-link:hover {
  text-decoration: underline;
}

.opening-hours {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.newsletter-form {
  margin-top: 20px;
}

.newsletter-form input[type="email"] {
  width: 200px;
  padding: 10px;
}

.newsletter-form button {
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  border: none;
  cursor: pointer;
}

.newsletter-form button:hover {
  background-color: #ccc;
}
</style>
