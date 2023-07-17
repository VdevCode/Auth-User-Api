import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import talwind from "../dist/output.css";

const app = createApp(App);
app.use(talwind);
app.use(router);
app.mount("#app");

// createApp(App).use(router).mount("#app");
