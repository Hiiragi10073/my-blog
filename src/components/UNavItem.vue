<template>
  <div class="u-nav-item" :class="{ 'u-nav-item--active': active }">
    <span class="u-nav-item__title">{{ title }}</span>
    <i v-if="active" class="u-nav-item__icon"></i>
  </div>
</template>

<script>
export default {
  name: 'UNavItem',
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.u-nav-item {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 32px;

  background: $--color-title;
  border-radius: 5px;
  cursor: pointer;

  color: $--color-white;
}

.u-nav-item--active {
  background: $--color-primary;
}

.u-nav-item__title {
  font-size: 18px;
}

.u-nav-item__icon {
  display: inline-block;

  width: 18px;
  height: 18px;
  margin-left: 8px;

  background-image: url('~@/assets/icon/nav-actived.png');
  background-size: cover;
}
</style>
