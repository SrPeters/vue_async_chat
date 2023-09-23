import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/routes";
import { createPinia } from "pinia"
import "../node_modules/bulma/bulma.sass"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faComment,
  faCommentDots,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faComment,
  faCommentDots,
  faUserCircle
)

const pinia = createPinia()
const app = createApp(App)
app.component("Icon", FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount("#app");
