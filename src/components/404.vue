<template>
  <div class="notFound">
    <div class="not-found-left">
      <div class="not-found-title">404</div>
      <div class="not-found-text">
        We are sorry, but the page you requested was not found
      </div>
      <button class="not-found-button" @click="goHome()">
        Back To Home
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85938 8.4353L15.5826 8.29845M10.4776 1.91125L17.0005 8.43424L10.3461 15.0886"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <img src="../assets/img/notfound.png" alt="" class="not-found-right" />
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "NotFound",
  methods: {
    goHome() {
      router.push({ path: "/" });
    },
  },
};
</script>
<style>
@import "../assets/styles/404.css";
</style>
