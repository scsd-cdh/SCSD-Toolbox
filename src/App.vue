<template>
  <div id="app">
    <UINavbar />
    <div class="mt-8">
      <RouterView />
    </div>
  </div>
</template>


<script>
import UINavbar from './components/Navbar/UINavbar.vue';

export default {
  name: 'App',
  components: {
    UINavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
