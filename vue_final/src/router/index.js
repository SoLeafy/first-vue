import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/views/IndexPage.vue";
import BoardList from "@/views/BoardList.vue";
const routes = [
  { path: "/", component: IndexPage },
  { path: "/boardList", component: BoardList },
  { path: "/login", component: () => import("../views/LoginPage.vue") },
  { path: "/detail", component: () => import("../views/DetailPage.vue") },
  { path: "/write", component: () => import("../views/WritePage.vue") }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;