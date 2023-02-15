import { createApp } from "vue";
import store from "./store.js";
import "../css/style.css";
import App from "../App.vue";

createApp(App).use(store).mount("#app");
