<template>
  <div class="directory-container">
    <h2>目录</h2>
    <ul v-html="navHtml" class="nav-list"></ul>
  </div>
</template>

<script>
export default {
  name: 'UDirectory',
  props: {
    content: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      navHtml: '',
    }
  },
  watch: {
    content(val) {
      val && this.renderNav();
    }
  },
  methods: {
    getTitleAndNav() {
      console.log(this.content);
      return this.content.match(/(#+)[^#][^\n]*?(?:\n)/g);
    },
    renderNav() {
      this.getTitleAndNav().forEach(item => {
        let level = item.match(/(#)/g).length || 1;
        console.log(level);
        this.navHtml += `
        <li class="nav-${level} nav-item">
          <a href="#" class="nav-item__link">${item.replaceAll('#', '')}</a>
        </li>
        `;
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.directory-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
}

.nav-list {
  height: 100%;
  padding-bottom: 20px;
  overflow: auto;
}

.nav-list::-webkit-scrollbar {
  width: 0 !important;
}
</style>

<style lang="scss">
.nav-item__link {
  color: $--color-text;
  text-decoration: none;
}

.nav-1 {
  margin-top: 20px;
}

.nav-2 {
  text-indent: 1em;
}

.nav-3 {
  text-indent: 2em;
}

.nav-4 {
  text-indent: 3em;
}

.nav-5 {
  text-indent: 4em;
}
</style>
