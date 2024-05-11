import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  icons: {
    iconfont: "mdi",
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
