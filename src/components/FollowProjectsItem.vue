<template>
  <div class="follow-item">
    <img src="../assets/img/follow-1.jpg" alt="" class="follow-image" />
    <div class="follow-item-info">
      <div class="follow-item-left">
        <div class="follow-item-title">Modern Kitchan</div>
        <div class="follow-item-text">Decor / Artchitecture</div>
      </div>
      <div class="follow-item-right">
        <button @click="goToProject()" class="follow-item-button">
          <img src="../assets/img/follow-button.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "FollowProjectsItem",
  methods: {
    goToProject() {
      router.push({ path: "/Project" });
    },
  },
};
</script>
