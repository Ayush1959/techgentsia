<template>
  <div v-loading="loading">
    <header-top class="header-top"></header-top>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <h1 class="center mrg-top-20">posts</h1>
      <div
        class="main-block"
        v-for="post in mainposts"
        :key="post['data']['id']"
      >
        <label class="flt-left"> Title :</label>
        <p class="list-p-style">{{ post["data"]["title"] }}</p>
        <label class="flt-left"> Author :</label>
        <p class="list-p-style">{{ post["data"]["author"] }}</p>
        <label class="flt-left"> Created :</label>
        <p class="list-p-style">
          {{ post["data"]["created"] | moment("dddd, MMMM Do YYYY") }}
        </p>
        <label v-if="post['data']['selftext']" class="flt-left">
          Description :</label
        >
        <p v-if="post['data']['selftext']" class="list-p-style">
          {{ post["data"]["selftext"] | 25string }}
        </p>
        <img
          v-if="posts[0]['data']['preview']['images'][0]['source']['url']"
          :src="posts[0]['data']['preview']['images'][0]['source']['url']"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>


<script>
import HeaderTop from "./Header";
export default {
  components: {
    HeaderTop,
  },
  data() {
    return {
      posts: [],
      data: [],
      loading: false,
      busy: false,
      count: 5,
      mainposts: [],
    };
  },
  mounted() {
    var app = this;
    app.loading = true;
    this.$axios
      .get("https://www.reddit.com/r/webdev.json")
      .then(function (resp) {
        app.loading = false;
        app.posts = resp.data.data.children;
        app.mainposts = resp.data.data.children.slice(0, 5);
      });
  },
  methods: {
    loadMore: function () {
      if (this.count < 25) {
        this.count++;
      }
      if (this.count < 25 && this.count > 5) {
        this.mainposts = this.posts.slice(0, this.count);
      }
    },
  },
};
</script>


<style>
.center {
  text-align: center;
}
.flt-left {
  float: left;
}
.header-top {
  z-index: 1;
  position: fixed;
  right: 0px;
  left: 0px;
  top: 0;
}
.mrg-top-20 {
  margin-top: 50px;
}
</style>
 
 
<style  scoped>
.main-block {
  border: 5px outset;
  background-color: #d5eab8;
  margin-bottom: 20px;
}
.no-style {
  list-style: none;
  margin: 0;
  padding: 0;
}
.list-p-style {
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
}
</style>
 