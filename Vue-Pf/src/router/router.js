import { createWebHistory, createRouter } from "vue-router";

import Home from "@/components/Home"

//import About from '@/veiw/About.vue'

const router = createRouter({
    history : createWebHistory(),
      routes : [ // path별 component를 추가한다.
        { path : "/", name : "home", component : Home},
    ]
});

export default router;