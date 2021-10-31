<template>
  <div class="u-footer">
    <a class="icp__link" href="http://beian.miit.gov.cn" target="_blank">
      ICP备案号: 闽ICP备2021014042号-1
    </a>
  </div>
</template>

<script>
export default {
  name: 'UFooter',
};
</script>

<style lang="scss" scoped>
.u-footer {
  height: 100%;

  background: $--color-white;
  text-align: center;
}

.icp__link {
  line-height: 58px;
}
</style>
