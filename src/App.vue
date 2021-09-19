<template>
  <div id="app">
    <router-view />
    <h1>News app</h1>
    <div>
      <i class="toutiao toutiao-shipin"></i>
    </div>
    <van-button type="primary">Primary</van-button>
    <van-button type="info">Info</van-button>
    <van-button type="default">Default</van-button>
    <van-button type="danger">Danger</van-button>
    <van-button type="warning">Warning</van-button>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
</style>