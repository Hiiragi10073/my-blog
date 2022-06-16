<template>
  <div class="list-item">
    <h3 class="list-item__title" @click="$emit('route', id)">{{ title }}</h3>
    <p class="list-item__summary">{{ summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String,
      require: true,
    },
    summary: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  padding: 10px;

  border-bottom: 1px solid $--color-background;
  cursor: pointer;
}

.list-item__title {
  color: $--color-primary;
  font-size: 18px;
}

.list-item__summary {
  color: $--color-text;
  font-size: 14px;
  line-height: 18px;
}
</style>
