<template>
  <div class="follow-us">
    <div class="container">
      <div class="follow-title">Follow Our Projects</div>
      <div class="follow-text">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </div>
      <div class="follow-items">
        <FollowProjectsItem />
        <FollowProjectsItem />
        <FollowProjectsItem />
        <FollowProjectsItem />
      </div>
    </div>
  </div>
</template>
<script>
import FollowProjectsItem from "./FollowProjectsItem.vue";
export default {
  name: "FollowProjects",
  components: {
    FollowProjectsItem,
  },
};
</script>
