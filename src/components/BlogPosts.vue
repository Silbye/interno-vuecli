<template>
  <div class="blog">
    <div class="articles-big">
      <div class="blog-info">
        <div class="blog-box">
          <div class="blog-title">Articles & News</div>
          <div class="blog-text">Home / Blog</div>
        </div>
      </div>
    </div>
    <div class="latest">
      <div class="container">
        <div class="latest-title">Latest Post</div>
        <div class="latest-content">
          <img src="../assets/img/latest-post.png" alt="" class="latest-img" />
          <div class="latest-post">
            <div class="latest-post-title">
              Low Cost Latest Invented Interior Designing Ideas
            </div>
            <div class="latest-post-text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
            </div>
            <div class="latest-post-text-next">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </div>
            <div class="latest-post-date">26 December,2022</div>
            <router-link to="/Blog/Details">
              <button class="latest-post-button">
                <img src="../assets/img/follow-button.png" alt="" />
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <ArticlesNews />
  </div>
</template>
<script>
import ArticlesNews from "./ArticlesNews.vue";

export default {
  name: "BlogPosts",
  components: { ArticlesNews },
};
</script>
