<template>
  <div class="blog-details">
    <div class="articles-big details-big"></div>
    <div class="blog-posts">
      <div class="container">
        <div class="blog-items">
          <div
            class="blog-item"
            v-for="(item, index) in filteredList"
            :key="index"
          >
            <div v-if="item.title.trim().length == 0" class="hide"></div>
            <div v-else class="blog-item-title">
              {{ item.title }}
            </div>
            <img v-if="item.imgUrl.trim().length == 0" class="hide" />
            <img
              v-else
              :src="getArticleImg(item).image"
              alt="Article image"
              class="blog-item-image"
            />
            <div v-if="item.date.trim().length == 0" class="hide"></div>
            <div v-else class="blog-item-info">
              <div class="blog-item-date">{{ item.date }}</div>
              <div class="blog-item-tags">Interior / Home / {{ item.tag }}</div>
            </div>
            <div v-if="item.text.trim().length == 0" class="hide"></div>
            <div v-else class="blog-item-text">
              {{ item.text }}
            </div>
            <ol class="blog-item-list">
              <li
                class="blog-item-list-element"
                v-for="(listItem, listIndex) in item.list"
                :key="listIndex"
              >
                {{ listItem }}
              </li>
            </ol>
            <div v-if="item.quote.trim().length == 0" class="hide"></div>
            <div v-else class="blog-item-quote">
              <div class="blog-item-quotation-marks">“</div>
              <div class="blog-item-quote-text">
                {{ item.quote }}
              </div>
            </div>
          </div>
        </div>
        <div class="blog-filters">
          <div class="blog-filters-title">Tags</div>
          <div class="blog-filters-items">
            <div class="blog-filters-item" @click="currentFilter = 'Kitchen'">
              Kitchen
            </div>
            <div class="blog-filters-item" @click="currentFilter = 'Bedroom'">
              Bedroom
            </div>
            <div class="blog-filters-item" @click="currentFilter = 'Building'">
              Building
            </div>
            <div
              class="blog-filters-item"
              @click="currentFilter = 'Artchitecture'"
            >
              Artchitecture
            </div>
            <div
              class="blog-filters-item"
              @click="currentFilter = 'Kitchen Planning'"
            >
              Kitchen Planning
            </div>
            <div class="blog-filters-item" @click="currentFilter = 'Bedroom'">
              Bedroom
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogDetails",
  data() {
    return {
      articles: [
        {
          title: "Let’s Get Solution for Building Construction Work",
          imgUrl: "blog-post1.jpg",
          date: "26 December,2022",
          tag: "Kitchen",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. \n Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          list: [],
          quote: "The details are not the details. They make the design.",
        },
        {
          title: "Design sprints are great",
          imgUrl: "",
          date: "",
          tag: "Bedroom",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          list: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          quote: "",
        },
        {
          title: "",
          imgUrl: "blog-post2.png",
          date: "",
          tag: "Kitchen",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          list: [],
          quote: "",
        },
      ],
      currentFilter: "",
    };
  },
  methods: {
    getArticleImg(article) {
      return {
        article,
        image: article.imgUrl && require(`../assets/img/${article.imgUrl}`),
      };
    },
  },
  computed: {
    filteredList() {
      if (this.currentFilter) {
        return this.articles.filter((item) =>
          item.tag.includes(this.currentFilter)
        );
      } else {
        return this.articles;
      }
    },
  },
};
</script>
