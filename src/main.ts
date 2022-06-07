import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { dom } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashCan);
dom.watch()

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .mount('#app')
