import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotesView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: NotesView,
  },
  {
    path: "/note/:id",
    name: "about",
    component: () => import("../views/NoteView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
