<template>
  <div class="navigation-container">
    <div class="navigation-body">
      <nav>
        <RouterLink to="/">
          <img class="royal-logo" src="/royaln_logo.png">
        </RouterLink>
        <RouterLink active-class="active-link" class="navbar-item" v-for="option in navigationOptions" :key="option.route" :to="`/${option.route}`">
          <span>{{ option.page }}</span>
        </RouterLink>
        <div class="navbar-button-container">
          <Button class="navbar-button">Espace Adhérent</Button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { navigationOptions } from '../utils/constants'
export default {
  name: "Contact",
  data() {
    return {
      navigationOptions
    };
  },
  methods: {

  },

  async created() {
  },
}
</script>

<style scoped lang="scss">
$blue-color: rgb(29, 29, 184);
$nav-font : "Twemoji Country Flags",
Avenir,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Roboto,
Helvetica,
Arial,
sans-serif,
"Apple Color Emoji",
"Segoe UI Emoji",
"Segoe UI Symbol";

.navigation-container {
  height: 15vh;
}

.navigation-body {
  padding: 0 64px;

}

.active-link {
  color: #f1d100;
}

nav {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  font-family: $nav-font ;
  // box-sizing: border-box;

  .royal-logo {
    margin-right: 64px;
  }

  .navbar-item {
    align-items: center;
    display: flex;
    margin-right: 32px
  }

  a {
    font-size: 1rem;
    color: white;
    text-decoration: none;

    &:hover {
      color: #f1d100;
    }
  }

  .navbar-button {
    background: #f1d100;
    border-radius: 8px;
    border: black solid;
    color: black;
    font-size: 16px;
    font-weight: 600;
    font-family: $nav-font ;
    width: 200px;
    height: 60px;
    cursor: pointer;
  }

  .navbar-button-container {
    align-items: center;
    display: flex;
    margin-left: auto;
    justify-content: center;


  }
}
</style>