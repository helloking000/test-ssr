<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/bar">Bar</router-link>
        <router-link to="/baz">Baz</router-link>
        <router-link to="/foo">foo</router-link>
      </nav>
    </header>
    <div>
      <router-view></router-view>
    </div>
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '大灰狼，你好！',
    }
  }
}
</script>

