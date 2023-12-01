import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";
import BlogDetails from "../components/BlogDetails.vue";
import BlogPosts from "../components/BlogPosts.vue";
import ProjectPage from "../components/ProjectPage.vue";
import ProjectDetails from "../components/ProjectDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/Blog",
    name: "blog",
    component: BlogPosts,
  },
  {
    path: "/Blog/Details",
    name: "blogdetails",
    component: BlogDetails,
  },
  {
    path: "/Project",
    name: "project",
    component: ProjectPage,
  },
  {
    path: "/Project/Details",
    name: "projectdetails",
    component: ProjectDetails,
    props: true,
  },
  {
    path: "/:pathName(.*)",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
