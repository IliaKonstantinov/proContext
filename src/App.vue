<template>
  <div class="app">
    <vLists />
    <vPanels />
  </div>
</template>

<script>
import vLists from './components/v-lists.vue'
import vPanels from './components/v-panels.vue'

export default {
  name: 'App',
  components: {
    vLists,
    vPanels
  }
}
</script>

<style>
  .app {
    display: flex;
  }
</style>
