<template>
  <div id="app">
    <header class="app__header">
      <u-header></u-header>
    </header>
    <main class="app__main">
      <router-view></router-view>
    </main>
    <footer class="app__footer">
      <u-footer></u-footer>
    </footer>
  </div>
</template>

<script>
import UHeader from '@/views/u-header';
import UFooter from '@/views/u-footer';

export default {
  name: 'App',
  components: {
    UHeader,
    UFooter,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;

  height: 100vh;
}

.app__header {
  height: 58px;
}

.app__main {
  width: 100%;
  height: calc(100vh - 116px);
  margin: 0 auto;
  padding: 20px;
  overflow: auto;
}

.app__footer {
  height: 58px;
}
</style>
