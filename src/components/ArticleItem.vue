<template>
  <div class="article-item">
    <img
      :src="getuserImg(data).image"
      alt="Article image"
      class="article-item-image"
    />
    <div class="article-image-box">{{ data.subTitle }}</div>
    <div class="article-item-box">
      <div class="article-item-info">
        <div class="article-item-title">{{ data.title }}</div>
        <div class="article-item-date">{{ data.date }}</div>
      </div>
      <router-link to="/Blog/Details"
        ><button class="article-item-button">
          <img
            src="../assets/img/follow-button.png"
            alt=""
            class="article-item-button-image"
          /></button
      ></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleItem",
  props: {
    data: Object,
  },
  methods: {
    getuserImg(user) {
      return {
        user,
        image: user.imgUrl && require(`../assets/img/${user.imgUrl}`),
      };
    },
  },
};
</script>
