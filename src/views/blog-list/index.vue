<template>
  <div class="u-main blog-list">
    <div class="u-main-aside u-main-aside--right ">
      <aside class="blog-list__aside u-card">
        <div class="introduce">
          <img class="introduce__avatar" :src="avatarImgUrl" />
          <p class="introduce__name">{{ name }}</p>
        </div>
        <nav class="aside__nav">
          <u-nav-item
            class="nav__item"
            v-for="item in navList"
            :key="item.title"
            v-bind="item"
          ></u-nav-item>
        </nav>
      </aside>
    </div>
    <div class="u-main-center">
      <div class="blog-list__container u-card">
        <list-item
          v-for="item in blogList"
          :key="item.id"
          v-bind="item"
          @route="handleRoute"
        ></list-item>
      </div>
    </div>
  </div>
</template>

<script>
import UNavItem from '@/components/UNavItem';
import ListItem from './list-item.vue';

import { getBlogList } from '@/api/blog';

export default {
  name: 'BlogList',
  components: {
    UNavItem,
    ListItem,
  },
  data() {
    return {
      avatarImgUrl: '',
      name: '无敌的模儿',
      navList: [
        {
          title: '前端知识点',
          active: true,
        },
        {
          title: 'IT分享',
          active: false,
        },
        {
          title: '烹饪食谱',
          active: false,
        },
        {
          title: '随便记录',
          active: false,
        },
      ],
      blogList: [],
    };
  },
  created() {
    this.getBlogList();
  },
  methods: {
    async getBlogList() {
      const { status, data } = await getBlogList();
      if (status === 200) {
        this.blogList = data;
      }
    },
    handleRoute(id) {
      this.$router.push({ name: 'article', params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-list {
  height: 100%;
}

.blog-list__aside {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

.blog-list__container {
  overflow: auto;
}

.introduce {
  width: 100%;
  margin-bottom: 20px;
  padding: 40px 0;

  border-bottom: 1px solid $--color-background;

  text-align: center;
}

.introduce__avatar {
  display: inline-block;

  width: 68px;
  height: 68px;
  margin-bottom: 10px;

  border: 1px solid $--color-title;
  border-radius: 5px;
  overflow: hidden;
}

.introduce__name {
  font-size: 18px;
  font-weight: 700;
  color: $--color-primary;
}

.aside__nav {
  width: 100%;
}

.nav__item {
  margin-bottom: 10px;
}
</style>
