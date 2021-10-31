<template>
  <div class="article-container">
    <article class="markdown-body" v-html="htmlStr"></article>
  </div>
</template>

<script>
import marked from 'marked';
import Prism from 'prismjs';
import 'github-markdown-css/github-markdown.css';
import 'prismjs/themes/prism-coy.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true, //默认为true。 允许 Git Hub标准的markdown.
  tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
  breaks: false, //默认为false。 允许回车换行。该选项要求 gfm 为true。
  pedantic: false, //默认为false。 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
  sanitize: false, //对输出进行过滤（清理）
  smartLists: true,
  smartypants: false, //使用更为时髦的标点，比如在引用语法中加入破折号。
  highlight: function (code, lang) {
    return Prism.highlight(code, Prism.languages[lang], lang);
  },
});

export default {
  name: 'UArticle',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      htmlStr: '',
    };
  },
  mounted() {
    this.markMarkdown();
  },
  watch: {
    content(val) {
      if (val) {
        this.markMarkdown();
      }
    },
  },
  methods: {
    markMarkdown() {
      this.htmlStr = marked(this.content);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
}
</style>
