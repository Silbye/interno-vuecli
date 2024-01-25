<template>
  <div class="main-page">
    <div class="promotion">
      <div class="container">
        <div class="promotion-content">
          <div class="promotion-title">Let Your Home Be Unique</div>
          <div class="promotion-text">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </div>
          <button class="promotion-button">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M1 8.43529L14.7232 8.29844M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <FollowProjects />
    <div class="projects-info">
      <div class="container">
        <div class="project-info project-info-box">
          <p class="project-info-title">12</p>
          <p class="project-info-text">Years Of Experiance</p>
        </div>
        <div class="project-info project-info-box">
          <p class="project-info-title">85</p>
          <p class="project-info-text">Success Project</p>
        </div>
        <div class="project-info project-info-box">
          <p class="project-info-title">15</p>
          <p class="project-info-text">Active Project</p>
        </div>
        <div class="project-info">
          <p class="project-info-title">95</p>
          <p class="project-info-text">Happy Customers</p>
        </div>
      </div>
    </div>
    <ArticlesNews />
  </div>
</template>

<script>
import FollowProjects from "./FollowProjects.vue";
import ArticlesNews from "./ArticlesNews.vue";
export default {
  name: "MainPage",
  components: {
    FollowProjects,
    ArticlesNews,
  },
};
</script>
