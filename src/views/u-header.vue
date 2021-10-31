<template>
  <div class="u-header">
    <div class="logo"></div>
    <nav class="u-header__nav">
      <router-link class="nav__link" to="/">首页</router-link>
      <a class="nav__link" href="#">后台</a>
    </nav>
    <div class="u-header__search">
      <input class="search__input" type="text" />
      <button class="search__button">搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHeader',
};
</script>

<style lang="scss" scoped>
.u-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 0 20px;

  background: $--color-white;
  box-shadow: 0 5px 14px 0px #bfbfbf;
  position: relative;
  z-index: 1;
}

.logo {
  width: 94px;
  height: 41px;

  background-image: url('~@/assets/logo.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.nav__link {
  margin-left: 20px;

  font-size: 24px;
  font-weight: 700;
}

.search__input {
  width: 205px;
  height: 28px;
  padding: 0 8px;

  border: none;
  border-radius: 5px;
  outline: 1px solid $--color-title;
}

.search__button {
  width: 65px;
  height: 28px;
  margin-left: 8px;

  background: $--color-primary;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  color: $--color-white;
}
</style>
