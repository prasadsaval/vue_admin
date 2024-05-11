import HomeComponent from "./Restaurant/foodcomponent/Home";
import MenuComponent from "./Restaurant/foodcomponent/Menu";
import SignUpcomponent from "./Restaurant/auth/Signup.vue";
import LoginComponent from "./Restaurant/auth/Login";
import ShopComponent from "./Restaurant/foodcomponent/ShopFood.vue";
import AboutusComponent from "./Restaurant/About/Aboutus.vue";
import ContactComponent from "./Restaurant/About/ContactComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "Home", component: HomeComponent, path: "/" },
  { name: "SignUp", component: SignUpcomponent, path: "/sign-up" },
  { name: "LogIn", component: LoginComponent, path: "/login" },
  { name: "Menu", component: MenuComponent, path: "/menu" },
  { name: "Shop", component: ShopComponent, path: "/shop" },
  { name: "About", component: AboutusComponent, path: "/about" },
  { name: "ContactUs", component: ContactComponent, path: "/contact" },
];
const router = createRouter({ history: createWebHistory(), routes });

export default router;
