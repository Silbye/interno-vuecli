<template>
  <header class="header">
    <div class="container">
      <div class="header-left">
        <img src="../assets/img/Logo.png" alt="" class="header-logo" />
      </div>
      <div class="header-right">
        <router-link to="/" class="header-link">Home</router-link>
        <router-link to="/project" class="header-link">Project</router-link>
        <router-link to="/blog" class="header-link">Blog</router-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
