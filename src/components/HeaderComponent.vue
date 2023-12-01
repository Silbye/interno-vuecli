<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header-left">
        <img src="../assets/img/Logo.png" alt="" class="header-logo" />
      </router-link>
      <div class="header-right">
        <router-link to="/" class="header-link">Home</router-link>
        <router-link to="/Project" class="header-link">Project</router-link>
        <router-link to="/Blog" class="header-link">Blog</router-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
