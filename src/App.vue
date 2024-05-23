<template>
  <div id="app">
    <h1>SCSD Vue.js UI Components Library</h1>
    
    <div>
      <button class="round-blue-button" @click="goTo('UIButtons')">Go to Buttons</button>
      <button class="round-blue-button" @click="goTo('UIGraphs')">Go to Graphs</button>
      <button class="round-blue-button" @click="goTo('UIMenubars')">Go to Menubars</button>
    </div>

    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import UIButtons from './components/UIButtons.vue'
import UIGraphs from './components/UIGraphs.vue'
import UIMenubars from './components/UIMenubars.vue'

export default {
  name: 'App',
  components: {
    UIButtons,
    UIGraphs,
    UIMenubars
  },
  data() {
    return {
      currentComponent: ''
    }
  },
  methods: {
    goTo(component) {
      if (component === this.currentComponent) {
        this.currentComponent = '';
      } else {
        this.currentComponent = component;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.round-blue-button {
  @apply bg-blue-700 text-white border border-blue-700 
          rounded-full px-4 py-2 transition duration-300 ease-in-out mx-2;
}

.round-blue-button:hover {
  @apply bg-white text-blue-700;
}

</style>
