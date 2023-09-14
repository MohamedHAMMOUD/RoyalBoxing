<template>
  <div class="main-container">
    <Navbar></Navbar>
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
export default {
  components: {
    RouterView,
    Navbar,
  },
  data() {
    return {
    };
  },
};
</script> 


<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}

.main-container {
  background-color: black;
  min-height: 100vh;
}

.active-component-container {
  min-height: 85vh;
}
</style>
