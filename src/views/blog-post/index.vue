<template>
  <div class="u-main blog-post">
    <aside class="u-main-aside u-main-aside--left blog-list"></aside>
    <main class="u-main-center">
      <div class="blog-post__container">
        <u-article :content="article"></u-article>
      </div>
    </main>
    <aside class="u-main-aside u-main-aside--right">
      <div class="blog-post__aside">
        <u-directory :content="article"></u-directory>
      </div>
    </aside>
  </div>
</template>

<script>
import UArticle from './components/article.vue';
import UDirectory from './components/directory.vue';

import { getBlogPostById } from '@/api/blog';

export default {
  name: 'BlogPost',
  components: {
    UArticle,
    UDirectory,
  },
  data() {
    return {
      article: '',
    };
  },
  watch: {
    $route() {
      this.getBlogPost();
    }
  },
  methods: {
    getBlogPost() {
      getBlogPostById(this.$route.params.id).then((res) => {
        const { status, message, data } = res;
        if (status === 200) {
          this.article = data.content;
        } else {
          this.$message.warning(message);
        }
      });
    },
  },
  created() {
    this.getBlogPost();
  },
};
</script>

<style lang="scss" scoped>
.blog-post__container {
  height: 100%;
  overflow-y: auto;
  
  border-radius: 5px;
}
</style>
