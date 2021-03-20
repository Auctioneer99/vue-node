import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/Scripts/Buisness/AwsAuth.js";

const routes = [
  {
    path: "/username",
    name: "Username",
    component: () => import("../views/Username/Username.vue"),
  },
  {
    path: "/username/login",
    name: "Login",
    component: () => import("../views/Username/Login.vue"),
  },
  {
    path: "/username/profile",
    name: "Profile",
    component: () => import("../views/Username/Profile.vue"),
  },
  {
    path: "/username/pin",
    name: "Pin",
    component: () => import("../views/Username/PIN.vue"),
  },

  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events/Events.vue"),
  },

  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/Auth/SignIn.vue"),
    beforeEnter: (to, from, next) => redirectIfAuthenticated(to, from, next),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/Auth/SignUp.vue"),
    beforeEnter: (to, from, next) => redirectIfAuthenticated(to, from, next),
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: () => import("../views/Auth/ForgotPassword.vue"),
    beforeEnter: (to, from, next) => redirectIfAuthenticated(to, from, next),
  },
  {
    path: "/resetpassword",
    name: "ResetPassword",
    component: () => import("../views/Auth/ResetPassword.vue"),
    props: true,
    beforeEnter: (to, from, next) => redirectIfAuthenticated(to, from, next),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

async function redirectIfAuthenticated(to, from, next) {
  try {
    await Auth.currentAuthenticatedUser().then((response) => {
      if (response.username !== null) {
        next({ path: "/profile/" + response.username });
      }
    });
  } catch {
    next();
  }
}

export default router;
