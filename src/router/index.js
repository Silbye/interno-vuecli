import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";
import BlogDetails from "../components/BlogDetails.vue";
import BlogPosts from "../components/BlogPosts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPosts,
  },
  {
    path: "/blog/details",
    name: "blogdetails",
    component: BlogDetails,
  },
  {
    path: "/:pathName(.*)",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
