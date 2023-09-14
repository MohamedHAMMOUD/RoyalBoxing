<template>
  <div class="home-wrapper">
    <div class="home-container">
      <div class="home-left-container">
        <div class="home-left-box">
          <img src="laplustitre-300x80.png">
        </div>
      </div>
      <div class="home-right-container">
        <img src="/home_main.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
.home-wrapper {
  display: flex;
}

.home-container {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0 64px;
  gap: 32px;

  .home-left-container {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .home-left-text {
      font-family: "Twemoji Country Flags",
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
    }
  }

  .home-left-box {
    display: flex;
    color: white;
    display: flex;
    flex-direction: column;
  }

  .home-right-container {
    display: flex;
    align-items: center;

  }
}
</style>