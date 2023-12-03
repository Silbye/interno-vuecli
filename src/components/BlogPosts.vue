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
    <div class="articles">
      <div class="container">
        <div class="articles-title news-title">Articles & News</div>
        <div class="articles-items">
          <div class="article-item" v-for="(item, i) in articleItems" :key="i">
            <img
              :src="getuserImg(item).image"
              alt="Article image"
              class="article-item-image"
            />
            <div class="article-image-box">{{ item.subTitle }}</div>
            <div class="article-item-box">
              <div class="article-item-info">
                <div class="article-item-title">{{ item.title }}</div>
                <div class="article-item-date">{{ item.date }}</div>
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
        </div>
        <div class="articles-pages">
          <div class="article-page">01</div>
          <div class="article-page">02</div>
          <div class="article-page">03</div>
          <div class="article-page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
            >
              <path
                d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogPosts",
  data() {
    return {
      articleItems: [
        {
          imgUrl: "article-1.png",
          subTitle: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          imgUrl: "article-2.png",
          subTitle: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          imgUrl: "article-3.png",
          subTitle: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          imgUrl: "article-4.png",
          subTitle: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          imgUrl: "article-5.png",
          subTitle: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          imgUrl: "article-6.png",
          subTitle: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      ],
    };
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
