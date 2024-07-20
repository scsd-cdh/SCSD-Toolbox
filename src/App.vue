<template>
  <div id="app">
    <Navbar 
      title="SCSD Vue.js UI Components Library"
      :links="[
        { text: 'Home', to: '/' },
        { text: 'Buttons', to: '/buttons' },
        { text: 'Badges', to: '/badges' },
        { text: 'Tables', to: '/tables' },
      ]"
    />
    <section class="mt-8">
      <RouterView />
    </section>
  </div>
</template>


<script>
import Navbar from "@/components/navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
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
