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
    <div class="test-area">
      <button v-on:click="handleClick()">add</button>
      <div>{{count}}</div>
    </div>
    <div v-on:click="say('hi')">Say hi-1</div>
    <div @click="say('hi-2')">Say hi-2</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '大灰狼，你好！',
      count: 0,
    }
  },
  methods: {
    handleClick() {
      this.count++;
      console.log('clicked!!')
    },
    say: function (message) {
      alert(message)
    }
  }
}
</script>

