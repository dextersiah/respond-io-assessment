import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
            children: [
                {
                    path: "node/:id",
                    name: "node",
                    component: () => import("../pages/Node/index.vue"),
                },
            ]
        }
    ],
});

export default router;
