import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";


///// fontawesome /////
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTriangleExclamation, faXmark)
///////



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");
