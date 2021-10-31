<template>
  <div class="blog-post">
    <aside class="blog-post__aside">
      <u-directory :content="article"></u-directory>
    </aside>
    <main class="blog-post__container">
      <u-article :content="article"></u-article>
    </main>
    <aside class="blog-list"></aside>
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
.blog-post__aside {
  width: 200px;
  height: calc(100vh - 159px);
  position: fixed;
}

.blog-post__container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
